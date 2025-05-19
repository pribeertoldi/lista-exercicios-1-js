/* 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if. */

const prompt = require('prompt-sync')()

let num = Number(prompt('Digite um número para verificar se ele é par ou ímpar: '))

if (isNaN(num)) {
    console.log('Valor inválido! Por favor, digite um número.');
} else if (num % 2 === 0){
    console.log('O número é PAR')
} else if (num % 2 !== 0 ){
    console.log('O número é ÍMPAR')
} else {
    console.log('O número é ZERO.')
}
