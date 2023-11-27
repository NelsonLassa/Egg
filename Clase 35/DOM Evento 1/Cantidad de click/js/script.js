const contador = document.getElementById("contador");
const muestra = document.getElementById("muestra");

let contadorClick = 0;

contador.addEventListener("click", function(){
    contadorClick++;
    muestra.textContent = `Cantidad de clicks: ${contadorClick}`;
})