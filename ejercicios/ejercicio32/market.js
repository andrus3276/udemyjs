/* ejercicio 32
crea una lista de la compra en la que el usuario pueda añadir
nuevos productos para comprar con un campo de texto y un boton

cada vez que se añade un producto este aparece
en la lista con un boton para eliminarlo

el usuario podra añadir tantos productos como quiera

*/
//con el evento DOMContentLoaded se ejecuta el codigo cuando se ha cargado el DOM
//sin usar el defer en el script y es buena practica para un codigo mas limpio
document.addEventListener("DOMContentLoaded", () => {
    // obtenemos los elementos del dom
let input = document.querySelector("#input");
let lista = document.querySelector("#lista");
let boton = document.querySelector("#boton");



// creamos un evento para el boton donde se anade el producto y el boton de eliminar
boton.addEventListener("click", (e) => {
    console.log(e);

    // obtenemos el valor del input
    let producto = input.value.trim();
    
    // creamos un elemento li
   if(producto ){
    const unProducto = document.createElement("li");
    unProducto.textContent = producto;
    console.log(unProducto);

    //creamos un boton para eliminar
    const botonEliminar = document.createElement("button");
    console.log(botonEliminar);
    botonEliminar.textContent = "eliminar";
    botonEliminar.addEventListener("click", () => {
        console.log("eliminado");
        alert("eliminaste el producto");
        //eliminamos el li
        lista.removeChild(unProducto);
    });
    //con el appendChild añadimos el boton al li
    unProducto.appendChild(botonEliminar);

    // añade el li al ul
    lista.appendChild(unProducto);
    //limpiamos el input 
    input.value = "";

    
    
    }

    


});
})

   










