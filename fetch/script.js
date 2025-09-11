//fetch se usa para hacer peticiones a una api o servicios externos

//fetch es una promesa
//syntaxis

//como sacar datos de un backend de manera asincrona

let iduser = 3;
fetch("https://jsonplaceholder.typicode.com/posts/" + iduser)
  .then(res => res.json())
  .then(data => mostrarDatos(data))

  //cacheamos el error
  
  .catch(error => console.log("la url no existe: " + error));
  //llamamos a la funcion


//mostrar datos en la web con una funcion

function mostrarDatos(user){
    let caja = document.querySelector("#user");
    caja.innerHTML = `
    <h2>id: ${user.id}</h2>
    <p>title: ${user.title}</p>
    <p>body: ${user.body}</p>
    ` 

}

//como guardamos informacion con fetch
//creamos un objeto
const usuarioParaguardar = {
    name: "andres ",
    job: "desarrollador"
};
//llamamos a la api y enviamos el objeto
fetch("https://jsonplaceholder.typicode.com/posts/", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(usuarioParaguardar)
})
//con then recibimos la respuesta
.then(res => res.json())
.then(data => console.log(data)) 
//cacheamos el error

.catch(error => console.log("la url no existe: " + error));  


//sintaxis de promesas con asyn y await
// async function
// await  

//colocamos nuestro codigo en una funcion asincrona
async function obtenerUsuarios() {
  //comprobamos que no hay error
  try {
    //llamamos a la api
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");  
    //recibimos la respuesta
    const data = await res.json();
    console.log(data);
  } 
  catch (error) {
    console.log("la url no existe: " + error);
  }
    
}

obtenerUsuarios();




