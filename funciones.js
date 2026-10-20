//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO

function calcularDisponible(ingresos, egresos) {
    let disponible = ingresos - egresos;

    if (disponible < 0) {
        disponible = 0;
    }

    return disponible;
}

function calcularCapacidadPago(montoDisponible) {
    let capacidadPago = montoDisponible * 0.5;

    return capacidadPago;
}

function calcularInteresSimple(monto, tasa, plazoAnios) {
    let interes = plazoAnios * monto * (tasa / 100);

    return interes;
}

function calcularTotalPagar(monto, interes) {
    let total = monto + interes + 100;

    return total;
}

function calcularCuotaMensual(total, plazoAnios) {
    let meses = plazoAnios * 12;
    let cuota = total / meses;

    return cuota;
}

function aprobarCredito(capacidadPago, cuotaMensual) {
    let aprobado = false;

    if (capacidadPago > cuotaMensual) {
        aprobado = true;
    }

    return aprobado;
}

