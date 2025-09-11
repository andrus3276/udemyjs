/*ejercicio 36
crea una caja de texto que cuente cuantas teclas ha pulsado el
usuario dentro de la caja 

y muestra el numero de teclas pulsadas en tiempo real en la web

 */


let texto = document.querySelector("#texto");
let contador = document.querySelector("#contador");

//variable para que me cuente las teclas pulsadas
let contadorTeclas = 0;

// creamos un evento keydown que captura las teclas pulsadas para el textarea  con funcion de flecha
texto.addEventListener("keydown", () => {
    // aumentamos el contador de teclas para que al pulsar borrar se vaya contando los pulsos

    contadorTeclas++;
       

    // aumentamos el contador
    contador.textContent = texto.value.length + " cantidad de teclas pulsadas";
    console.log(contador.textContent);
    

});

