/*
ejercicio34
jugando con el bom
crea un programa que abra una nueva ventana con una web pero 
en diferentes tamaños
haz que el usuario pueda elegir entre 3 tamaños
(pequeno,mediano,grande)

*/ 

// capturamos los botones 
let pequeno = document.querySelector("#pequeno");
let mediano = document.querySelector("#mediano");
let grande = document.querySelector("#grande"); 

//creamos una variable con una funcion anonima para abrir una ventana
let ventana = ( width, height) => {
    window.open("https://www.google.com", "_blank", `width=${width}, height=${height}`);
    return true;
};


// creamos un evento para el boton pequeno  
pequeno.addEventListener("click", () => {
    // creamos una ventana de 300x300
    ventana(300,300);

  
});

// creamos un evento para el boton mediano
mediano.addEventListener("click", () => {
    // creamos una ventana de 600x600
    ventana(600,600);
   
});

// creamos un evento para el boton grande
grande.addEventListener("click", () => {
    // creamos una ventana de 900x900
    ventana(900,900);
    
}); 

