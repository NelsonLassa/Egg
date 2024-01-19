document.addEventListener("DOMContentLoaded", function () {

    //Funcion para crear el numero secreto
    let numeroSecreto = Math.floor(Math.random() * 20) + 1;
    console.log(numeroSecreto);

    let score = 20;
    let highscore = 0;


    const elementoScore = document.querySelector(".score");//Puntaje
    const elementoHighscore = document.querySelector(".highscore");//Maximo

    const botonCheck = document.querySelector('.btn.check');//boton chech
    const guessInput = document.querySelector('.guess');//Ingreso de Guess
    const mensajeAdivina = document.querySelector('.message');//Mensaje Adivina..
    const elementoNumeroSecreto = document.querySelector(".number");//elemento del signo de pregunta

    let numeroGuess = null; //Inicializamos guess como vacio;


    /*-----------------------------------Reinicio----------------------------------*/
    document.querySelector('.btn.again').addEventListener('click', function () {
        numeroSecreto = Math.floor(Math.random() * 20) + 1;
        console.log(numeroSecreto);
        score = 20;
        elementoNumeroSecreto.textContent = "?";
        guessInput.value = '';
        mensajeAdivina.textContent = "Adivina..";
        elementoScore.textContent = score;
        document.body.classList.remove('victoria');

    })


    /*--------------------------------------Evento--------------------------------------*/

    botonCheck.addEventListener('click', function () {
        const valorGuess = parseInt(guessInput.value);//guardamos el valor de guess
        console.log(`El valor ingresado es: ${valorGuess}`)

        numeroGuess = valorGuess;//Guadamos el valor de guess aqui


        if (isNaN(numeroGuess)) {
            mensajeAdivina.textContent = "⛔️ Ingrese Numero!";
        } else if (numeroGuess == numeroSecreto && score > 1) {//En el caso que adivine el numero
            mensajeAdivina.textContent = "🎉 Es el número!";
            elementoNumeroSecreto.textContent = numeroSecreto;//mostramos en el "?" el numero secreto
            elementoScore.textContent = score;
            document.body.classList.add('victoria');

            if (score > highscore) {
                highscore = score;
                elementoHighscore.textContent = highscore;
            }

        } else {
            if (score > 1) {
                if (numeroGuess < numeroSecreto) {//Caso numero bajo
                    mensajeAdivina.textContent = "📉 Muy bajo!";
                    score--;
                    elementoScore.textContent = score;

                } else if (numeroGuess > numeroSecreto) {//Caso numero alto
                    mensajeAdivina.textContent = "📈 Muy Alto!";
                    score--;
                    elementoScore.textContent = score;
                }

            } else {
                mensajeAdivina.textContent = "💥 Perdiste!";
                score = 0;
                elementoScore.textContent = score;
                document.body.style.backgroundColor = 'red';
            }
        }
    })

});