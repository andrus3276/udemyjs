/* pide 6 numeros po pantalla y metelos en un arrays
2-muetra el array completo(con los 6 numeros)en el cuerpo de la pagina y en consola
3-ordena y muestralo
4-invierte y muestralo
5-muestra  cuantos elementos tiene el array
6-busca un numero que introduzca el usuario y si lo encuentra muestralo y su indice
7-refactoriza todo lo posible usando funciones

*/ 


// pedir 6 numeros y meterlos en un array
//creamos el array vacio
let arrnumeros  = [];

//realizamos un bucle para pedir 6 numeros
for (let contador = 0; contador < 6; contador++) {
    console.log("estos son los numeros introducidos en el array ",arrnumeros,contador)
//pedimos 6 numeros    
    let num = parseInt(prompt("introduce un numero", 0));
    arrnumeros.push(num);
}
// mostramos en consola el array
console.log(arrnumeros);

//mostramos y ordenamos  el array en el cuerpo de la pagina con createElement en una lista
let ul = document.createElement("ul");
document.body.appendChild(ul);
for (let i = 0; i < arrnumeros.length; i++) {
    let li = document.createElement("li");
    li.textContent = arrnumeros[i];
    ul.appendChild(li);
}

//ordenamos el array y lo mostramos en pagina
arrnumeros.sort();
console.log(arrnumeros);
//mostramos y ordenamos  el array en el cuerpo de la pagina con createElement en una lista
let ul2 = document.createElement("ul");
document.body.appendChild(ul2);
for (let i = 0; i < arrnumeros.length; i++) {
    let li2 = document.createElement("li");
    li2.textContent = arrnumeros[i];
    ul2.appendChild(li2);
}



