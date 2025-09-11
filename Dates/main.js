//invocacion de objetos de fechas

//fecha y hora actual
//creamos un objeto de la clase date
let fecha = new Date();
console.log("hoy es : " + fecha);

//año
let anio = fecha.getFullYear();
console.log( "el anio es: . " + anio);  

//mes
let mes = fecha.getMonth();
console.log("el mes es: " + mes);

//dia
let dia = fecha.getDate();
console.log("el dia es: " + dia);   

//hora
let hora = fecha.getHours();
console.log("la hora es: " + hora);

//minutos
let minutos = fecha.getMinutes();
console.log("los minutos son: " + minutos);

//segundos
let segundos = fecha.getSeconds();
console.log("los segundos son: " + segundos);   

//milisegundos
let milisegundos = fecha.getMilliseconds();
console.log("los milisegundos son: " + milisegundos);

//convertir a string
let fechaString = fecha.toUTCString();
console.log("la fecha es: " + fechaString); 
