async function obtenerClima() {
    const apikey ='263e09209b52486cb9e03442241901';
    const localizacion = document.getElementById("ciudad");
    const nombreCiudad = localizacion.value;

    if (!nombreCiudad){
        alert("Complete los campos");
        return;
    }

    try{
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${nombreCiudad}&lang=es`);
        const data = await response.json();

        if( data.error){
            alert(`Error: ${data.error.message}`);
        }

        mostrarClima(data);
    }
    catch(error){
        console.error('Ha ocurrido un Error: ', error);
    }
}

function mostrarClima(data){
    const respuesta1 = document.getElementById('respuesta1');
    respuesta1.innerHTML= `
    <h1>Ubicación</h1>
    <h2>Ciudad: ${data.location.name}</h2>
    <h2>País: ${data.location.country}</h2>
    <h3>Región: ${data.location.region}</h3>`
    
    const respuesta2 = document.getElementById('respuesta2');
    respuesta2.innerHTML= `   
    <h1>Estado del Tiempo</h1>
    <h3>Temperatura: ${data.current.temp_c} °C</h3>
    <h3>Humedad: ${data.current.humidity} %</h3>
    <h2><strong>Estado: </strong> ${data.current.condition.text}</h2>
    <img src="${data.current.condition.icon}" alt="estado">
    <h3>Velocidad: ${data.current.wind_kph} km/h</h3>`
}