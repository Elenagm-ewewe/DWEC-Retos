let coloractual = "255, 255, 255"

document.getElementById("botonaso").addEventListener("click", function(e){
e.preventDefault();


let contenedor = document.getElementById("color");
let botonguardar = document.getElementById("guardar");

let color = generarColor();
contenedor.style.backgroundColor = `rgb(${color})`
botonguardar.style.backgroundColor = `rgb(${color})`

coloractual = color;
});


document.getElementById("guardar").addEventListener("click", function(event){
event.preventDefault();

let elemento = document.getElementById("guardados");

elemento.innerHTML += `<strong style="color: rgb(${coloractual});" >RGB(${coloractual})</strong><div style="color: rgb(${coloractual}); width:20px; height:20px"></div>`


});

function generarColor(){
 
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    return r.toString() + "," + g.toString() + "," + b.toString()
}