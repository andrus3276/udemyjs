/* Hacer un formulario de login simulado que nos permita guardar en el localstorage 
el nombre del usuario y en el caso de que exista la “sesión” mostrarla.  */

//capturamos el formulario y los inputs

let loginForm = document.querySelector(".aside__login");
let inputName = document.querySelector("#name");
let inputEmail= document.querySelector("#email");
let inputPassword = document.querySelector("#password");
let asideData = document.querySelector(".aside__data");
let loginName = document.querySelector(".data__name");
let btnLogout= document.querySelector(".data__logout");

//creamos un evento para el formulario para sacar los datos
loginForm.addEventListener("submit", (event) => {
    
    //con preventDefault evitamos que se envie el formulario para que no se recargue
    event.preventDefault();
    alert("haz enviado el formulario");
    //capturamos los valores de los inputs
    let name = inputName.value;
    let email = inputEmail.value;
    let password = inputPassword.value;



    //comprobar que todo esta relleno
    let user = {};
    if (name && email && password) {
        
        
     //guardar los datos en un objeto
     user= {name, email, password};


    //guardar los datos en el localstorage
    localStorage.setItem("user", JSON.stringify(user));

    //vaciar el formulario
    loginForm.reset();

    //mostar el usuario
    getUser();
    console.log(getUser);



    }   

});
//funcion para mostrar el usuario
let getUser = () => {
    let myUser = localStorage.getItem("user");
    if (myUser) {
        let identity = JSON.parse(myUser);
        loginName.innerHTML = identity.name;
        loginForm.classList.add("aside__login--hiden");
        asideData.classList.remove("aside__data--hidden");
    }
}












