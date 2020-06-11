const dataPokemon = POKEMON.pokemon;
console.log(dataPokemon);

function showPokemon(anyArray){
    let pokemonDiv = document.getElementById('pokemones-div');
    pokemonDiv.innerHTML = `
        ${anyArray.map(pokemon => `
            <div class="border-img"> 
                <h2>${pokemon.name}</h2> <br>
                <img src="${pokemon.img}" alt="imagenes de pokemones">
                <br>
                <b>Tipo: ${pokemon.type}</b> <br>
                <b>Huevo: ${pokemon.egg}</b> 
                <br>Devilidades: ${pokemon.weaknesses}</b> 

            </div>
        `)}
    
    `;
}
showPokemon(dataPokemon);

//buscador
const pokemonInput = document.getElementById("pokemon-input");

function filterSearch(anyArray, key, condicion){
    return anyArray.filter(item => item[key].includes(condicion));
    
};

pokemonInput.addEventListener('input', (e) => {
    showPokemon(filterSearch(dataPokemon, "name",pokemonInput.value.charAt(0).toUpperCase() + pokemonInput.value.slice(1)));
})

//filtro 
const orderType = document.getElementById('order-type')
orderType.addEventListener('change',() =>{
    const filtered = filterSearch(dataPokemon, "type", orderType.value);
    showPokemon(filtered);
})

