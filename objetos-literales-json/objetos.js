// objetos literales  
// un objeto literal es una estructura de datos que agrupa 
//propiedades y metodos

// creamos un objeto literal con propiedades y metodos
const pelicula = {
    //propiedades con clave valor
    titulo: "harry potter",
    director: "chris colam",
    actorPrincipal: "daniel radcliffe",
    anio: 2001,
    genero: "fantasia",
    //arrays
    actores: ["daniel radcliffe", "evan rachel wood", "maggie smith"],
    //metodos con funciones
    resumen: function() {
        return ` ${this.titulo} es una pelicula del ${this.director}, y su actor principal es ${this.actorPrincipal}del año ${this.anio} de genero ${this.genero}`

    },
    //metodos de  arrays
    actoresPrincipales: function() {
        pelicula.actores.forEach(a => {
            console.log(a);
        });
    }
        
};


 
    
    //accedemos a las propiedades del objeto dot notation (recomendado)
    console.log("aqui accedemos a las propiedades del objeto con dot notation");
    console.log(pelicula.titulo);
    console.log(pelicula.director);
    console.log(pelicula.actorPrincipal);
    console.log(pelicula.anio);
    console.log(pelicula.genero);
    //accedemos a las propiedades del objeto con braket notation
    console.log("aqui accedemos a las propiedades del objeto con braket notation");
    console.log(pelicula["titulo"]);
    console.log(pelicula["director"]);
    console.log(pelicula["actorPrincipal"]);
    console.log(pelicula["anio"]);
    console.log(pelicula["genero"]);

    //cambiamos las propiedades del objeto
    pelicula.titulo = "harry potter y la piedra filosofal";
   
    console.log("aqui cambiamos las propiedades del objeto");
    console.log(pelicula);

    //agregamos una nueva propiedad al objeto
    pelicula.pais = "estados unidos";
    console.log("aqui agregamos una nueva propiedad al objeto");
    console.log(pelicula);  
 
    //accedemos a los metodos del objeto
    console.log("aqui accedemos a los metodos del objeto");
    console.log(pelicula.resumen()); 

    //accedemos a los metodos de arrays
    console.log("aqui accedemos a los metodos de arrays");
    pelicula.actoresPrincipales();

    //aqui vemos como borrar una propiedad
    delete pelicula.genero;
    console.log("aqui borramos una propiedad del objeto");
    console.log(pelicula);

    /* ahora veamos el objeto json
    un json es un objeto que se guarda en un archivo json
    y se puede acceder a las propiedades del objeto con dot notation*/

    let arduinojson = {
       sensor: "temperatura",
       valor: 25,       
       unidad: "celsius",
       codigo: "libre"    



    };

    //pasamos el objeto ajson 
    let arduinojson2 = JSON.stringify(arduinojson);
    console.log("aqui pasamos un objeto a json");
    console.log(arduinojson2);

    //pasamos el json a objeto
    let arduinojson3 = JSON.parse(arduinojson2);
    console.log("aqui pasamos un json a objeto");
    console.log(arduinojson3);

    //tip recorrer un objeto 
    let caja =document.querySelector("#datos");

    for (let claves in arduinojson) {
        //agregamos el parrafo al html con el innerhtml que nos permite ver la clave y el valor
        caja.innerHTML += `<p>${claves}: ${arduinojson[claves]}</p>`


    }
       
    