
function realizarTodasOpereciones() {
    const numUno = document.getElementById("txtNumUno").value;
    const numDos = document.getElementById("txtNumDos").value;

    fetch('libreria/calcular.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            txtNumUno: numUno,
            txtNumDos: numDos
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error);
        } else {
            document.getElementById("resultadoSuma").textContent = `Suma: ${data.suma}`;
            document.getElementById("resultadoResta").textContent = `Resta: ${data.resta}`;
            document.getElementById("resultadoMultiplicacion").textContent = `Multiplicación: ${data.multiplicacion}`;
            document.getElementById("resultadoDivision").textContent = `División: ${data.division}`;
        }
    })
    .catch(error => console.error('Error:', error));
}

