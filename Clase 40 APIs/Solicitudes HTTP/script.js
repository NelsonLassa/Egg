document.addEventListener('DOMContentLoaded', ()=>{
    let lista = document.getElementById("pokemon");
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=00&limit=20")
    //fetch("https://swapi.dev/api/people/")
    
    //Convertimos la respuesta en un formato json
    .then(response => response.json())
    //as
    .then(data => {
        data.results.forEach(pokemon => {
            const listaPokemon = document.createElement("li");
            listaPokemon.textContent = pokemon.name;
            lista.appendChild(listaPokemon);        
        });
    })
    .catch(error =>{
        alert("Fallo con el servidor",error);
    })

    let lista2 = document.getElementById("guerra");
    //fetch("https://pokeapi.co/api/v2/pokemon/?offset=00&limit=20")
    fetch("https://swapi.dev/api/people/")
    
    //Convertimos la respuesta en un formato json
    .then(response => response.json())
    //as
    .then(data => {
        data.results.forEach(pokemon => {
            const listaPokemon = document.createElement("li");
            listaPokemon.textContent = pokemon.name;
            lista2.appendChild(listaPokemon);        
        });
    })
    .catch(error =>{
        alert("Fallo con el servidor",error);
    })

})