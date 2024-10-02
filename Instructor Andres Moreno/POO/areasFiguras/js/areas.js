function datos() {
    let opcion = document.getElementById("opcion").value;
    let campos = document.getElementById("campos");

    if (opcion == "cuadrado") {
        campos.innerHTML = `
        <div class="row justify-content-center">
            <div class="col-md-8 user-box">
                <label for="lado" class="form-label mb-0">Lado ${opcion}</label>
                <input type="number" class="form-control mx-2" id="lado" value="" required>
                <div class="valid-feedback">Looks good!</div>
            </div>
        </div>`;
    } else {
        campos.innerHTML = `
        <div class="row justify-content-center">
            <div class="col-md-8 user-box">
                <label for="altura" class="form-label mb-0">Altura ${opcion}</label>
                <input type="number" class="form-control mx-2" id="altura" value="" required>
                <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-8 user-box">
                <label for="base" class="form-label mb-0">Base ${opcion}</label>
                <input type="number" class="form-control mx-2" id="base" value="" required>
                <div class="valid-feedback">Looks good!</div>
            </div>
        </div>`;
    }
}

function areas() {
    const figura = document.getElementById('opcion').value;
    let data = { figura: figura };

    if (figura === 'cuadrado') {
        data.lado = document.getElementById('lado').value;
    } else {
        data.base = document.getElementById('base').value;
        data.altura = document.getElementById('altura').value;
    }

    fetch('libreria/calcular.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error);
        } else {
            document.getElementById('pantalla').innerHTML = `
                <p>Resultado: ${data.resultado}</p>
            `;
        }
    })
    .catch(error => console.error('Error:', error));
}
