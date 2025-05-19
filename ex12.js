/*

12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for

*/

const prompt = require('prompt-sync')()

let num = Number(prompt("Digite o número que gostaria de saber a tabuada: "))
let tabuada = 0

for (i = 0 ; i <= 10; i++){
    tabuada = (num*i)
    console.log(tabuada)
}