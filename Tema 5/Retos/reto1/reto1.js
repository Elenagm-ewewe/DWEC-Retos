window.addEventListener("load", async function () {

    let listaNombres = [];


    listaNombres = await obtenerNombres();

    dibujarTabla(listaNombres);


    document.getElementById("busqueda").addEventListener("input", function () {
        let buscar = document.getElementById("busqueda").value.toLowerCase();

        if (buscar === "") {
            dibujarTabla(listaNombres);
            return;
        }

        let encontrados = listaNombres.filter(p =>
            p.name.common.toLowerCase().includes(buscar)
        );

        dibujarTabla(encontrados);
    });

});

//--------------------------------------------------------------------------

async function obtenerNombres() {
    try {
        const respuesta = await fetch(
            "https://restcountries.com/v3.1/all?fields=capital,name,region,population"
        );
        return await respuesta.json();
    } catch (error) {
        console.error("Error:", error);
        return [];
    }
}

//--------------------------------------------------------------------------

function dibujarTabla(lista) {
    let paises = document.getElementById("paises");

    let html = `
        <tr>
            <th>Nombre</th>
            <th>Capital</th>
            <th>Región</th>
            <th>Población</th>
        </tr>
    `;

    html += lista.map(e => `
        <tr>
            <td>${e.name.common}</td>
            <td>${e.capital ? e.capital.join(", ") : "Sin capital"}</td>
            <td>${e.region}</td>
            <td>${e.population.toLocaleString()}</td>
        </tr>
    `).join("");

    paises.innerHTML = html;
}
