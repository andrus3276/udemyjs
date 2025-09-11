//BOM browser object model

//alert no es propiamente del bom es de la ventana
// alert("hola esto es un alert");

//confirm
// let respuesta = confirm("estas seguro de querer salir");
// console.log(respuesta);

//prompt
// let nombre = prompt("ingresa tu nombre");
// console.log(nombre);    

//wimdow es la ventana del navegador
console.log(window);

//location nos permite acceder a la ubicacion de la ventana
console.log(window.location);

//history nos permite acceder a la historia de la ventana
console.log(window.history);

//navigator nos permite acceder a la informacion del navegador
console.log(window.navigator);

console.log(window.screen, window.screen.width, window.screen.height, window.screen.availWidth, window.screen.availHeight);

//navigator es un objeto que nos permite acceder a la informacion del navegador
console.log(navigator.userAgent);
if (navigator.onLine) {
    console.log("online");
} else {
    console.log("offline");
}  

//location nos permite acceder a la ubicacion de la ventana
console.log(location.href);

//escreen nos permite acceder a la informacion de la pantalla
console.log(screen.width, screen.height);

//ventanas o pop ups
window.open("https://www.google.com", "google", "width=500, height=500");

