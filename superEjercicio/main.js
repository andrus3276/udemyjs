//super ejercicio de javascript

/*crea una aplicacion web en la que puedas añadir,mostrar,eliminar
tus productos de la lista de la compra

cada producto debe tener:

- nombre
- precio
- cantidad
-puntuacion de popularidad (un valor aleatorio entre 1 y 100)
 
 los productos deben mantenerse guardados aunque se recarguen la pagina,
 y se debe poder eleiminar cualquier producto de la lista en cualquier momento

tasks:
 v-ejercicio 31: crea el formulario necesario en html
 v-ejercicio 32: funcion para guardar prpoductos con los datos necesarios
v-ejercicio 33: funcion para mostrar productos extraidos del localstorage
v-ejercicio 34: as que los productos se carguen automaticamente al abrir la web
v-ejercicio 35: funcion para eliminar productos de la lista


*/
//ejercicio 35
//creamos la function eliminar con parametro index para saber que pelicula eliminar
function eliminar(index){
  //sacamos el array de objetos del localstorage
  let pelisGuardadas = JSON.parse(localStorage.getItem("peliculas")) || [];
  //eliminamos el objeto del array con el index y el metodo splice el uno es el index
  pelisGuardadas.splice(index, 1);
  //actualizamos el localstorage
  localStorage.setItem("peliculas", JSON.stringify(pelisGuardadas));  

 //actualizamos el listado
  mostrar();

  
}
//ejercicio 33
//function para mostrar las peliculas guardadas
function mostrar(){
  //selecionamos la etiqueta del lista
  let listado = document.querySelector("#listado");
  listado.innerHTML = "";

  
  //sacar las peliculas del localstorage
  let pelisGuardadas = JSON.parse(localStorage.getItem("peliculas")) || [];

  
  //si no hay peliculas mostrar un mensaje
  if (pelisGuardadas.length === 0) {
    listado.innerHTML = "no hay peliculas guardadas";
    return false;
  }
  
  //recorrer pelis y mostrarlas
  pelisGuardadas.forEach((pelicula, index) => {
    //cremos un elemento article
    const peliAticle = document.createElement("article");
    //con un innerhtml le añadimos el contenido con template string
    peliAticle.innerHTML = `
    <h3>${pelicula.titulo}</h3>
    <p>fecha: ${pelicula.fecha}</p>
    <p>popularidad: ${pelicula.popularidad}</p>
    
    <hr/>
    `;
    //creamos boton de eliminar y bindearle evento
    const eleiminarBtn = document.createElement("button");
    eleiminarBtn.textContent = "eliminar";
    eleiminarBtn.addEventListener("click", () => eliminar(index)); 

    //con el appendChild añadimos el boton al article
    peliAticle.appendChild(eleiminarBtn);
    peliAticle.appendChild(document.createElement("hr"));
    
      
    
 


    listado.appendChild(peliAticle);
    
  });

  //opcional un return true pero no es necesario
  return true;

}


//ejercicio 32
//funcion para guardar productos con los datos necesarios

function guardar(){
  //selecionamos la caja de texto y conseguir su valor
  let titulo = document.querySelector("#titulo").value;
 // validacion para que se ingrese un titulo
  if (titulo.trim() === "") {
    alert("el titulo no puede estar vacio");
    return false;
 }

  //conseguimos fecha
  const fecha = new Date();
  const fechaActual = fecha.toLocaleDateString() + "y son las " + fecha.toLocaleTimeString();
  console.log(fechaActual);


  //generamos un numero aleatorio entre 1 y 100 para la popularidad
  let popularidad = Math.floor(Math.random() * 100) + 1;
  console.log("su popularidad es: " + popularidad);

  // creamos objeto pelicula para guardar los datos
  let pelicula = {
    titulo,
    fecha: fechaActual,
    popularidad,
  };
  

  // sacamos todas las peliculas las guardamos en la variable pelisGuardadas(array de objetos)
  let pelisGuardadas = JSON.parse(localStorage.getItem("peliculas")) || [];
  console.log("las peliculas guardadas son:" + pelisGuardadas);


  //añadir al array la nueva pelicula
  pelisGuardadas.push(pelicula);
  console.log(pelisGuardadas); 

  //guardamos todo en el localstorage
  localStorage.setItem("peliculas", JSON.stringify(pelisGuardadas));

  //limpiar campo de texto
  document.querySelector("#titulo").value = "";

  //mostrar peliculas
  mostrar();

return true

}
//ejercicio 34 
//funcion para cargar peliculas al abrir la web
window.addEventListener("load", () => {
  console.log("cargando la pagina");
  //cargar todas las peliculas por defecto
  mostrar();

  //aplicar evento al formulario para guardar
let formulario = document.querySelector("#formulario");
//con addEventListener escuchamos el evento submit
formulario.addEventListener("submit", (event) => {
  console.log( "has enviado el formulario" + event);
  //con preventDefault evitamos que se envie el formulario para que no se recargue
  event.preventDefault();
  //llamamos a la funcion guardar donde guardaremos las peliculas
  guardar();
});


});







