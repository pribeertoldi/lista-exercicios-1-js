/*

15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

*/


let a = 0
let b = 1
let proximo

console.log("Os 10 primeiros números da sequência de Fibonacci:")

for (let i = 1; i <= 10; i++) {
    proximo = a + b
    a = b
    b = proximo
    console.log(a)
}