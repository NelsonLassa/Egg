async function obtenerClima() {
    const apikey ='263e09209b52486cb9e03442241901';
    const localizacion = document.getElementById("ciudad");
    const nombreCiudad = localizacion.value;

    if (!nombreCiudad){
        alert("Complete los campos");
        return;
    }

    try{
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${nombreCiudad}`);
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
    const respuesta = document.getElementById('respuesta');
    respuesta.innerHTML= `<h2>${data.location.region}</h2>
    <h3>${data.current.temp_c} °C</h3>
    <h3>${data.current.humidity} %</h3>
    <h3>${data.current.condition.text}</h3>
    <h3>${data.current.wind_kph}</h3>`




    
}