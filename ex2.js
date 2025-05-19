/* 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor 
fornecido, utilizando uma estrutura de controle if-else. */

const prompt = require('prompt-sync')()

let idade = Number(prompt('Digite a sua idade: '))

if (isNaN(idade) || idade < 0 || !Number.isInteger(idade)){
    console.log('Valor inválido! Por favor, digite a sua idade novamente.');
} else if (idade >= 0 && idade <= 10){
    console.log(`A idade ${idade} pertence a faixa etária CRIANÇA!`)
} else if (idade > 10 && idade <= 18){
    console.log(`A idade ${idade} pertence a faixa etária ADOLESCENTE!`)
} else if (idade > 18 && idade <= 60){
    console.log(`A idade ${idade} pertence a faixa etária ADULTO!`)
} else {
    console.log(`A idade ${idade} pertence a faixa etária IDOSO!`)
}