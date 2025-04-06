//alert("Hola Mundo");
const titulo_id = document.getElementById("titulo");
//document = oBjeto que maneja metodos para acceder a alos elementos
console.log(titulo);

//conaulta por nombre del tag
let titulo_elemento = document.getElementsByName("h1");
console.log(titulo_elemento);

//consulta por consulta .querySelector y elementos de css
let titulo_query = document.querySelector("#titulo");
console.log(titulo_query);

//consulta por clase
let parrafos = document.getElementsByClassName("Parrafoo");
console.log(parrafos);

//Modifica el elemento del html
titulo_id.innerHTML = "<h2>Esto es un nuevo titulo desde Js</h2>";
//Modifica el contenido unicamente
titulo_id.textContent ="Esto es un nuevo titulo desde JS";
//Modifica estilos
titulo_query.style.color = "red";
titulo_query.style.fontSize ="50px";

//Agregar elementos a la clase
let mi_parrafo = document.querySelector("#MiParrafo");
console.log(mi_parrafo);
mi_parrafo.classList.add("parrafos");

//Crea nuevos elementos
let nuevo_parrafo = document.createElement("p");
nuevo_parrafo.textContent = "Esto es un parrafo nuevo";
document.body.appendChild(nuevo_parrafo);

//eliminar
titulo_id.remove();
//Manejo de eventos para manipulación del DOM
const boton = document.getElementById("clic");
//me permite agrrgar funcionalidades(tipo de evento,funcion)
boton.addEventListener("click", () =>{
    parrafos[0].remove();
    titulo_elemento[0].style.color ="red";
});