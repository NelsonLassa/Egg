//* Asignar el elemento correcto a la variable
const buttonElem = document.getElementById('btn check');//AQUI DEBEN COLOCAR EL SELECTOR

buttonElem.addEventListener("click", () => {
  let oldText = buttonElem.innerText;

  const result = (buttonElem.innerText =
    oldText == "CHECK!" ? "OFF" : "CHECK!");

  return result;
});


//* Cambiar el contenido del título 
const gameTitle = document.getElementById('gameTitle');

gameTitle.innerHTML = "JUEGO DE ADIVINAR";


//! ✏️ Ejercicio: Seleccionar elemento y cambiar contenido 

//* Cambiar el contenido del mensaje

const message = document.querySelector('.message');

/*
"⛔️ Ingrese Número!"

"🎉 Es el número!"

"📈 Muy Alto!"

"📉 Muy bajo!"

"💥 Perdiste!"
*/



message.textContent = "⛔️ Ingrese Número!";

//* Cambiar el contenido del número secreto

const number = document.querySelector('.number')

number.textContent = 5;

//* Cambiar el valor del input

const guess = document.querySelector('.guess');

guess.setAttribute('placeholder', 'X');

//* Cambiar el color del body
const body = document.querySelector('body');

body.style.backgroundColor = 'gray'