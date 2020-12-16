// DESAFIO 4:

// Crie um programa que receba um número inteiro e imprima na tela seu sucessor e antecessor. A resposta deve ser: "Analisando o número x, seu antecessor é y e seu sucessor é z".

// ENTRADA
let numero = Number(prompt("digite um numero"))

// PROCESSAMENTO
let antecessor = numero - 1
let sucessor = numero + 1

// SAÍDA
console.log("Analisando o " + numero + ", seu antecessor é " + antecessor + " e seu sucessor é " + sucessor + ".")

