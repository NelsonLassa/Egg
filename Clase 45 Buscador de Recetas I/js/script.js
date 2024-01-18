const botonParaBuscar = document.getElementById("miBoton");
const contenedorDeRceta = document.getElementById("container");

botonParaBuscar.addEventListener("click",  ()=>{
    mostrarReceta()
})
async function mostrarReceta(){
    let recetas = await obtenerReceta();
    const recetaABuscar = document.getElementById("miInput").value;
    console.log(recetas);
    console.log(recetaABuscar);
    recetas.forEach(receta => {
        for (let i = 0; i < 20; i++) {
            const ingrediente = receta[`strInfredient${i}`];
            if (ingrediente == recetaABuscar) {
                console.log("AQUI");
                let contenedor = document.createElement("div");
                let name = document.createElement("h1");
                name.textContent = receta.strMeal;
                let imagen = document.createElement("img");
                imagen.src = document.strMealThumb; 
                let massage = document.createElement("p");
                massage.textContent = receta.strInstructions;
                const ingredientesReceta = document.createElement('ul');
                for (let i = 1; i <= 20; i++) {
                    const ingrediente = receta[`strIngredient${i}`];
                    if (ingrediente) {
                        const li = document.createElement('li');
                        li.textContent = `${ingrediente} - ${receta[`strMeasure${i}`]}`;
                        ingredientesReceta.appendChild(li);
                    }
                }
                contenedor.appendChild(name);
                contenedor.appendChild(imagen);
                contenedor.appendChild(message);
                contenedor.appendChild(ingredientesReceta);
                contenedorDeReceta.appendChild(contenedor);            }
            
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
