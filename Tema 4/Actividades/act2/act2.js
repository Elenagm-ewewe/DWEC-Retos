let coloractual = "255, 255, 255";

document.addEventListener("dblclick", function (e) {
  e.preventDefault();

  let contenedor = document.body;
  let botonguardar = document.getElementById("guardar");

  let color = generarColor();
  contenedor.style.backgroundColor = `rgb(${color})`;
  botonguardar.style.backgroundColor = `rgb(${color})`;

  coloractual = color;
});

document.getElementById("guardar").addEventListener("click", function (event) {
  event.preventDefault();

  let elemento = document.getElementById("guardados");

  elemento.innerHTML += `<div class="guardao"><strong style="color: rgb(${coloractual});" >RGB(${coloractual})</strong></div>`;
});

function generarColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return r.toString() + "," + g.toString() + "," + b.toString();
}
