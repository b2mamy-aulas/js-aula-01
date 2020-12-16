// DESAFIO 6

// Faça um sistema que define se o usuário pode ou não dirigir.
// Lembrando que a idade mínima para dirigir é 18 anos ;)


// ENTRADA
// Perguntar a idade
let idade = Number(prompt("Digite a sua idade: "))

// PROCESSAMENTO
// SE idade for >= 18, ele pode dirigir
// CASO CONTRÁRIO, ele não pode dirigir

if(idade >= 18){
    alert("PARABÉEEENS, VOCÊ PODE DIRIGIR!!!")
}else if(idade >= 16 && idade < 18){
    alert("VOCÊ PODE DIRIGIR SE FOR EMANCIPADO.")
}else{
    alert("VOCÊ AINDA NÃO PODE DIRGIR :(")
}

// SAÍDA
// Retornar se o usuário pode ou não dirigir.

