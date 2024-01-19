/*Ejercicio: Manipulación de Ventanas y Mensajes */

let abrirVentana = document.getElementById("abrirVentana");
const enviarMensaje = document.getElementById("enviarMensaje");
let ventanaNueva;


//funcion para abrir una ventana nueva
function abrirVentana2() {
    window.open('index2.html')
};

abrirVentana.addEventListener('click', function () {
    ventanaNueva = window.open('index2.html', '_target', 'width=600,height=400');
    enviarMensaje.disabled = false;
});

enviarMensaje.addEventListener('click', function () {
    ventanaNueva.postMessage("Si funciona por eso lo ves", '*')
});

/* Ejercicio: Temporizadores y Cambio de Estilos */

const cambiarColor = document.getElementById("cambiarColor");
const detenerCambio = document.getElementById("detenerCambio");
let tiempo;

cambiarColor.addEventListener('click', function () {
    const colorOriginal = 'white';

    document.body.style.backgroundColor = 'blue';

    tiempo = setTimeout(function () {
        document.body.style.backgroundColor = 'white';
    }, 2000);//tiempo = true
    

});

detenerCambio.addEventListener("click", function () {
    if (tiempo) {
        tiempo = clearTimeout(tiempo);
        document.body.style.backgroundColor = 'red';
    }
});
/**Ejercicio: Validación de Formulario y Redirección */

const registro = document.getElementById("registro"); 

registro.addEventListener("submit", function(event){
    event.preventDefault();

    const nombre = document.getElementById("nombre").value; 
    const edad = document.getElementById("edad").value;

    const confirmacion = window.confirm(`Señor/a ${nombre}, su edad es: ${edad}`); 

    if(confirmacion){
        window.location.href = 'index2.html';
    }else{
        window.alert("Por favor dinos tu verdadera edad"); 
        window.prompt("Cual es verdadera edad: "); 
        window.location.href = 'index2.html';
    }

})
