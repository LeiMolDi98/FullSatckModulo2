//Crear objetos mediante variables

let usuario ={
    correo:"lmmolano@gmail.com",
    contraseña: "1234",
    //atributo
    saludar: function(){
        console.log(`Hola ${this.correo}`);
    },
}

console.log(usuario);
//asignar nuevo propiedad al objeto usuario
usuario.nombre ="Jhon Mendez";
console.log(usuario);
//acceder al nombre
console.log(usuario.nombre);
//imprime el compartamiento del objeto
usuario.saludar();

//creo objeto persona en memoria
const persona = new Object();
persona.nombre = "Leidy";
persona.apellido ="Molano";
persona.edad = 26;
persona.saludar = () =>{
    console.log (` Hola ${persona.saludar}`);
}
console.log(persona);
persona.saludar();

//Objetos con clases constructoras
function Animal (nombre,edad){
    this.nombre = nombre;
    this.edad = edad;
    //funcion anonima
    this.saludar = () =>{
        console.log(`Hola es: ${this.nombre}`);
    };
}

let perro = new Animal("Lucas",12);
console.log(perro);
perro.saludar();

//Crear objetos a  partir de clases
class Persona{
    constructor(nombre,apellido,edad){
        this.nombre = nombre;// atributo propio d ela clase persona = valores del objeto
        this.apellido = apellido;
        this.edad = edad;
    }
    //Metodos de clases
    saludar(){
        console.log(`Hola buenos dias ${this.nombre} ${this.apellido} y tengo ${this.edad}`);
    }     
}
//variable persona 1 = objeto(parametros)
let persona1 = new Persona("Leidy","Diaz",22);
console.log(persona1.nombre);
console.log(persona1);
persona1.saludar();
// clase profesor que hereda de persona
class profesor extends Persona{
    constructor (nombre,apellido,edad,salario){
        super(nombre,apellido,edad);
    }
    mostrarSalario(){
        console.log(`Hola soy el profesor ${this.nombre} y gano ${this.salario} pesos`);
    }
}

let profesor1 = new profesor ("Jhon","Mendez",45);
profesor1.salario =100000;
console.log(profesor1);
profesor1.mostrarSalario();

//encapsulación de atributos de un objeto
class Cuenta{
    #saldo
    constructor(saldo){
        this.#saldo = saldo;
    }

    setSaldo (saldo){
        if(saldo >0){
            console.error("No se pueden asignar saldos negativos")
        }else{
            this.#saldo = saldo;
        }
    }
    consultarSaldo(){
        return this.#saldo;
    }
}
//encapsula
let cuenta_ahorros = new Cuenta (100);
console.log(cuenta_ahorros);
cuenta_ahorros.saldo=-100;
console.log(cuenta_ahorros);
cuenta_ahorros.setSaldo(2000);
console.log(cuenta_ahorros);

//closures -- permiten acceder a atributos de clases
//permiten proteger datos mediante funciones publicas

function crearCuenta(saldo_uno){
    let saldo = saldo_uno;
    return{
        mostrarSaldo : () =>{
            console.log(saldo);
        }
    };
}

const cuenta = crearCuenta(100);
console.log(cuenta);
cuenta.mostrarSaldo();