//localStorage guarda informacion en el navegador pero se puede cerrar el navegador

//comprobar disponibilidad de localstorage
if (typeof localStorage !== "undefined") {
    console.log("localstorage disponible");
}
else {
    console.log("localstorage no disponible");
}

//guardar informacion en localstorage
//localStorage.setItem("clave", "valor");
localStorage.setItem("nombre", "pepe");
localStorage.setItem("apellido", "perez");

//recuperar informacion de localstorage
console.log(localStorage.getItem("nombre"));
console.log(localStorage.getItem("apellido"));

//poner informacion en la ventana
document.querySelector("#mensaje").textContent = localStorage.getItem("apellido");

//guardar objetos en localstorage

let miarticulo = {
    titulo: "hola",
    autor: "pepe",
    precio: 100 
}
localStorage.setItem("articulo", JSON.stringify(miarticulo));   




//recuperar objetos de localstorage

let articulo = JSON.parse(localStorage.getItem("articulo"));
console.log(articulo);



//borrar toda la informacion de localstorage
document.querySelector("#vaciar").addEventListener("click", () => {
    localStorage.clear();
});