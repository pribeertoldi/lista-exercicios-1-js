/* 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada. */

const prompt = require('prompt-sync')()

let opcao = Number(prompt('Digite uma opção: 1 - receber um abraço, 2 - receber dois reais ou 3 - receber presente misterioso: '))

switch(opcao){
    case 1: console.log('PARABÉNS, você ganhou um abraço')
    break
    case 2: console.log('PARABÉS, você ganhou R$ 2,00')
    break
    case 3: console.log('PARABÉNS, você ganhou um presente misterioso')
    break
    default: console.log('ERRO! Tente novamente')
}