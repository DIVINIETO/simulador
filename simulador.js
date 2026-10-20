//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular() {
    // Leer el valor de ingresos (float)
    let ingresos = recuperarFloat("txtIngresos");

    // Leer el valor de egresos (float)
    let egresos = recuperarFloat("txtEgresos");

    // Llamar a calcularDisponible y guardar el retorno en una variable
    let disponible = calcularDisponible(ingresos, egresos);

    // Mostrar en pantalla saldo diponible
    mostrarSpam("spnDisponible", "USD " + disponible.toFixed(2));

    // llamar a calcularCapacidadPago con el disponible que ya se obtuvo
    let capacidadPago = calcularCapacidadPago(disponible);

    // mostrar en pantalla capacidad de pago 
    mostrarSpam("spnCapacidadPago", "USD " + capacidadPago.toFixed(2));
}

