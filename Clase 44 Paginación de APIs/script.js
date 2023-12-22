const base = 'https://api.punkapi.com/v2/beers' //URL base de la API de cervezas

let page = 1; 

const elementoPage = 10; 

async function obtenerCervezas(page){
    try{
        const response = await fetch(`${base}?page=${page}&per_page=${elementoPage}`);
        if(response.ok){
            console.log("aqui")
            const data = await response.json(); 
            return data; 
        }else{
            alert.error("Fallo al obtener las cervezas"); 
        }
    }catch(error){
        alert("Error al conectar con la API", error);

    }

};

async function mostrarCervezas(page){

    const conteiner = document.getElementById("conteiner"); 
    conteiner.innerHTML = '';

    const cervezas = await obtenerCervezas(page); 
    cervezas.forEach(beer => {
        const divCervezas = document.createElement("div"); 
        divCervezas.classList.add("divCervezas");
        const nombreCerveza = document.createElement("h3"); 
        const imagenCerveza = document.createElement("img"); 

        nombreCerveza.textContent = beer.name; 
        imagenCerveza.src = beer.image_url;

        divCervezas.appendChild(imagenCerveza); 
        divCervezas.appendChild(nombreCerveza); 
        conteiner.appendChild(divCervezas);
        
    });

};

const anterior = document.getElementById("anterior"); 
const siguiente = document.getElementById("siguiente"); 
anterior.addEventListener('click', ()=>{
    if(page > 1){
        page--; 
        mostrarCervezas(page); 

    }
}); 
siguiente.addEventListener('click', ()=>{
    page++;
    mostrarCervezas(page); 
})

mostrarCervezas(page);


/*${base}?page=${page}&per_page=${elementoPage} es la URL a la que se 
hace la solicitud. Esta URL está compuesta por:
baseURL: es la URL base de la API de cervezas. 
En este caso, es 'https://api.punkapi.com/v2/beers'.
?page=${page}: es un parámetro que se agrega a la URL para 
especificar la página de resultados que se desea obtener. 
page es una variable que indica el número de la página que se quiere solicitar.
&per_page=${beersPerPage}: este parámetro establece la cantidad de 
resultados por página. beersPerPage es una variable que indica 
cuántas cervezas se desean mostrar por página.

Entonces, esta línea de código genera una URL dinámica para obtener 
datos de la API de cervezas, dependiendo de la página y la cantidad de 
cervezas por página especificadas en las variables page y beersPerPage, 
respectivamente.
 */