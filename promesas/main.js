

//promesas
//las promesas son un objeto que nos permite manejar asincronia
// se usan para tareas que pueden tardar en completarse
// nos ayuda a continuar con la ejecucion de nuestro codigo
// nos permite manejar errores

//sintaxis tiene 3 partes
// 1- creamos la promesa
let promesa = new Promise((resolve, reject) => {
    let correcto = false;
    if (correcto) {
        resolve("todo ha ido bien");
    } else {
        reject("algo ha fallado");
    }
});
console.log(promesa);

// 2- resolvemos la promesa con then
promesa
    .then((result) => {
        alert( "todo ha ido bien: " + result);
    })
    .catch((error) => {
        console.warn( "algo ha fallado: " + error);
    });

//promesas encadenadas
function servirPizza() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("pizza servida");
        }, 2000);
    });
}
function servirBurger() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hamburguesa servida");
        }, 1000);
    });
}
function servirCerveza() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("cerveza servida");
        }, 3000);
    });
}

// 3- resolvemos la promesa con then y catch

servirPizza()
    .then((result) => {
        console.log(result);
        return servirBurger();
    })
    .then((result) => {
        console.log(result);
        return servirCerveza();
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.warn(error);
    });

//async y await
async function servirPlatos() {
    try {
        let pizza = await servirPizza();
        console.log(pizza);
        let burger = await servirBurger();
        console.log(burger);
        let cerveza = await servirCerveza();
        console.log(cerveza);
    } catch (error) {
        console.warn(error);
    }
}
servirPlatos();

