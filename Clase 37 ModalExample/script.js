'use strict';

document.addEventListener("DOMContentLoaded", function () {

    //Ejercicio Recorrer Botones
    //1
    const botones = document.querySelectorAll(".show-modal");

    //2
    for (let i = 0; i < botones.length; i++) {
        console.log(botones[i].textContent);
    }
    //3
    botones[1].textContent = "HOLA";

    /*Ejercicio: Hacer Click*/
    botones.forEach(boton => {
        boton.addEventListener('click', function () {
            console.log("Hice Click");
        })
    })

    /* Ejercicio: Modificar la clase CSS - Parte 1*/

    const mostrarModal = document.querySelector(".modal");
    const quitarOverlay = document.querySelector(".overlay");

    botones.forEach(boton => {
        boton.addEventListener('click', function () {

            // mostrarModal.style.display = "block"; Modifica el contenido de la clase
            mostrarModal.classList.remove("hidden");//Elimina la clase
            quitarOverlay.classList.remove("hidden");//remueve el hidden que oculta el overlay
            //por lo tanto el mismo queda descubierto
        })
    })

    /* Ejercicio: Modificar la clase CSS - Parte 2*/

    const cerrarModal = document.querySelector(".close-modal");
    cerrarModal.addEventListener('click', function () {
        // mostrarModal.style.display = "none";
        mostrarModal.classList.add("hidden");
        quitarOverlay.classList.add("hidden");
    });


    /*Ejercicio: Complementario */
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            mostrarModal.classList.add("hidden");
            quitarOverlay.classList.add("hidden");
        }
    });

    //Hacer click en el overlay para quitar el modal
    quitarOverlay.addEventListener('click', function () {
        mostrarModal.classList.add("hidden");
        quitarOverlay.classList.add("hidden");
    })

})
