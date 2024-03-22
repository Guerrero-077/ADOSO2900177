function capturarDato(value) {
    document.getElementById('pantalla').value += value;
}

function limpiar() {
    document.getElementById('pantalla').value = '';
}

function operaciones() {
    var opererar = document.getElementById('pantalla').value;
    var resultado = eval(opererar);
    document.getElementById('pantalla').value = resultado;
    return;
}