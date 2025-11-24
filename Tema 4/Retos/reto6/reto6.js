document.getElementById("nuevo").addEventListener("submit", function(e){
    e.preventDefault();


let nombe = document.getElementById("nombre").value;
let descripcion = document.getElementById("descripcion").value;
let url = document.getElementById("url").value;

let contenido = document.getElementById("contenido");


const foto = document.getElementById("imagen").files[0];
const direccion = URL.createObjectURL(foto);



contenido.innerHTML += `
    <div><strong>Nombre:</strong><span>${nombe}<span>
    <br><strong>Descripcion: </strong> <span>${descripcion}<span>
    <br><img src="${direccion}", width="250px"><br>
    <a href="${url}">Enlace</a></div>
`
});

