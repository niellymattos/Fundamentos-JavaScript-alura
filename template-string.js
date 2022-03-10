// TEMPLATE STRING
// Facilita a concatenação

// CONCATENAÇÃO DE STRINGS
const nome = "Mariah";
const idade = 2022-1996;
const cidadeDeNascimento = "Rio de Janeiro";

const apresentacao = "Meu nome é " + nome + ", minha idade é " + idade + " anos, e nasci na cidade do " + cidadeDeNascimento;


// TEMPLATE STRING
const nome1 = "John";
const idade1 = 2022-1977;
const cidadeDeNascimento1 = "Rio de Janeiro";

const apresentacao1 = `Meu nome é ${nome1}, minha idade é ${idade1}, e nasci na cidade do ${cidadeDeNascimento1}`;
console.log(apresentacao1)


// Ternário e Template
const nome2 = "Max";
const idade2 = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome2} diz: "por favor, quero beber ${idade2 >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)