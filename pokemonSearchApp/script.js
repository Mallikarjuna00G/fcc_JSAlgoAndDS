const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");

const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const charPhoto = document.getElementById("charPhoto");

const tableDataIds = [
    pokemonName,
    pokemonId,
    weight,
    height,
    types,
    hp,
    attack,
    defense,
    specialAttack,
    specialDefense,
    speed
]

searchBtn.addEventListener("click", () => {
    charPhoto.innerHTML = "";
    tableDataIds.forEach(id => {
        id.innerHTML = '';
    });
    fetchPokemonList();
})

const fetchPokemonList = async () => {
    const link = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
    const fetchData = await fetch(link);
    const data = await fetchData.json();
    const pokemonList =  data.results;

    let searchTerm = searchInput.value.toLowerCase().trim();
    searchTerm = searchTerm.replaceAll('.', '-');
    searchTerm = searchTerm.replaceAll(' ', '');
    searchTerm = searchTerm.replaceAll('♀', '-f');
    searchTerm = searchTerm.replaceAll('♂', '-m');
    searchTerm = searchTerm.replaceAll(/[^-a-zA-Z0-9*]/g, '');
    // console.log(searchTerm);
    const pokemon = pokemonList.find(p => p.name === searchTerm || p.id === parseInt(searchTerm));

    if(pokemon === undefined) {
        alert("Pokémon not found");
    } else {
        // console.log(pokemon);
        fetchPokemonDetails(pokemon.url);
    }
}

const fetchPokemonDetails = async (url) => {
    const fetchData = await fetch(url);
    const data = await fetchData.json();
    // console.log(data);
    
    charPhoto.innerHTML = `<img src="${data.sprites.front_default}" id="sprite">`;
    pokemonName.textContent = data.name.toUpperCase();
    pokemonId.textContent = data.id;
    weight.textContent = data.weight;
    height.textContent = data.height;

    data.types.forEach(item => {
        types.innerHTML += `<span class="pokemonTypes">${item.type.name.toUpperCase()}</span>`;
    });

    data.stats.forEach(item => {
        switch(item.stat.name) {
            case "hp":
                hp.textContent = item.base_stat;
                break;
            case "attack":
                attack.textContent = item.base_stat;
                break;
            case "defense":
                defense.textContent = item.base_stat;
                break;
            case "special-attack":
                specialAttack.textContent = item.base_stat;
                break;
            case "special-defense":
                specialDefense.textContent = item.base_stat;
                break;
            case "speed":
                speed.textContent = item.base_stat;
                break;
            default:
                break;
        }
    })
}