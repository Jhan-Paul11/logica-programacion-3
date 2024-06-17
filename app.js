// let valorIngresado = Number(prompt("Ingrese por favor un número positivo del 1 en adelante"));

// function calcularNumeroFactorial(numero) {
//     if (numero === 0) {
//         return { factorial: 1, valor: "1" };//el objeto tiene 2 campos factorial y valor
//     } else if (numero < 0) {
//         return { factorial: -1, valor: "" }; // Indicamos que el valor es inválido.
//     } else {
//         let resultado = calcularNumeroFactorial(numero - 1);
//         return {
//             factorial: numero * resultado.factorial,
//             valor: numero + " * " + resultado.valor
//         };
//     }
// }

// let resultado = calcularNumeroFactorial(valorIngresado);

// if (resultado.factorial === -1) {
//     console.log("Por favor, ingrese un número positivo.");
// } else {
//     console.log("El número que escribió es " + valorIngresado + "! y su factorial es " + resultado.factorial);
//     console.log("El proceso de cálculo es: " + resultado.valor);
// }

document.addEventListener('DOMContentLoaded', (event) => {
    let formulario = document.getElementById("formulario");

    formulario.addEventListener('submit', (event) => {
        event.preventDefault(); // preventDefault evita que se envíe la info

        let valorInput = document.getElementById("factor").value;
        let numero = Number(valorInput);

        if (isNaN(numero) || numero < 1) {
            alert("Ingrese un valor numérico positivo (solo NÚMEROS Positivos)");
            console.log("Entrada inválida: Ingrese un valor numérico positivo (solo NÚMEROS Positivos)");
        } else {
            let resultado = calcularNumeroFactorial(numero);
            mostrarResultado(numero, resultado);
        }
    });

    function calcularNumeroFactorial(numero) {
        if (numero === 0) {
            return { factorial: 1, valor: "1" }; // el objeto tiene 2 campos factorial y valor
        } else {
            let resultado = calcularNumeroFactorial(numero - 1);
            return {
                factorial: numero * resultado.factorial,
                valor: numero + " * " + resultado.valor
            };
        }
    }

    function mostrarResultado(numero, resultado) {
        let resultadoDiv = document.getElementById("result");
        resultadoDiv.innerHTML = `El número que escribió es ${numero} y su factorial es ${resultado.factorial}.<br>El proceso de cálculo es: ${resultado.valor}.`;
        console.log(`El número que escribió es ${numero} y su factorial es ${resultado.factorial}.`);
        console.log(`El proceso de cálculo es: ${resultado.valor}.`);
    }
});

