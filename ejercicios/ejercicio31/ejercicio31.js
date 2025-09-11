/* 
ejercicio 31 
realiza un semaforo con tres luces (rojo,amarillo,y verde)
has los circulos del semaforo con html y css.

cuando un peaton quiere debe pulsar un boton,
crea un boton para cambiar el color de las luces del semaforo.
secuencialmente(de rojo a verde pasando por amarillo).

entonces el semaforo siempre empieza en rojo .
cuando pulsa el boton pasara a amarillo.
cuando pulsa otra vez pasara a verde y asi sucesivamente.
*/

let boton = document.querySelector("#boton");
let luzes = document.querySelectorAll(".luz"); 
let i = 0; 

//cambiamos el color de las luces

boton.addEventListener("click", function(e) {

    console.log(luzes);
    //removemos la clase activa
    luzes[i].classList.remove("activa");
    console.log(i);
    //pasamos a la siguiente luz
    i++;
    //si llegamos al final volvemos a la primera
    if (i === luzes.length) {
        i = 0;
    }
    //añadimos la clase activa
    luzes[i].classList.add("activa");
}); 

