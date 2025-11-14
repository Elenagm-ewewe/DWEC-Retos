const errIden = document.getElementById("erroriden");
const errNombre = document.getElementById("errornombre");
const errFecha = document.getElementById("errorfecha");
const errEmail = document.getElementById("erroremail");
const errTlf = document.getElementById("errortlf");
const errEdad = document.getElementById("erroredad");

document.getElementById("enviar").addEventListener("click", (e) => {
    e.preventDefault();
    let valido = true;

    let iden = document.getElementById("iden");

        if (iden.value === ""){
            iden.style.border = "2px solid red";
            errIden.textContent = "Está vacío";
            errIden.style.color = "red";
            valido=false;
        }else if (!iden.checkValidity()) {
            iden.style.border = "2px solid red";
            errIden.textContent = "Formato incorrecto";
            errIden.style.color = "red";
            valido=false;
        } else {
            iden.style.border = "2px solid green";
            errIden.textContent = "";
        }

//--------------------------------------------------------------------------

    let nombre = document.getElementById("nombre");

        if (nombre.value === ""){
            nombre.style.border = "2px solid red";
            errNombre.textContent = "Está vacío";
            errNombre.style.color = "red";
            valido=false;
        }else if (!nombre.checkValidity()) {
            nombre.style.border = "2px solid red";
            errNombre.textContent = "Formato incorrecto";
            errNombre.style.color = "red";
            valido=false;
        } else {
            nombre.style.border = "2px solid green";
            errNombre.textContent = "";
        }

//--------------------------------------------------------------------------

    let fecha = document.getElementById("fecha");

        if (fecha.value === ""){
            fecha.style.border = "2px solid red";
            errFecha.textContent = "Está vacío";
            errFecha.style.color = "red";
            valido=false;
        }else if (!fecha.checkValidity()) {
            fecha.style.border = "2px solid red";
            errFecha.textContent = "Formato incorrecto";
            errFecha.style.color = "red";
            valido=false;
        } else {
            fecha.style.border = "2px solid green";
            errFecha.textContent = "";
        }

//--------------------------------------------------------------------------

    let email = document.getElementById("email");

        if (!email.checkValidity()) {
            email.style.border = "2px solid red";
            errEmail.textContent = "Formato incorrecto";
            errEmail.style.color = "red";
            valido=false;
        } else {
            email.style.border = "2px solid green";
            errEmail.textContent = "";
        }

//--------------------------------------------------------------------------

    let tfl = document.getElementById("tlf");

        if (!tfl.checkValidity()) {
            tfl.style.border = "2px solid red";
            errTlf.textContent = "Formato incorrecto";
            errTlf.style.color = "red";
            valido=false;
        } else {
            tfl.style.border = "2px solid green";
            errTlf.textContent = "";
        }

        if(valido){
            document.getElementById("valido").innerHTML = `TODO CORRECTO`;
        }
    });

