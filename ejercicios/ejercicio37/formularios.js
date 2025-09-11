/*  
ejercicio 37

1. crea un formulario con estos campos: nombre apellidos y edad
2. crea un boton que envie el formulario y usa el evento submit

3. muestra los datos por pantalla cuando se envia el formulario



*/    

//captura el formulario
const formulario = document.querySelector("#formulario");
const datosIngresados = document.querySelector(".datos");


 let nombre = document.querySelector("#nombre");
 let apellidos = document.querySelector("#apellidos");
 let edad = document.querySelector("#edad");

 let datonombre = document.querySelector("#datonombre");
 let datoaapellidos = document.querySelector("#datoapellidos");
 let datoedad = document.querySelector("#datoedad");    

// creamos un evento para el formulario
formulario.addEventListener("submit", (event) => {

    //con preventDefault evitamos que se envie el formulario para que no se recargue
    event.preventDefault();
    console.log("enviando formulario");
    
    console.log(nombre.value, apellidos.value, edad.value);
    //le damos un estilo al div para que se muestre cuando se cargue los da
    datosIngresados.style.display = "block";

    //mostramos los datos en el html
    datonombre.textContent = `nombre: ${nombre.value}`;
    datoaapellidos.textContent = `apellidos: ${apellidos.value}`;
    datoedad.textContent = `edad: ${edad.value}`;

    //validacion 
    if (nombre.value.trim() === "" || apellidos.value.trim() === "" || edad.value.trim() === "") {
        alert("los campos no pueden estar vacios");
        return false;    
    } else if (edad.value <= 0) {
        alert("la edad no puede ser menor a cero");
        return false;                   
    }
    });

/* ejercicio 38 
 valida el formulario del ejercicio 37 con js usando el dom
 y las funciones y metodos cocnocidos
 el nombre y apellidos no pueden estar vacios
 la edad no debe ser menor a cero y debe siempre ser un numero
 */












