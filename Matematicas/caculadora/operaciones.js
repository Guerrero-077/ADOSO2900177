function capturarDato(value) {
    document.getElementById('display').value += value;
}

function limpiar() {
    document.getElementById('display').value = '';
}

function operaciones() {
    var opererar = document.getElementById('display').value;
    var result = eval(opererar);
    document.getElementById('display').value = result;
}