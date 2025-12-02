document.getElementById("formulario").addEventListener("submit", async function (e) {
        e.preventDefault();

        let ide = document.getElementById("ide");
        let erroride = document.getElementById("error");
        let errorpoke = document.getElementById("pokeerror");
        let pokemon = null;
        let pokemonencontrado = document.getElementById("pokemon");

        erroride.textContent = "";
        pokemonencontrado.innerHTML = "";

        if (ide.value === "") {
            erroride.textContent = "No puede estar vacío";
        }else if(!ide.checkValidity()){
            erroride.textContent = "Formato incorrecto";
        } else {
            try {
                pokemon = await obtenerpokemon(ide.value);
                let tipos = pokemon.types.map((t) => `${t.type.name}`).join(", ");
                pokemonencontrado.innerHTML = `<div><img src="${pokemon.sprites.front_default}"><ul><li>Nombre: ${pokemon.name}</li><li>Altura: ${pokemon.height}</li><li>Peso: ${pokemon.weight}</li><li>Tipos: ${tipos}</li></ul></div>`;
            } catch (error) {
                errorpoke.textContent ="Error: Pokémon no encontrado o problema de conexión.";
            }

        }
    });

async function obtenerpokemon(id) {

    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);

        if(!request.ok){
            throw new Error(`Error: Pokémon con ID/Nombre '${id}' no encontrado.`)
        }

    const poke = await request.json();
    return poke;
}


//---------------------------------------------------------------------------------------------------------

document.getElementById("formulario2").addEventListener("submit", async function(e){
    e.preventDefault();

let tipo = document.getElementById("dato").value;
let resultado = document.getElementById("resultado");
let ide2 = document.getElementById("nombre");

resultado.innerHTML = "";

    switch(tipo){

        case "pokemon":

            if(ide2.value === ""){
                let pokedex = await obtenerlistapokemon();
                let pokemones = pokedex.results.map(p => `<p>Nombre: ${p.name}</p>`).join("");
                resultado.innerHTML = pokemones;
            }else{
                let pokemon2 = await obtenerpokemon(ide2.value);
                let tipos = pokemon2.types.map((t) => `${t.type.name}`).join(", ");
                resultado.innerHTML =`<div><img src="${pokemon2.sprites.front_default}"><ul><li>Nombre: ${pokemon2.name}</li><li>Altura: ${pokemon2.height}</li><li>Peso: ${pokemon2.weight}</li><li>Tipos: ${tipos}</li></ul></div>`;
            }

        break;

        case "habilidades":

        break;

        case "tipos":

        break;
    }


})

async function obtenerlistapokemon() {
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50`)

    if(!request.ok){
        throw new Error(`No funca`);
    }
    const lista = await request.json();
    return lista;
}


async function obtenerlistahabilidades() {
    const request = await fetch(`https://pokeapi.co/api/v2/ability`);

    if(!request.ok){
        throw new Error("Fallo de la aplicacion")
    }

    const lista = await request.json();
    return lista;
    
}

async function obtenerhabilidad(id){
    const request = await fetch(`https://pokeapi.co/api/v2/ability/${id}`);

    if(!request.ok){
        throw new Error("No se encuentra");
    }

    let habilidad = await request.json();
    return habilidad;
}