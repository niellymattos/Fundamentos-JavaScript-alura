// parâmetros e argumentos de função


// SOMA

function soma(numero1, numero2) {
    return numero1 + numero2;
}

console.log(soma(5,9))
console.log(soma(150,25))
console.log(soma(-500,90))


//NOMEIDADE

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade} anos`;
}

console.log(nomeIdade("Kelly", 20))


// SOMA E MULTIPLICA

function soma(numero1, numero2) {
    return numero1 + numero2;    
}

function multiplica(numero1, numero2) {
    return numero1 * numero2;
}

console.log(multiplica(soma(4,5), soma(3, 3)))

// Parâmetros x argumentos: Na prática se referem ao mesmo tipo de dado; 
// algumas documentações se referem a parâmetros no momento em que a função 
// é definida (no caso, numero1, numero2, etc) e argumentos como os dados 
// que utilizamos para executar a função (ou seja, 30, 45, etc).
