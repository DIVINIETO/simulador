function recuperarTexto(idComponente) {
    let componente = document.getElementById(idComponente);
    let valor = componente.value;

    return valor;
}

function recuperarFloat(idComponente) {
    let valorTexto = recuperarTexto(idComponente);
    let valorFloat = parseFloat(valorTexto);

    return valorFloat;
}

function recuperarEntero(idComponente) {
    let valorTexto = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorTexto);

    return valorEntero;
}

function mostrarSpam(idComponente, valor) {
    let componente = document.getElementById(idComponente);
    componente.textContent = valor;
}

function limpiarCaja(idComponente) {
    let componente = document.getElementById(idComponente);
    componente.value = "";
}