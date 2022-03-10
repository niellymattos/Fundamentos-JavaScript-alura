//Estrutura clássica de Function
function apresentar(nome) {
    return `Meu nome é ${nome}`;
}

// Outra forma de se escrever função no JS
// Arrow Function (=> flecha)
// Usando apenas um parâmetro não abrimos parênteses (nome)
const apresentarArrow = nome => `Meu nome é ${nome}`;
console.log(apresentarArrow('Maria'))


// Usando dois ou mais parâmetros, abrimos parênteses
const soma = (num1, num2) => num1 + num2;
console.log(soma(140,30))

// Arrow Function com mais de uma linha de instrução
const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10) {
        return "somente números de 1 a 9"
    } else {
        return num1 + num2;
    }
}
console.log(somaNumerosPequenos(8,9))
//Hoisting: Arrow Function se comporta como Function Expression