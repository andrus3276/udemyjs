
// crear un array de personajes de peliculas y 
//clasificalos en grupos de heroes y villanos
//muestra un mensaje para cada grupo de personajes
// creamos el array
const personajes = [
    { nombre: "Superman", esVillano: false },
    { nombre: "Batman", esVillano: false },
    { nombre: "Flash", esVillano: false },
    { nombre: "Aquaman", esVillano: false },
    { nombre: "Wonder Woman", esVillano: false },
    { nombre: "Mujer Maravilla", esVillano: false },
    { nombre: "Green Lantern", esVillano: false },
    { nombre: "Cyborg", esVillano: true },
    { nombre: "Joker", esVillano: true },
    { nombre: "Harley Quinn", esVillano: true },
    { nombre: "Lex Luthor", esVillano: true },
    { nombre: "Doomsday", esVillano: true },
    { nombre: "Red Hood", esVillano: true },
    { nombre: "Nightwing", esVillano: true },
    { nombre: "Darkseid", esVillano: true },
    { nombre: "Lex Luthor", esVillano: true }, 

  ];
// variable para almacenar los heroes realizamos un filtro con el metodo filter el simbolo ! es para negar
//y adicionamos un split o slice para solo aparezca el nombre

  let heroes = personajes.filter(personaje => !personaje.esVillano).map(personaje => personaje.nombre);
  
  // variable para almacenar los villanos realizamos un filtro
  let villanos = personajes.filter(personaje => personaje.esVillano).map(personaje => personaje.nombre);
  // llamamos a las variables y las mostramos por consola
  

  //usamos el metodo forEach para recorrer el array y mostrar solo el nombre del heroe
  heroes.forEach(heroe => console.log(heroe.split(":")[0]));  


  console.log("----------------------------------------------------------------");  

  

  //usamos el metodo forEach para recorrer el array y mostrar solo el nombre del villano  
  //    con split separamos el nombre y el : 
  console.log("villanos",villanos);

  villanos.forEach(villano => console.log(villano.split(":")[0])); 
  