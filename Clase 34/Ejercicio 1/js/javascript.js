//Asignar el elemento correcto a la variable
//const buttonElem = document.getElementById("btnCheck") //AQUI DEBEN COLOCAR EL SELECTOR
const buttonElem = document.querySelector("#btnCheck"); //AQUI DEBEN COLOCAR EL SELECTOR
//const buttonElem = document.getElementsByClassName("btn check")

buttonElem.addEventListener("click", () => {
  let oldText = buttonElem.innerText;

  const result = (buttonElem.innerText =
    oldText == "CHECK!" ? "OFF" : "CHECK!");

  return result;
});

// Agregarle un id a un h1
var h1Element = document.querySelector("h1"); // Apenas encuentre un h1 lo
h1Element.setAttribute("id", "Adivina El Numero"); // Agregar el atributo ID

//var h1Element = document.getElementsByTagName("h1")[0]; // Obtener el primer (y en este caso, el único) elemento h1
//h1Element.setAttribute("id", "adivinaElNumero"); // Agregar el atributo ID

