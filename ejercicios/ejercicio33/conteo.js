/*ejerciico 33
crea un programa donde tengas un boton que cuente cuantas veces has pulsado el boton
cuando llegues a 17 clicks se muestre un mensaje de limite alcanzado
se se pasa de 17 clicks se rresetea el contador e inicia nuevamente
 */
// captura el boton
let conteo = document.querySelector("#contador")
let boton = document.querySelector("#boton");

//creamos una variable para contar
let contador = 0;

// creamos un evento para el boton con funcion de flecha
boton.addEventListener("click", () => {
    // aumentamos el contador
    contador++;
    

    // si el contador llega a 17 se muestra un mensaje de limite alcanzado
    if (contador === 17) {
        // se muestra el mensaje
        conteo.textContent = "limite alcanzado";    
        // se resetea el contador
        contador = 0;
      }
    else{
        // si el contador no llega a 17 se muestra el contador
        conteo.textContent = contador + " clicks";
    }   
    
})

