//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular() {
    // Leer el valor de ingresos (float)
    let ingresos = recuperarFloat("txtIngresos");

    // Leer el valor de egresos (float)
    let egresos = recuperarFloat("txtEgresos");

    // leer monto solicitado, plazo en años y tasa anual simple (enteros)
    let monto = recuperarEntero("txtMonto");
    let plazo = recuperarEntero("txtPlazo");
    let tasa = recuperarEntero("txtTasaInteres");

    // Llamar a calcularDisponible y guardar el retorno en una variable
    let disponible = calcularDisponible(ingresos, egresos);

    // Mostrar en pantalla saldo diponible
    mostrarSpam("spnDisponible", "USD " + disponible.toFixed(2));

    // llamar a calcularCapacidadPago con el disponible que ya se obtuvo
    let capacidadPago = calcularCapacidadPago(disponible);

    // mostrar en pantalla capacidad de pago 
    mostrarSpam("spnCapacidadPago", "USD " + capacidadPago.toFixed(2));

    // llamar a calcularInteresSimple y guardar el retorno
    let interes = calcularInteresSimple(monto, tasa, plazo);

    // mostrar en pantalla el interes a pagar
    mostrarSpam("spnInteresPagar", "USD " + interes.toFixed(2));

    // invocar a calcularTotalPagar con el monto y el interés que ya tenemos
    let total = calcularTotalPagar(monto, interes);

    // mostrar en pantalla el total del prestamo
    mostrarSpam("spnTotalPrestamo", "USD " + total.toFixed(2));

    // invocar a calcularCuotaMensual con el total y el plazo en años
    let cuotaMensual = calcularCuotaMensual(total, plazo);

    // mostrar en pantalla las cuotas mensuales
    mostrarSpam("spnCuotaMensual", "USD " + cuotaMensual.toFixed(2));

    // invocar a aprobarCredito y guardar el resultado en una variable
    let aprobado = aprobarCredito(capacidadPago, cuotaMensual);

    // mostrar el mensaje según el resultado
    if (aprobado) {
        mostrarSpam("spnEstadoCredito", "CREDITO APROBADO");
    } else {
        mostrarSpam("spnEstadoCredito", "CREDITO RECHAZADO");
    }
}

function reiniciar() {
    limpiarCaja("txtIngresos");
    limpiarCaja("txtEgresos");
    limpiarCaja("txtMonto");
    limpiarCaja("txtPlazo");
    limpiarCaja("txtTasaInteres");

    mostrarSpam("spnDisponible", "");
    mostrarSpam("spnCapacidadPago", "");
    mostrarSpam("spnInteresPagar", "");
    mostrarSpam("spnTotalPrestamo", "");
    mostrarSpam("spnCuotaMensual", "");
    mostrarSpam("spnEstadoCredito", "");
}

