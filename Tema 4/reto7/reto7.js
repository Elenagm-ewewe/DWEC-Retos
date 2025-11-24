document.addEventListener("DOMContentLoaded", function(){



document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

let elementos = document.querySelectorAll("form input, form label, form select, form textarea, form button");


for(let i = 0 ; i < elementos.length ; i++){

    resultado.innerHTML += "<div class='elemento'>";

    if(elementos[i].tagName === "INPUT"){

        resultado.innerHTML += `<h3>Elemento ${i +1}</h3><strong>Etiqueta:</strong> ${elementos[i].tagName}<br><strong>Tipo:</strong> ${elementos[i].type}<br>`;
        resultado.innerHTML += `<strong>Clase:</strong> ${elementos[i].className || "No tiene"}<br>`
        resultado.innerHTML += `<strong>ID:</strong> ${elementos[i].id || "No tiene"}<br>`
        resultado.innerHTML += `<strong>Nombre</strong> ${elementos[i].name || "No tiene"}<br>`
        resultado.innerHTML += `<strong>Valor:</strong> ${elementos[i].value || "No tiene"}<br>`
    }

    if(elementos[i].tagName === "LABEL"){

        resultado.innerHTML += `<h3>Elemento ${i +1}</h3>`
        resultado.innerHTML += `<strong>Etiqueta:</strong> ${elementos[i].tagName}<br>`;
        resultado.innerHTML += `<strong>For:</strong> ${elementos[i].htmlFor}<br>`;
        resultado.innerHTML += `<strong>Clase:</strong> ${elementos[i].className || "No tiene"}<br>`
        resultado.innerHTML += `<strong>ID:</strong> ${elementos[i].id || "No tiene"}<br>`
        resultado.innerHTML += `<strong>Nombre</strong> ${elementos[i].name || "No tiene"}<br>`
    }

    if(elementos[i].tagName === "TEXTAREA" || elementos[i].tagName === "BUTTON"){

        resultado.innerHTML += `<h3>Elemento ${i +1}</h3>`
        resultado.innerHTML += `<strong>Etiqueta:</strong> ${elementos[i].tagName}<br>`;
        resultado.innerHTML += `<strong>Clase:</strong> ${elementos[i].className || "No tiene"}<br>`
        resultado.innerHTML += `<strong>ID:</strong> ${elementos[i].id || "No tiene"}<br>`
        resultado.innerHTML += `<strong>Nombre</strong> ${elementos[i].name || "No tiene"}<br>`
        resultado.innerHTML += `<strong>Valor:</strong> ${elementos[i].value || "No tiene"}<br>`
    }

    if(elementos[i].tagName === "SELECT"){

        resultado.innerHTML += `<h3>Elemento ${i +1}</h3>`
        resultado.innerHTML += `<strong>Etiqueta:</strong> ${elementos[i].tagName}<br>`;
        resultado.innerHTML += `<strong>Clase:</strong> ${elementos[i].className || "No tiene"}<br>`
        resultado.innerHTML += `<strong>ID:</strong> ${elementos[i].id || "No tiene"}<br>`
        resultado.innerHTML += `<strong>Nombre</strong> ${elementos[i].name || "No tiene"}<br>`
        resultado.innerHTML += `<strong>Opciones:</strong><br>`;

    let opciones = elementos[i].options;
    for (let o = 0; o < opciones.length; o++) {
        resultado.innerHTML += `- ${opciones[o].text}<br>`;
    }



    }

    resultado.innerHTML += `</div>`;
}


    
});
});