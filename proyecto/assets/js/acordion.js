let collapses = document.querySelectorAll(".accordion_collapse");
console.log(collapses);
//recoremos todos los collapses con foreach
collapses.forEach((collapse) => {
    console.log(collapse);
    //creAmos una variable con el header
    let header = collapse.querySelector(".collapse__header");

    //con addEventListener escuchamos el evento click del header
    header.addEventListener("click",() => {
        //removemos class list al collapse activo
        collapse.classList.toggle("accordion__collapse--open");
    });

    
})
