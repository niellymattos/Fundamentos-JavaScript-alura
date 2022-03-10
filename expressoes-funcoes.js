// Estrutura de uma declaração de função
function minhaFuncao(param) {
    //bloco de código
}
minhaFuncao('param')


// Outro tipo de função: EXPRESSÃO DE FUNÇÃO
const soma = function(num1, num2){return num1 + num2}
console.log(soma(40,30))

// diferença principal: HOISTING
// funções e var são "listadas" no topo do nosso código.

console.log(apresentar())

function apresentar() {
    return "Olá amigos"
} //resultado ok


console.log(soma1(2, 3))
const soma1 = function(num2, num3) {return num2 + num3}
// ReferenceError: Cannot access 'soma' before initialization
// “Não é possível acessar 'soma' antes de sua inicialização"