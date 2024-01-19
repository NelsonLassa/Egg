const pokemonForm = document.getElementById("pokemonForm");

async function updatePokemon(event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    try {
        const pokemonId = document.getElementById("pokemonId").value; // Obtiene el valor del campo de entrada con el ID "pokemonId"
        const newName = document.getElementById("newName").value; // Obtiene el valor del campo de entrada con el ID "newName"
        const newType = document.getElementById("newType").value; // Obtiene el valor del campo de entrada con el ID "newType"

        const updatePokemonData = {
            name: newName,
            type: newType,
        }; // Crea un objeto con los datos actualizados del Pokemon

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`, {
            method: 'PUT', // Utiliza el método PUT para actualizar los datos del Pokemon
            headers: {
                'Content-Type': 'application/json', // Establece el tipo de contenido como JSON en los encabezados de la solicitud
            },
            body: JSON.stringify(updatePokemonData), // Convierte el objeto a formato JSON y lo envía como cuerpo de la solicitud
        });
        if (response.ok) {
            alert("Pokemon actualizado correctamente"); // Muestra una alerta si la actualización fue exitosa (código de respuesta 200-299)
        } else {
            alert("Error al actualizar el Pokemon"); // Muestra una alerta si hubo un error al actualizar (cualquier código de respuesta diferente a 200-299)
        }
    } catch (error) {
        alert("Error al actualizar el Pokemon"); // Muestra una alerta en caso de error al actualizar el Pokemon
        console.error(error); // Muestra detalles del error en la consola del navegador
    }
}

pokemonForm.addEventListener('submit', updatePokemon); // Agrega un evento 'submit' al formulario para llamar a la función updatePokemon al enviar el formulario

/*Codigos de Respuesta

1xx (Respuestas informativas): Indican que la solicitud ha sido recibida y 
el servidor sigue procesándola.
Ejemplo: 100 (Continuar), 101 (Cambiando Protocolos).

2xx (Respuestas satisfactorias): Indican que la solicitud fue recibida, 
entendida y aceptada exitosamente.
Ejemplo: 200 (OK), 201 (Creado), 204 (Sin contenido).

3xx (Redirecciones): Indican que la solicitud fue redirigida a otro recurso.
Ejemplo: 301 (Movido permanentemente), 302 (Encontrado), 304 (No modificado).

4xx (Errores del cliente): Indican que hubo un error en el lado del cliente 
al procesar la solicitud.
Ejemplo: 400 (Solicitud incorrecta), 401 (No autorizado), 404 (No encontrado).

5xx (Errores del servidor): Indican que hubo un error en el servidor 
al procesar la solicitud del cliente.
Ejemplo: 500 (Error interno del servidor), 503 (Servicio no disponible). */