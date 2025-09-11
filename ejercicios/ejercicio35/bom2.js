/*
ejercicio 35
crea un prgrama que permita mover la ventana de un web 
a diferentes posiciones de la pantalla usando bom

usa botones para mover la ventana a la esquina supeior izquierda

usa botones para mover la ventana a la esquina inferior derecha

usa botones para mover la ventana a la esquina inferior izquierda

usa botones para mover la ventana a la esquina superior derecha



*/

// creamos dos variables para el tamaño de la ventana
let ancho = window.screen.width;
let alto = window.screen.height;


// caturamos los botones
let abrirVentana = document.querySelector("#abrir");
let izquierdaArriba = document.querySelector("#izquierdaArriba");
let derechaArriba = document.querySelector("#derechaArriba");
let izquierdaAbajo = document.querySelector("#izquierdaAbajo");
let derechaAbajo = document.querySelector("#derechaAbajo");

let ventanaAbierta = null;
// creamos un evento para el boton donde se abre la ventana
abrirVentana.addEventListener("click", () => {
   ventanaAbierta = window.open(" ", "nueva ventana" , "width=300, height=300");
});

// creamos un evento para el boton donde se mueve la ventana abierta 
izquierdaArriba.addEventListener("click", () => {
    if(ventanaAbierta){
        ventanaAbierta.moveTo(0,0);
       
    }
    
});

// creamos un evento para el boton donde se mueve la ventana abierta 
derechaArriba.addEventListener("click", () => {
    if(ventanaAbierta){
        ventanaAbierta.moveTo(ancho,0);
    }

});

// creamos un evento para el boton donde se mueve la ventana abierta 
izquierdaAbajo.addEventListener("click", () => {
    if(ventanaAbierta){
        ventanaAbierta.moveTo(0,ancho);
    }
    
});

// creamos un evento para el boton donde se mueve la ventana abierta 
derechaAbajo.addEventListener("click", () => {
    if(ventanaAbierta){
        ventanaAbierta.moveTo(ancho,ancho);
    }
    
});


