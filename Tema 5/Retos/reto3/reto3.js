window.addEventListener("load", function () {
  document.querySelector("form").addEventListener("submit", checkID);
});

function checkID(event) {
  event.preventDefault();

  let ide = document.querySelector("input");
  let error = document.getElementById("errorid");

  error.textContent = "";

  if (ide.checkValidity()) {
    error.textContent = "Todo correcto";
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
