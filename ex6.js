/*

6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, 
deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero

Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

*/

const prompt = require('prompt-sync')()

let A = Number(prompt('Qual o tamanho do lado A (em cm): '))
let B = Number(prompt('Qual o tamanho do lado B (em cm): '))
let C = Number(prompt('Qual o tamanho do lado C (em cm): '))

if (A !== 0 && B !== 0 && C !== 0 && A < (B + C) && B < (A + C) && C < (A + B)){
    if ((A===B) && (B===C)){
        console.log('Triângulo equilátero')
    }else if ((A !== B) && (B !== C) && (A !== C)){
        console.log('Triângulo escaleno')
    } else {
        console.log('Triângulo isósceles')
    }
} else {
    console.log('Não é possível formar um triângulo')
}