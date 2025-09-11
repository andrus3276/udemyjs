//EVENTOS SON ACCIONES QUE OCURREN EN UN ELEMENTO DEL DOM

//click
let boton = document.querySelector("#boton");
//añadimos un evento al boton con addEventListener
boton.addEventListener("click", function(evento) {
    console.log(evento);
    console.log("has hecho click");
    alert("haz hecho click");
});

//doble click
let botondoble   = document.querySelector("#boton2");

botondoble.addEventListener("dblclick", function(e) {
    console.log(e);
    console.log("has hecho click");
    alert("haz hecho doble click");
});


//mouseover
let parrafo = document.querySelector("#parrafo");

parrafo.addEventListener("mouseover", function(event) {
    console.log(event);
    console.log("has hecho click");
    alert("haz hecho click en el parrafo");
});

//eventos de teclado keydown 
let input = document.querySelector("#input");

input.addEventListener("keydown", function(event) {
    console.log(event);
    console.log("has precionado una tecla: "+event.key);
    
});

// eventos de formulario submit,input,focus,blur,change
// aqui en una variable capturamos el formulario con querySelector
let formulario = document.querySelector("#formulario");
//aqui llamamos al formulario con un evento  addEventListener tipo submit
formulario.addEventListener("submit", (event) => {

    //con preventDefault evitamos que se envie el formulario para que no se recargue
    event.preventDefault();
    let nombre = document.querySelector("#nombre").value;
    let email = document.querySelector("#email").value; 
    let genero = document.querySelector("#genero").value;


    console.log(event);
    console.log("has enviado el formulario");
    alert("haz enviado el formulario");
});
//evento focus  
let input2 = document.querySelector("#email");

input2.addEventListener("focus", function(event) {
    console.log(event);
    console.warn("has hecho focus");
    input2.style.backgroundColor = "red";
    
});

//evento blur
let input3 = document.querySelector("#email");

input3.addEventListener("blur", function(event) {
    console.log(event);
    console.warn("has hecho blur");
    input3.style.backgroundColor = "green";
    
});

//propagacion de eventos
let padre = document.querySelector("#padre");
let hijo = document.querySelector("#hijo");


padre.addEventListener("click", () => {
    
    
    
    alert("haz tocado el elemento padre");
});

hijo.addEventListener("click", (event) => {
    event.stopPropagation();
    
    
    alert("haz tocado el boton hijo");
});
