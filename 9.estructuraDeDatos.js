/**
 Estructura de datos:
 1. Arreglos Array: Colecciones ordenadas de datos, que se pueden duplicar, istar, manipular e iterar
 2. Set: Coloecciones no ordenador, no indexadas, que no se pueden duplicar
 3. Map: colecciones de datos no ordenadas, permiten almacenr datos a partir de claves y  valores.
 */

 //1. Arreglos
 let numeros =[1,2,3,4,5,6,7,8,9,0];
 console.log(numeros);

 let letras = ["a","e","i","o","u"];
 console.log(letras);

 let mezcla =["a",1,2,"e"];
 console.log(mezcla);

 //iteracion de arreglos
 for(let i=0;i<numeros.length;i++){
    console.log(numeros[i]);
 }

 let dobles =  numeros.map(
    (numeros) => {
        return numeros *2;
    }
 );

 console.log(numeros);
 console.log(dobles);

 //Conjuntos de datos SET -- valores unicos
 let conjunto = new Set([1,1,2,3,4,6,7]);
 console.log(conjunto);

 conjunto.add(8);
 console.log(conjunto);

 conjunto.delete(2);
 console.log(conjunto);

 //Verificar existencia de un dato
 console.log(conjunto.has(10));
 console.log(conjunto.has(3));

 //contar el tamaño del set
 console.log(conjunto.size);

 //Maps colecciones con clave y valor
 let mapa = new Map ();
 mapa.set("nombre","Juan"); //clave nombre, vallor juan
 console.log(mapa);
 mapa.set("apellido","Perez");
 mapa.set("edad",30);
 mapa.set(100,"cien");//clave 100 valor cien
 console.log(mapa);

 //obtener un valor mediante una clave
 console.log(mapa.get("apellido"));
 console.log(mapa.get(100));
 mapa.set("edad",31);
 mapa.set("Edad",50);
 console.log(mapa);

 //Eliminar un dato de un mapa
 mapa.delete("Edad");
 console.log(mapa);

 //Recorrer un mapa
 mapa.forEach(
    (valor,clave)=> {
        console.log(`Clave: ${clave} -valor: ${valor}`);
    }
);