const colores ={
    fire: '#d00000',
    grass: '#2d6a4f',
    electric: '#ffbe0b',
    water: '#184e77',
    ground: '#8a5a44',
    rock: '#463f3a',
    fairy: '#ff99ac',
    poison: '#a01a58',
    bug: '#354f52',
    dragon: '#892b64',
    psychic: '#ff477e',
    flying: '#bcb8b1',
    fighting: '#780000',
    normal: '#fdfffc',
    ghost: '#c77dff',
    ice: '#c0fdff',
    steel: '#abd5bd',
    sinister: '#463f3a',
    dark: '#3c6e71'
}

const tipoPrincipal = Object.keys(colores);

const contenedor = document.querySelector('#contenedor');
const numeroDePokemons = 898;

const esperarPokemon = async () =>{
    for(let i = 1; i <= numeroDePokemons; i++){
        await obtenerPokemon (i);
    }
}

const obtenerPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const respuesta = await fetch(url);
    const pokemon = await respuesta.json();
    crearCarta(pokemon);
    console.log(pokemon);
}

const crearCarta = (pokemon) =>{
    const pokemonDiv = document.createElement('div');

    pokemonDiv.classList.add('pokemon');

    const tipoPokemon = pokemon.types.map(type => type.type.name);
    const tipo = tipoPrincipal.find(type=> tipoPokemon.indexOf(type)> -1);
    const nombre = pokemon.name[0].toUpperCase()+pokemon.name.slice(1);
    const color = colores[tipo];
    pokemonDiv.style.backgroundColor = color;

    const pokemonHTML = `
                        <div class="imgContenedor">
                            <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png">
                        </div>
                        <div class="informacion">
                            <span class="numeroPokemon">#${pokemon.id.toString().padStart(3,'0')}</span>
                            <h3 class="nombrePokemon">${nombre}</h3>
                            <h3 class="tipo">Tipo: ${tipo}</h3>
                        </div>
    `;
    
    pokemonDiv.innerHTML = pokemonHTML;

    contenedor.appendChild(pokemonDiv);
}



esperarPokemon();