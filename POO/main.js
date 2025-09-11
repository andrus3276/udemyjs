//PROHGRAMACION ORIENTADA A OBJETOS EN JS
// ES una forma de programar que nos permite crear objetos que tienen propiedades y metodos
//representan realidades del mundo real

//ahora realizaremos un ejemplo de programacion orientada a objetos

//creamos un objeto con propiedades y metodos

class Gato {
        
        constructor(nombre, raza, edad, color) {
            
        //propiedades o atributos
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
        this.color = color;
    }

    //metodos o acciones
    maullar() {
        console.log(`${this.nombre} esta maullando y dice: miao miao miao`);
  }
    saltar() {
        console.log(`${this.nombre} esta saltando y dice: miao miao miao`);
  }
   


}


let miGato = new Gato();
console.log(miGato);
miGato.maullar();
miGato.saltar();

let miGato2 = new Gato("Garfield", "Persa", 3, "negro");
console.log(miGato2);
miGato2.maullar();

//getter and setter

class miDog {
    constructor(nombre, raza, edad, color) {
        this._nombre = nombre;
        this._raza = raza;
        this._edad = edad;
        this._color = color;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nuevoNombre) {
        this._nombre =  nuevoNombre; ;   
    }



}

//creamos un objeto
let miDog1 = new miDog("Scooby", "Doberman", 5, "negro");
console.log(miDog1);
console.log(miDog1.nombre);
miDog1.nombre = "Scooby Doo";
 

//static

class miPerro {

    constructor(nombre, raza, edad, color) {
        this._nombre = nombre;
        this._raza = raza;
        this._edad = edad;
        this._color = color;
    }

    static ladrar() {
        console.log("ladrando");        

    }
}

miPerro.ladrar();

//herencia
//creamos una clase que herede de miDog y que tenga una habilidad
class Perro extends miDog {
    constructor(nombre, raza, edad, color,habilidad)  {
        super(nombre, raza, edad, color);
       
        this.habilidad = habilidad;
    }
    //seteamos la habilidad para el perro
    setHabilidad(habilidad) {
        this.habilidad = habilidad;
    }  
    //obtenemos la habilidad con get
    getHabilidad() {
        return this.habilidad;  
    } 
    //creamos un metodo para que el perro ejecute su habilidad
    ejecutar() {
        console.log(`${this.nombre} esta usando su habilidad: ${this.habilidad}`);


    }
}

//ahora creamos un objeto de la clase perro
let miPerro1 = new Perro("Scooby", "Doberman", 5, "negro", "correr rapido");
console.log(miPerro1);
console.log(miPerro1.getHabilidad());
miPerro1.ejecutar();






