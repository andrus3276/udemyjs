/*aqui daremos interactividad al slider con js*/

/*capturamos los elementos del slider*/
 let btnPrev = document.querySelector(".slider__btn-prev");
 let btnNext = document.querySelector(".slider__btn-next");
 let slides = document.querySelectorAll(".slides__item");

//variable con el contador del slider y la cantidad de slides para saber cuantos slides hay
let slideCount = 0;
let allSlides = slides.length;



 //boton previo
 //con addEventListener escuchamos el evento click del boton prev
 btnPrev.addEventListener("click",() =>{
    //incrementamos el contador
    slideCount++;
    //cuando el contador llegue al final volvemos a 0

    if (slideCount >= allSlides) {
        slideCount = 0;
    }

    //removemos class list al slide activo
    removeActive();
    //adicionamos class list al slide activo para que se muestre
    slides[slideCount].classList.add("slides__item--active");
    
    

    console.log(slideCount);


 });

 //boton siguiente
 btnNext.addEventListener("click",() => {
    //incrementamos el contador
    slideCount--;
    //cuando el contador llegue al final volvemos a 0

    if (slideCount < 0) {
        slideCount = allSlides - 1;
    }

    //removemos class list al slide activo
    removeActive();
    //adicionamos class list al slide activo para que se muestre
    slides[slideCount].classList.add("slides__item--active");
 });

 

 //funcion para remover los activos
 let removeActive = () => {
    //recorremos todos los slides
    slides.forEach((slide) => {
        //removemos la class list al slide activo para que no se muestre
        slide.classList.remove("slides__item--active");
    });
 };




