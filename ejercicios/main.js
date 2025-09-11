//DOM document object model
//selectores son metodos que nos permiten acceder a los elementos del DOM como
//getElementById**** selecciona un elemento por su id

let ejercicio = document.getElementById("ejercicios");
console.log(ejercicio.innerHTML);
console.log(ejercicio.innerText);

//modificar caracteristicas del elemento seleccionado por su id
ejercicio.style.color = "blue";
ejercicio.style.fontSize = "10px";


//modificar caracteristicas del elemento seleccionado por su id
ejercicio.style.backgroundColor = "pink";
ejercicio.style.textAlign = "center";
ejercicio.style.padding = "10px";






//getElementsByClassName- nos permite acceder a un grupo de elementos por su clase
let articulos    = document.getElementsByClassName("articulo");
console.log(articulos);
// recorro el array de articulos
for (let i = 0; i < articulos.length; i++) {
    //a cada articulo le añadimos la clase
    articulos[i].classList.add("articuloPrimario");
    //podemos mas html
    articulos[i].innerHTML += "<a href='#'>leer mas</a>";
    //añadir un nodo al dom
    let parrafo = document.createElement("p");
    console.log(parrafo);
    parrafo.textContent = "parrafo añadido";
    articulos[i].appendChild(parrafo);

    // a la primera articulo le añadimos la clase
    if (i === 0) {
        articulos[i].classList.add("articuloDos");
    }
    if (i === (articulos.length - 1)) {
        articulos[i].classList.add("articuloUltimo");
        articulos[i].innerHTML = "ultimo articulo";
    }
   
}




//getElementsByTagName - nos permite acceder a un grupo de elementos por su etiqueta
let etiquetasarti = document.getElementsByTagName("article");
//con el console.log mostramos el array de articulos y la primera etiqueta el innerHTML
//mostrara el contenido de la etiqueta
console.log(etiquetasarti[0].innerHTML); 

//ESTOS SON LOS SELECTORES MAS USADOS Y RECOMENDADOS
//querySelector - nos permite acceder a un solo elemento por su etiqueta

let etiqueta = document.querySelector("article");
console.log(etiqueta);


//querySelectorAll-con nos permite acceder a un grupo de elementos por su etiqueta
let etiquetas = document.querySelectorAll("article");
console.log(etiquetas); 

//modificaciones con querySelector
const tarjetas = document.querySelector("#tarjetas");
console.log(tarjetas);

tarjetas.textContent = "nueva tarjeta";
tarjetas.style.fontSize = "20px";
tarjetas.style.color = "red";       