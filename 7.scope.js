//Alcance 
/*
Global (Ambito global)
Funcion (Cambito local o de funcion)
Block Scope (Ambito de bloque)
*/

//global
let globalVar = "Soy una variable global";

function mostrarGlobal (){
    console.log(globalVar);
    //Accede a la variable global
}

mostrarGlobal();
console.log(globalVar);

function miFuncion(){
    let localVar = "soy una variable local";
    console.log(localVar);
}

miFuncion();//invocacion