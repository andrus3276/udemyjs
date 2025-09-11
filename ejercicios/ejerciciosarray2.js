//realiza un array de palabras ,y cuenta cuantas letras
//tiene cada palabra y crea un array que contenga solo eoso numeros
// usaremos el metodo map y una funcion


function cuentaLetras(datos){
    //aqui mostramos el array con las palabras
    console.log(datos);
    //aqui usamos el metodo map para recorrer el array y contar cuantas letras tiene cada palabra
    let cantLetras = datos.map(palabra => palabra.length);
    //retornamos la variable a datos el recorridom del array que muestra con la cantidad de letras  
    console.log("cantidad de letras de las palabras de variable carros",cantLetras);
    
    return cantLetras;

    
   
        
    }
    //aqui creamos el array
    const words = ['hola', 'mundo', 'como', 'estas', 'hoy'];
    const carros = ['nissan', 'toyota', 'mazda'];

    //aqui llamamos a la funcion e insertamos el array de words o carros en la funcion 
    
    console.log(cuentaLetras(carros));
   

    

