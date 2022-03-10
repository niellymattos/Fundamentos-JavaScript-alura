// OPERADOR TERNÁRIO (três operadores)

// Funciona igual ao IF quando queremos fazer comparações mais curtas

const idadeMinima = 18;
const idadeCliente = 15;

console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")


// Quando colocamos várias condições dentro de condições, 
// utilizamos o IF mesmo, por ser mais fácil de ler e 
// dar manutenção desse código depois.

//IF
const idadeMinima1 = 18;
const idadeCliente1 = 23;

if (idadeCliente1 >= idadeMinima1) {
    console.log("cerveja")
} else {
    console.log("suco")    
}

