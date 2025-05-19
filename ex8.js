/*

8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente

*/

const prompt = require('prompt-sync')()

let num1 = Number(prompt('Digite um número: '))
let num2 = Number(prompt('Digite outro número: '))

let numeros = [num1, num2]

for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length - 1 - i; j++) {
        if (numeros[j] > numeros[j + 1]) {
            // Troca os elementos
            let temp = numeros[j]
            numeros[j] = numeros[j + 1]
            numeros[j + 1] = temp
        }
    }
}

console.log(numeros)