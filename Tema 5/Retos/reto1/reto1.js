let paises = document.getElementById("paises");
let listaNombres = [];
obtenerNombres();

document.getElementById("busqueda").addEventListener("input", function (e) {
    let buscar = document.getElementById("busqueda").value.toLowerCase();

    if (buscar === "") {
        paises.innerHTML = "";
        return;
    }

    let encontrados = listaNombres.filter(
        (p) =>
            p.name.common.toLowerCase().includes(buscar) ||
            p.name.common.toLowerCase().includes(buscar)
    );

    let html = `<tr><th>Nombre</th><th>Capital</th><th>Region</th><th>Poblacion</th>`;
    html += encontrados
        .map(
            (e) =>
                `</tr><tr><td>${e.name.common}</td> <td>${e.capital}</td> <td>${e.region}</td> <td>${e.population}</td></tr>`
        )
        .join("");

    paises.innerHTML = html;
});

//--------------------------------------------------------------------------

async function obtenerNombres() {
    try {
        const respuesta = await fetch(
            "https://restcountries.com/v3.1/all?fields=capital,name,region,population"
        );
        listaNombres = await respuesta.json();
    } catch (error) {
        console.error("Error:", error);
    }
}
