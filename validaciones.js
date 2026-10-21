/* ==========================================================
   Banco Andino · Validaciones del simulador
   Se carga al final del <body>; no modifica calcular() ni reiniciar()
   ========================================================== */
(function () {
    'use strict';

    // Límites ajustables (min y max inclusivos)
    const REGLAS = {
        txtIngresos: { nombre: 'Ingresos', min: 1, max: 1000000, entero: false },
        txtEgresos: { nombre: 'Egresos', min: 0, max: 1000000, entero: false },
        txtMonto: { nombre: 'Monto', min: 100, max: 1000000, entero: false },
        txtPlazo: { nombre: 'Plazo', min: 1, max: 30, entero: false },
        txtTasaInteres: { nombre: 'Tasa de interés', min: 0.1, max: 50, entero: false }
    };

    const ORDEN = Object.keys(REGLAS);
    const NUMERO = /^(\d+(\.\d*)?|\.\d+)$/; // solo dígitos y un punto decimal

    const $ = id => document.getElementById(id);
    const formato = n => n.toLocaleString('en-US');

    function obtenerError(id) {
        const regla = REGLAS[id];
        const texto = $(id).value.trim();

        if (texto === '') {
            return regla.nombre + ' es obligatorio.';
        }
        if (texto.charAt(0) === '-') {
            return 'No se permiten valores negativos.';
        }
        if (!NUMERO.test(texto)) {
            return 'Ingrese solo números (use punto para los decimales).';
        }

        const valor = Number(texto);

        if (regla.entero && !Number.isInteger(valor)) {
            return regla.nombre + ' debe ser un número entero.';
        }
        if (valor < regla.min) {
            return 'El valor mínimo es ' + formato(regla.min) + '.';
        }
        if (valor > regla.max) {
            return 'El valor máximo es ' + formato(regla.max) + '.';
        }

        // Regla cruzada: egresos no pueden superar a ingresos
        if (id === 'txtEgresos') {
            const textoIngresos = $('txtIngresos').value.trim();
            if (NUMERO.test(textoIngresos) && valor > Number(textoIngresos)) {
                return 'Los egresos no pueden ser mayores que los ingresos.';
            }
        }

        return '';
    }

    function mostrarError(id, mensaje) {
        const input = $(id);
        const caja = $('err' + id.charAt(0).toUpperCase() + id.slice(1));

        caja.textContent = mensaje;
        input.classList.toggle('invalido', mensaje !== '');

        if (mensaje) {
            input.setAttribute('aria-invalid', 'true');
        } else {
            input.removeAttribute('aria-invalid');
        }
    }

    function validarCampo(id) {
        const mensaje = obtenerError(id);
        mostrarError(id, mensaje);
        return mensaje === '';
    }

    function validarTodo() {
        let primerInvalido = null;

        ORDEN.forEach(function (id) {
            if (!validarCampo(id) && primerInvalido === null) {
                primerInvalido = id;
            }
        });

        if (primerInvalido !== null) {
            $(primerInvalido).focus();
            return false;
        }
        return true;
    }

    // Llamada desde el botón "Calcular crédito"
    window.validarYCalcular = function () {
        if (validarTodo()) {
            calcular(); // función original, sin cambios
        }
    };

    // Validar al salir de cada campo (blur)
    ORDEN.forEach(function (id) {
        $(id).addEventListener('blur', function () {
            validarCampo(id);

            // Si cambian los ingresos, revisar de nuevo los egresos
            if (id === 'txtIngresos' && $('txtEgresos').value.trim() !== '') {
                validarCampo('txtEgresos');
            }
        });
    });

    // Al reiniciar, limpiar también los mensajes de error
    // (se ejecuta después del onclick="reiniciar();" existente)
    $('btnReiniciar').addEventListener('click', function () {
        ORDEN.forEach(function (id) {
            mostrarError(id, '');
        });
    });
})();