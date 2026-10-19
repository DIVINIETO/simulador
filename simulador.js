//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular() {
    // Leer el valor de ingresos (float)
    let ingresos = recuperarFloat("txtIngresos");

    // Leer el valor de egresos (float)
    let egresos = recuperarFloat("txtEgresos");

    // Llamar a calcularDisponible y guardar el retorno en una variable
    let disponible = calcularDisponible(ingresos, egresos);

    // Mostrar en pantalla
    mostrarSpam("spnDisponible", "USD " + disponible.toFixed(2));
}