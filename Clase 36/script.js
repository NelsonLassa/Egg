//* Puntaje
var puntaje = 20;
var puntajeMaximo = 0;
//* Número aleatorio
var randomNum = Math.floor(Math.random()*20+1);
//* Asignar el elemento correcto a la variable
const buttonElem = document.getElementById('btn check');//AQUI DEBEN COLOCAR EL SELECTOR

buttonElem.addEventListener("click", () => {
  // //!Prueba
    if (guess.value == randomNum) {
      message.textContent = "🎉 Es el número!";
      if (puntaje > puntajeMaximo) {
        puntajeMaximo = puntaje;
        maxScore.textContent = `Máximo: ${puntajeMaximo}`
      }
      body.style.backgroundColor = 'green'
      number.innerHTML = `<p>${randomNum}</p>`;
    } else if (guess.value > randomNum) {
        message.textContent = "📈 Muy Alto!";
        puntaje--;
        score.textContent = `Puntaje: ${puntaje}`
    } else if (guess.value < randomNum) {
        message.textContent = "📉 Muy bajo!";
        puntaje--;
        score.textContent = `Puntaje: ${puntaje}`
    } else {
        message.textContent = "⛔️ Ingrese Número!";
    }
    if (puntaje === 0) {
      message.textContent = "💥 Perdiste!";
      body.style.backgroundColor = 'red'
    } else if (puntaje < 0) {
      location.reload()
    }
  // //!
});

const score = document.querySelector('.label-score');
score.textContent = `Puntaje: ${puntaje}`

const maxScore = document.querySelector('.label-highscore');

//* Botón "de nuevo"
const again = document.getElementById('btnAgain')

again.addEventListener("click", () =>{
  puntaje = 20;
  score.textContent = `Puntaje: ${puntaje}`
  body.style.backgroundColor = 'gray'
  number.textContent = '?';
  randomNum = Math.floor(Math.random()*20+1);
  guess.value = null;
})



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

number.textContent = '?';

//* Cambiar el valor del input

const guess = document.querySelector('.guess');

// guess.value = 10;

//* Cambiar el color del body
const body = document.querySelector('body');

body.style.backgroundColor = 'gray'