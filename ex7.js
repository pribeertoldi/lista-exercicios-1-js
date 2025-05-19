/*

7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo 
que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

*/

const prompt = require('prompt-sync')()

let macas = Number(prompt('Quantas maçãs foram compradas?'))

if (macas < 12){
    console.log(`Foram compradas ${macas} maçãs e o valor total é R$ ${(macas*0.30)}`)
} else {
    console.log(`Foram compradas ${macas} maçãs e o valor total é R$ ${(macas*0.250)}`)
}