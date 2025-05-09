const apiUrl = 'https://localhost:7294/api/person'; // Cambia por tu endpoint real
let idActual = null; // Para saber si estamos editando

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-green-700 transition",
        cancelButton: "px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
    },
    buttonsStyling: false
});

async function alertSuccess(mensaje) {
    Swal.fire({
        position: "center",
        icon: "success",
        title: mensaje,
        showConfirmButton: false,
        timer: 1500
    });
}

async function alertError(mensaje) {
    Swal.fire({
        position: "center",
        icon: "error",
        title: mensaje,
        showConfirmButton: false,
        timer: 1500
    });
}
async function alertDelete() {
    return await swalWithBootstrapButtons.fire({
        title: "¿Estás seguro?",
        text: "¡Esta acción no se puede deshacer!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "No, cancelar",
        reverseButtons: true
    });
}
// Cargar todos los registros al iniciar
document.addEventListener('DOMContentLoaded', cargarRegistros);
// Limpiar formulario
document.getElementById('btnCancelar').addEventListener('click', limpiarFormulario);

// CREAR
document.getElementById('btnCrear').addEventListener('click', () => {
    const first_name = document.querySelector('.firstname').value.trim();
    const last_name = document.querySelector('.lastname').value.trim();
    const phone_number = document.querySelector('.phonenumber').value.trim();

    if (!first_name || !last_name || !phone_number) {
        alertError('Todos los campos son obligatorios')
        return;
    }

    const data = { first_name, last_name, phone_number, active: true };

    fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(res => {
            if (!res.ok) throw new Error('Error al crear');
            return res.json();
        })
        .then((data) => {
            console.log(data);
            alertSuccess(`Person "${data.first_name}" creado exitosamente`);
            limpiarFormulario();
            cargarRegistros();
        })

        .catch(err => alert(err));
});

// ACTUALIZAR
document.getElementById('btnActualizar').addEventListener('click', () => {
    if (!idActual) return;
    const first_name = document.querySelector('.firstname').value.trim();
    const last_name = document.querySelector('.lastname').value.trim();
    const phone_number = document.querySelector('.phonenumber').value.trim();

    const data = {
        id: idActual,
        first_name,
        last_name,
        phone_number,
        active: true
    };

    fetch(`${apiUrl}/${idActual}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(async res => {
            if (!res.ok) {
                return res.json().then(data => {
                    throw new Error(data.message || 'Error desconocido');
                });
            }
            return res.json();
        })
        .then(data => {
            alertSuccess(data.message);
            limpiarFormulario();
            cargarRegistros();
        })
        .catch(err => {
            mostrarMensajeError(err.message);
        });
});


// Listar registros
function cargarRegistros() {
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            const tbody = document.querySelector('#tablaForm tbody');
            tbody.innerHTML = '';
            let contador = 1;

            data.forEach(item => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                <td  class="px-4 py-3 text-sm text-white">${contador++}</td>
                <td  class="px-4 py-3 text-sm text-white" >${item.full_name}</td>
                <td  class="px-4 py-3 text-sm text-white">${item.phone_number}</td>
                <td  class="px-4 py-3 text-sm text-white">
                    <div class="flex items-center space-x-4 text-sm">
                        <button
                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray border border-indigo-600"
                            aria-label="Edit"
                            onclick="editarRegistro(${item.id})">

                            <div class="flex items-center text-sm">
                                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                                </svg>
                                <span>Edit</span>
                            </div>
                        </button>

                        <button
                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray border border-indigo-600"
                            aria-label="Delete"
                            onclick="eliminarRegistro(${item.id})">

                            <div class="flex items-center text-sm">

                                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                    clip-rule="evenodd"></path>
                                </svg>
                                <span>Delete</span>

                            </div>
                        </button>
                    </div>
                </td>
        `;
                tbody.appendChild(tr);
            });
        })
        .catch(err => alert('Error al cargar registros: ' + err));
}

// capturar Datos para editar
function editarRegistro(id) {
    fetch(`${apiUrl}/${id}`)
        .then(res => {
            if (!res.ok) throw new Error('Registro no encontrado');
            return res.json();
        })
        .then(item => {
            document.querySelector('.firstname').value = item.first_name;
            document.querySelector('.lastname').value = item.last_name;
            document.querySelector('.phonenumber').value = item.phone_number;
            idActual = item.id;

            document.getElementById('btnCrear').classList.add('hidden');
            document.getElementById('btnActualizar').classList.remove('hidden');
            document.getElementById('btnCancelar').classList.remove('hidden');
        })
        .catch(err => alert(err));
}

// ELIMINAR
async function eliminarRegistro(id) {
    const result = await alertDelete(); // <-- Aquí obtenemos el resultado

    if (result.isConfirmed) {
        try {
            const response = await fetch(`${apiUrl}/${id}`, {
                method: 'DELETE'
            });

            const data = await response.json();

            if (!response.ok) {
                // Si el backend devuelve un error (por ejemplo, clave foránea), lo mostramos
                swalWithBootstrapButtons.fire({
                    title: "Error",
                    text: data.message || "No se pudo eliminar el registro.",
                    icon: "error"
                });
                return;
            }

            // Si se eliminó correctamente
            swalWithBootstrapButtons.fire({
                title: "¡Eliminado!",
                text: data.message,
                icon: "success"
            });
            cargarRegistros();

        } catch (error) {
            console.error("Error al eliminar el Form:", error);
            swalWithBootstrapButtons.fire({
                title: "Error",
                text: "No se pudo conectar con el servidor.",
                icon: "error"
            });
        }
    } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
            title: "Cancelado",
            text: "El Form no ha sido eliminado.",
            icon: "error"
        });
    }
}

function limpiarFormulario() {
    document.querySelector('.firstname').value =  '';
    document.querySelector('.lastname').value = '';
    document.querySelector('.phonenumber').value = '';
    idActual = null;

    document.getElementById('btnCrear').classList.remove('hidden');
    document.getElementById('btnActualizar').classList.add('hidden');
    document.getElementById('btnCancelar').classList.add('hidden');
}

// MENSAJE DE ÉXITO
function mostrarMensaje(mensaje) {
    const alerta = document.getElementById('mensajeExito');
    alerta.textContent = mensaje;
    alerta.classList.remove('hidden');
    setTimeout(() => alerta.classList.add('hidden'), 3000);

}

// Función para mostrar el mensaje de error
function mostrarMensajeError(message) {
    const errorElement = document.getElementById('mensajeError');
    errorElement.textContent = message;
    errorElement.classList.remove('hidden');
    setTimeout(() => errorElement.classList.add('hidden'), 3000);
}

