/* 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de 
peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else. */

const prompt = require('prompt-sync')()

let peso = Number(prompt('Digite seu peso: '))
let altura = Number(prompt('Digite a sua altura: '))

let imc = peso / (altura*altura)

if (imc <= 18.5){
    console.log(`Seu IMC é ${imc.toFixed(2)}, categoria: baixo peso`)
} else if (imc >= 18.6 && imc <= 24.9){
    console.log(`Seu IMC é ${imc.toFixed(2)}, categoria: peso normal`)
} else if (imc >= 25.0 && imc <= 29.9){
    console.log(`Seu IMC é ${imc.toFixed(2)}, categoria: sobrepeso`)
} else {
    console.log(`Seu IMC é ${imc.toFixed(2)}, categoria: obesidade`)
}