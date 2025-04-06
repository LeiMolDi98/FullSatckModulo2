let contador = 0;
while (contador < 10){
    contador = contador +1;
    console.log(contador);
}
console.log("fin del programa");

do {
    console.log(contador);
    contador = contador - 1;
}while(contador > 0);
console.log("fin del programa");

for (let i=0; i<10; i++){
    console.log(i);
}