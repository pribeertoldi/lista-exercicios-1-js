/*

13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

*/

const prompt = require('prompt-sync')()

let num = 0
let soma = 0
let contador = 0
let media = 0

do {
    num = Number(prompt('Digite um número (0 para sair): '))

    if (num !== 0) {
        soma += num
        contador++
    }

} while (num !== 0)

media = soma / contador

console.log(media.toFixed(2))



