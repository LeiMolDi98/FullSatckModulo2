/*Condiciones
IF - ELSE - SWITCH - TERNARIO*/

let edad =15

if (edad >18){
    console.log("es mayor de edad");
}else{
    console.log("es menor de edad");
}
console.log("fin del programa");

//Ejemplo 2
let naranja = 6;
let descuento = 0.2;
if(naranja>10){
    let precio = naranja - (naranja*0.2);
    console.log(precio);
}else{
    if(naranja>5){
        let precio = naranja - (naranja*0.1);
        console.log(precio);
    }else{
        console.log(precio);

    }
}

//Ejemplo 2 de Switch (Menu)

let dia_semana ="Lunes";
switch(dia_semana){
    case "Lunes":
        console.log("Hoy es Lunes");
        break;
        case "Martes":
            console.log("Hoy es Martes");
            break;
        case "Miercoles":
            console.log("Hoy es Miercoles");
            break;
        case "Juves":
            console.log("Hoy es Jueves");
            break;
        case "Viernes":
                console.log("Hoy es Viernes");
            break;
        default:
            console.log("Fin de semana");              
}

//Ejemplo 4 Ternario
let pensionado = true
let es_pensionado = (pensionado)? "Es pensionado" : "No es pensionado";
console.log (es_pensionado);