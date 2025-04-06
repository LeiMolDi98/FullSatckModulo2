function suma(a,b){
    return a+b;
}

function resta(a,b){
    return a-b;
}

console.log(suma(5,6));
console.log(resta(9,2));

//Funciones nativas
console.log(Math.min(5,1));
console.log(Math.max(9,5));
console.log(Math.pow(2,2));

//Funciones que no retorna
function saludo(nombre){
    console.log("Hola buenos dias " + nombre);
}

saludo("Leidy");
saludo("Juan");

let sumar = suma(5,5);
console.log(sumar);

//Funciones anonimas
const multiplicar = (num1, num2) =>{
    return num1*num2;
}

console.log(multiplicar(5,5));

//Funcion autoinvocable
(() => {
    console.log("funcion autinvocable");
})();

console.log("Fin de porgrama");
