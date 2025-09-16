//El listado de post está almacenado en un array de objetos y debes mostrarlo 
//dinámicamente.

//creamos un array de objetos con los datos de los articulos

//capturamos el contenedor de articulos
const articles = document.querySelector(".layout__article");

//creamos un array de objetos con los datos de los articulos
const articulos = [
    {
        title: "Titulo de articulo 1",
        date: "10/12/2026",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        
    },
    {
        title: "Titulo de articulo 2",
        date: "04/09/2022",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
        title: "Titulo de articulo 3",
        date: "01/10/2025",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
        title: "java scipt con atomo",
        date: "01/10/2025",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },

    

    

];
//recorremos el array de objetos y creamos un elemento de html para cada objeto
articulos.forEach((articulo ) => {
 
    articles.innerHTML += `
        <h3 class="article__title">${articulo.title}</h3>
        <span class="article__date">${articulo.date}</span>
        <p class="article__body">${articulo.body}</p>
        <a href="#" class="article__btn">leer mas</a>
    `;
    
});