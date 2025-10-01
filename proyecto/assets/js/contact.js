/*validacion del formulario de contacto*/
window.addEventListener("load", () => {
    //instanciamos la libreria de validacion
    const validacion = new justValidate("main__form");
    let isValidate = false;

    //agregamos las reglas de validacion
    validacion
        .addField("#name", [
            {
                rule: "required",
                ErrorMessage: "El campo es obligatorio",
            },
            {
                rule: "maxLength",
                value: 3,
                ErrorMessage: "El campo no puede tener mas de 50 caracteres",
            },
        ])
        .addField("#email", [
            {
                rule: "required",
            },
            {
                rule: "email",
            },
        ])
        .addField("#genero", [
            {
                rule: "required",
            },
        ])
        .addField("#fecha", [
            {
                rule: "required",
            },
        ])
        .addField("#mensaje", [
            {
                rule: "required",
            },
        ])
        .onSuccess((event) => {
            alert("formulario enviado");
            event.target.reset();
        });


    
});