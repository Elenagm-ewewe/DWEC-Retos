let peliculas = [];


document.addEventListener("DOMContentLoaded", async function () {

    await obtenerpeliculas();

    let html = peliculas.map((p) => `<div class="peli"><img src="${p.Poster}"> <h3>${p.Title}</h3> </div>`).join("");

    document.getElementById("peliculas").innerHTML = html

});


document.getElementById("busqueda").addEventListener("input", function (e) {
    e.preventDefault();

    let busqueda = document.getElementById("busqueda").value;

    let encontradas = peliculas.filter(p => p.Title.toLowerCase().includes(busqueda.toLowerCase()))

    let html = encontradas.map((p) => `<div class="peli"><img src="${p.Poster}"> <h3>${p.Title}</h3> </div>`).join("");

    document.getElementById("peliculas").innerHTML = html

});


//Obtenemos la lista de películas
async function obtenerpeliculas() {

    try {

        for (let i = 1; i <= 10; i++) {
            const respuesta = await fetch(
                `https://www.omdbapi.com/?s=movie&y=2025&page=${i}&apikey=609c0a2`
            );
            let lista = await respuesta.json();

            peliculas.push(...lista.Search); 

        }

    } catch (error) {
        console.error("Error:", error);
    }
}

//Añadimos estilos desde js

let body = document.getElementsByTagName("body");
body[0].style.background = "rgba(24, 23, 23, 1)";
body[0].style.fontFamily = `"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS"`;


