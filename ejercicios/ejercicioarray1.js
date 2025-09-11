console.log("estoy conectado");

// Array de ejemplo
let array = [8,3,4,9,51,3,33,90,65,20,62,11,20,30,40,50,60,70,80,90,100];
console.log(array);

let entrada = document.getElementById("numero");
let numINgresado = document.getElementById("boton");

numINgresado.addEventListener("click", function() {
    //con parseInt convertimos el valor de entrada en un numero
    let num = parseInt(entrada.value);
    //con encontrado comprobamos si hemos encontrado el numero
    let encontrado = false;
    //con un for recorremos el array para comprobar si hemos encontrado el numero
   /* for (let i = 0; i < array.length; i++) {
        console.log(array[i]);  
        if (num === array[i]) {
            alert("Felicitaciones has acertado");
            encontrado = true;
            break;
        }
    }
    if (!encontrado) {
        alert("Se acabo el juego");
    }*/

    //ahora recorremos con forEach el array para comprobar si hemos encontrado el numero

    array.forEach(numeros => {
        console.log(numeros);
        if (num === numeros) {
            alert("Felicitaciones has acertado");
            encontrado = true;
            //con return cortamos el bucle por que ya hemos encontrado el numero
            return;
        }
    });
    if (!encontrado) {
        alert(" no adivinasteSe acabo el juego");
    }
});



















