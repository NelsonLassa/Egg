/**
 * Se obtienen referencias del Boton y
 * donde se guardan las recetas obtenidas
 */

const botonParaBuscar = document.getElementById("miBoton");
/**
 * Evento de clic en boton
 */
botonParaBuscar.addEventListener("click", () => {
  mostrarReceta();
});

async function mostrarReceta() {
  const muestraReceta = document.getElementById("container");

  let recetas = await obtenerReceta();
  const recetaABuscar = document.getElementById("miInput").value;
  console.log(recetas);
  console.log(recetaABuscar);
  recetas.forEach((receta) => {
    for (let i = 1; i <= 20; i++) {
      const ingrediente = receta[`strIngredient${i}`];
      if (ingrediente && ingrediente.toLowerCase() === recetaABuscar) {
        console.log("AQUI");
        let contenedor = document.createElement("div");
        contenedor.id = "recetaContainer";
        let nombre = document.createElement("h1");
        nombre.textContent = receta.strMeal;
        let imagen = document.createElement("img");
        imagen.src = receta.strMealThumb;
        let metodo = document.createElement("h3");
        metodo.textContent = "Instructions for preparation";
        metodo.id = "tituloParrafo";
        let mensaje = document.createElement("p");
        mensaje.textContent = receta.strInstructions;
        let listaIngrediente = document.createElement("h3");
        listaIngrediente.textContent = "Ingredients";
        listaIngrediente.id = "tituloLista";
        const ingredientesDeRecetas = document.createElement("ul");
        for (let i = 1; i <= 20; i++) {
          const ingrediente = receta[`strIngredient${i}`];
          if (ingrediente) {
            const liElement = document.createElement("li");
            liElement.textContent = `${ingrediente} - ${
              receta[`strMeasure${i}`]
            }`;
            ingredientesDeRecetas.appendChild(liElement);
          }
        }
        contenedor.appendChild(nombre);
        contenedor.appendChild(imagen);
        contenedor.appendChild(metodo);
        contenedor.appendChild(mensaje);
        contenedor.appendChild(listaIngrediente);
        contenedor.appendChild(ingredientesDeRecetas);
        muestraReceta.appendChild(contenedor);
      }
    }
  });
}

async function obtenerReceta() {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    if (response.ok) {
      const data = await response.json();
      return data.meals;
    } else {
      console.log("Error al obtener Receta");
    }
  } catch (error) {
    console.error("Ocurrio un error: " + error);
  }
}
