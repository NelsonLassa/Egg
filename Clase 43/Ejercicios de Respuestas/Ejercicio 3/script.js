async function checkContent() {
    try {
        // Realizar una solicitud fetch a la URL especificada
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');

        // Verificar si la solicitud fue exitosa (código de estado 200-299)
        if (response.ok) {
            // Obtener el tipo de contenido de la respuesta
            const contentType = response.headers.get('Content-Type');

            // Verificar si el tipo de contenido incluye 'text/html'
            if (contentType.includes('text/html')) {
                // Mostrar un mensaje indicando que la respuesta contiene HTML
                console.log("La respuesta contiene HTML.");
            } else if (contentType.includes('application/json')) {
                // Mostrar un mensaje indicando que la respuesta contiene JSON

                const posts = await response.json();
                mostrarTitulos(posts);

                console.log("La respuesta contiene JSON");
            } else {
                // Mostrar un mensaje indicando que la respuesta contiene otro tipo de contenido
                console.log("La respuesta contiene otro tipo de contenido");
            }
        } else {
            // Mostrar un mensaje de error si la solicitud no fue exitosa
            console.log("Error al realizar la solicitud.")
        }
    } catch (error) {
        // Mostrar un mensaje de error si hay algún problema al obtener la respuesta
        console.error("Error al obtener la respuesta: ", error);
    }
}
function mostrarTitulos(posts) {

    const postList = document.getElementById("postList");

    const largo = 10;

    for (let i = 0; i < largo; i++) {
        const image = document.createElement("img");
        const title = document.createElement("p");

        image.src = posts[i].url;
        title.textContent = posts[i].title;

        postList.appendChild(image);
        postList.appendChild(title);
    }

}
// Llamar a la función checkContent con la URL de la API que se desea comprobar
checkContent(); 