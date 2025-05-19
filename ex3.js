/* 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando 
if-else if. */

const prompt = require('prompt-sync')()

let nota = Number(prompt('Digite a nota: '))

if (isNaN(nota) || nota < 0 || nota > 10){
    console.log('Nota inválida! Por favor, digite novamente.');
} else if (nota === 0){
    console.log(`Sua nota é ${nota}, você está Reprovado`)
} else if (nota > 6){
    console.log(`Sua nota é ${nota}, você está Aprovado`)
} else {
    console.log(`Sua nota é ${nota}, você está em recuperação`)
}