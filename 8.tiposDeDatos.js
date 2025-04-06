//Numerica

let edad =15
console.log(edad);

let nobre ="leidy";
console.log(nobre[2]);

//los for recurren los string
//.length me saca la longitud
for (let i=0;i<nobre.length; i++){
    console.log(nobre[i]);
}

console.log(typeof nobre);

//string para tildes o backticks
let apellido ="Perez";

let saludo = `Hola soy ${nobre} ${apellido} y tengo ${edad} años`;
console.log(saludo);

let saludo2 = "Hola soy" + nobre + " " + apellido + " y tengo " + edad + "a;os";
console.log(saludo2);

//boleanos - datos logicos
let sesion = true;
if (sesion){
    console.log ("sesion iniciada");
} else{
    console.log("sesión no iniciada");
}

console.log(typeof sesion);

//Variables que no tienen inicio
let estatura;
console.log(estatura);
console.log(typeof estatura);

//Null el valor esta ausente
let edad2 = null;

console.log(edad2);
console.log(typeof edad2);

//Symbol = representacion unica de una variable
let id = Symbol ("identificador");
console.log(id);
console.log(typeof id);

//Tipos de datos de referencia
class Persona{
    constructor(nobre, apellido){
        this.nobre = nobre;
        this.apellido = apellido;
    }
}

let persona1 = new Persona ("Juan", "Perez");
let persona2 = new Persona("Juan","Torres");
console.log(persona1);
console.log(typeof persona2);

let lista = [0,1,2,3,4,5,6];
console.log(lista);
console.log(typeof lista);

const usurio ={
    nombre: "Juana",
    apellido: "Toro",
    [id]:1234,
};
console.log(usurio.nombre);
console.log(usurio[id]);