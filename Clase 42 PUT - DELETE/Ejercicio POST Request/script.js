const formBlog = document.getElementById("formBlog");

// Función para enviar una solicitud POST al formulario
async function solicitudPost(event) {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario (enviar y recargar la página)

    try {
       const name = document.getElementById("name").value; // Obtiene el valor del campo de entrada con el ID "name" del formulario
        const text = document.getElementById("text").value; // Obtiene el valor del campo de entrada con el ID "text" del formulario
 
        const mensaje = {
            name,
            text,
        }; // Crea un objeto con los datos del mensaje a enviar (nombre y texto)

        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST', // Utiliza el método POST para enviar datos al servidor
            headers: {
                'Content-Type': 'application/json', // Establece el tipo de contenido como JSON en los encabezados de la solicitud
            },
            body: JSON.stringify(mensaje), // Convierte el objeto a formato JSON y lo envía como cuerpo de la solicitud
        });

        const data = await response.json(); // Convierte la respuesta del servidor a formato JSON

        alert('Mensaje enviado ' + name); // Muestra una alerta indicando que el mensaje fue enviado satisfactoriamente
    } catch (error) {
        alert("Error al enviar el mensaje: " + error); // Muestra una alerta en caso de error al enviar el mensaje
        console.error(error); // Muestra detalles del error en la consola del navegador
    }
}

formBlog.addEventListener("submit", solicitudPost); // Agrega un evento "submit" al formulario para llamar a la función solicitudPost al enviar el formulario
