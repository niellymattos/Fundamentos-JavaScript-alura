const texto1 = "Olá mundo";
const texto2 = 'Olá mundo';
const senha = "senhaSuperSegura123!";
const StringDeNumeros = "1234567890";

const citacao = 'Na mesma hora ele me disse: "Hola, ';
const saludo = 'buenos días!"'

//concatenação (+)

console.log(citacao + saludo)


// template string OU template literal

// Unicode

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// transformando todos os caracteres em letras minúsculas.

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo);

/*o toLowerCase() converte todos os caracteres da string 
informada (no caso, input) para letras minúsculas (se forem 
algarismos, nada é convertido).*/


const senha2 = "minhaSenha123";
console.log(senha2.length) // 13 caracteres
/*A propriedade length pode ser utilizada para sabermos quantos 
caracteres uma string contém*/