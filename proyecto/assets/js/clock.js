// creamos el reloj interactivo con js

let clockTime = document.querySelector(".clock__time");

setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    clockTime.innerHTML = `${hours}:${minutes}:${seconds}`;
}, 1000);   
