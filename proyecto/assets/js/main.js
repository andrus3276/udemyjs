//Al final de la web habrá un botón para subir al principio de la web haciendo una 
//animación en el scroll suavizado.
//scroll suavizado

//capturamos el boton
let btnUp = document.querySelector(".footer__top");

//escuchamos el evento click
btnUp.addEventListener("click", () => {
    //hacemos scroll suavizado
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",


    });
}); 

