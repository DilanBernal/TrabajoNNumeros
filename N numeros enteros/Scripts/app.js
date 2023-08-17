'use strict';
const cantidadInput = document.getElementById("cantidad");
const capturarBtn = document.getElementById("capturarBtn");
const resultadoDiv = document.getElementById("resultado");

capturarBtn.addEventListener("click", () => {
    const cantidad = parseInt(cantidadInput.value, 10);
    if (isNaN(cantidad) || cantidad <= 0) {
        resultadoDiv.textContent = "Ingrese una cantidad válida de números.";
        return;
    }

    const numeros = [];

    const capturarNumero = (indice) => {
        if (indice < cantidad) {
            const numero = parseInt(prompt(`Ingrese el número ${indice + 1}:`), 10);
            if (!isNaN(numero)) {
                numeros.push(numero);
                capturarNumero(indice + 1);
            } else {
                capturarNumero(indice);
            }
        } else {
            const numeroMayor = Math.max(...numeros);
            const numeroMenor = Math.min(...numeros);

            resultadoDiv.innerHTML = `El número mayor es: ${numeroMayor}<br>El número menor es: ${numeroMenor}`;
        }
    };

    capturarNumero(0);
});