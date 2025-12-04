window.addEventListener("load", function () {
    document.getElementById("formulario").addEventListener("submit", checkID);
    document.getElementById("formulario2").addEventListener("submit", existeID);
});

function checkID(event) {
  event.preventDefault();

  let ide = document.querySelector("input");
  let error = document.getElementById("errorid");

  error.textContent = "";

  if (ide.checkValidity()) {
    fetchAPI(ide.value);
  } else if (ide.validity.valueMissing) {
    error.textContent = "No puede estar vacío";
  } else if (!ide.checkValidity()) {
    error.textContent = "Formato incorrecto";
  }
}

const renderData = (dato) => {
    const contenedor = document.getElementById("dato");

    contenedor.innerHTML = ` <ul>
    <li>Nombre: ${dato.result.properties.name}</li>
    <li>Altura: ${dato.result.properties.height}</li>
    <li>Masa: ${dato.result.properties.mass}</li>
    <li>Género: ${dato.result.properties.gender}</li>
    </ul>
    `;

}

const fetchAPI = async (id) => {
  try {
    const response = await fetch(`https://www.swapi.tech/api/people/${id}/`);

    if (!response.ok) {
      throw new Error("ERRRRRRRROR");
    }

    const datos = await response.json();
    console.log(datos);
    renderData(datos);
  } catch(e) {
    console.error(e);
    
  }
};


//----------------------------------------------------------------------------------------

async function existeID(e){
    e.preventDefault();

    let tipo = document.getElementById("tipo").value;
    let idInput = document.getElementById("idbuscar");
    let id = idInput.value.trim();
    let error = document.getElementById("errorid");

    error.textContent = "";
    
    if (id === "") {
        buscarTodos(tipo);
        return;
    }

    if (isNaN(id) || Number(id) <= 0) {
        error.textContent = "Debe ser un número válido";
        return;
    }

    buscarporID(tipo, id);
}

const buscarporID = async (tipo, id) => {
    try {
        const response = await fetch(`https://www.swapi.tech/api/${tipo}/${id}/`);

        if (!response.ok) {
            throw new Error("No existe el ID ingresado");
        }

        const datos = await response.json();
        renderData(datos);

    } catch (e) {
        document.getElementById("errorid").textContent = e.message;
    }
};

const buscarTodos = async (tipo) => {
    try {
        let response;

        if (tipo === "people") {
            response = await fetch(`https://www.swapi.tech/api/${tipo}/?page=1&limit=82`);
        } else {
            response = await fetch(`https://www.swapi.tech/api/${tipo}/`);
        }

        const datos = await response.json();
        escribirTodos(datos, tipo);

    } catch (e) {
        console.error(e);
        document.getElementById("errorid").textContent = "Error al cargar datos";
    }
};



function escribirTodos(datos, tipo){

    const contenedor = document.getElementById("dato");
    contenedor.innerHTML = "";

    switch(tipo){

        case "people":
            contenedor.innerHTML = datos.results
                .map(p => `<div>Nombre: ${p.name}</div>`)
                .join("");
        break;

        case "films":
            contenedor.innerHTML = datos.result
                .map(f => `<div>Título: ${f.properties.title}</div>`)
                .join("");
        break;

        case "planets":
            contenedor.innerHTML = datos.results
                .map(pl => `<div>Planeta: ${pl.name}</div>`)
                .join("");
        break;

        case "starships":
            contenedor.innerHTML = datos.results
                .map(n => `<div>Nave: ${n.name}</div>`)
                .join("");
        break;

        case "species":
            contenedor.innerHTML = datos.results
                .map(s => `<div>Especie: ${s.name}</div>`)
                .join("");
        break;
    }
}


