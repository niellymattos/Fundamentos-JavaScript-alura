// EXEMPLOS DE CONVERSÃO DE DADOS PARA NÚMEROS OU TEXTOS

// NUMBER()

// conversão implícita
const numero = 456;
const numeroString = "456"
console.log(numero + numeroString) // "456456" concatenação


// conversão explícita
console.log(numero + Number(numeroString)) // "912" soma


// Calculando a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); 
// teremos a conversão de String para números, possibilitando a realização da 
// multiplicação


// Convertendo String para números usando o operador "+" antes das variáveis
let largura1 = "20";
let altura1 = "5";
console.log( + largura1 * + altura1); 


// Retorno do erro NaN (Not a Number, não é número)
let meuNome = "leonardo";
console.log(Number(meuNome)); // a variável meuNome não contém números a serem convertidos
console.log( + meuNome); // a conversão também retornará NaN


// Conversão da booleana para número
let usuarioConectado = false;
console.log(Number(usuarioConectado)); // false (falso) retorna o número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado)); // true (verdadeiro) retorna o número 1.


// STRING()

let telefone = 12341234;
console.log("O telefone é " + String(telefone)); 
// Aqui teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos 
//fazer a concatenação entre as strings.


// toString
let telefone1 = 12341234;
console.log("O telefone é " + telefone1.toString()); 
// o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras 
// linguagens de programação.


// Conversão da booleana para string
let usuarioConectado1 = false;
console.log(String(usuarioConectado1)); // teremos uma string “false”.
usuarioConectado1 = true;
console.log(String(usuarioConectado1)); // teremos uma string “true”.

