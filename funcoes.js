// testando um pedaço de código
let x = "";
x = "Oi!!"; 
console.log(x);

// Uma função geralmente é um código pequeno, bem específico e claro, que facilita 
// a leitura, o reaproveitamento e a manutenção do código.

// DECLARAÇÃO DE FUNÇÃO

// 1- declara a função
function imprimeTexto(texto) {
    //console.log(texto)
}

// 2- executa a função (1 ou mais vezes)
imprimeTexto("Olá!!!");
imprimeTexto("Usando funções");

imprimeTexto(soma());
function soma(){
    // Antes da linha do return podem ser inseridas diversas informações
    // outros códigos
    // vários console.log()
    // o bloco é fechado com o return
    return 2 + 2;
}

console.log(soma())


// TIPOS DE FUNÇÕES

// Função sem retorno e sem parâmetro. Como é usada uma string fixa, 
// não há necessidade de parâmetros.

function cumprimentar(){
 console.log('Oi gente!')
}

cumprimentar()

//Função sem retorno, com parâmetro.

function cumprimentaPessoa(pessoa){
    console.log(`Oi, ${pessoa}!`)
   }
   
cumprimentaPessoa('Helena')

// Função com retorno, sem parâmetro

function cumprimentar1(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa1(nomePessoa) {
    console.log(`${cumprimentar1()} Meu nome é ${nomePessoa}`)
   }
   
cumprimentaPessoa1('Paula') 

// Função com return e mais de um parâmetro

function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
   }
   
console.log(operacaoMatematica(15, 30, 45))