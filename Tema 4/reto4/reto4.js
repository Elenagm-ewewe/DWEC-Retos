const errIden = document.getElementById("erroriden");
const errNombre = document.getElementById("errornombre");
const errFecha = document.getElementById("errorfecha");
const errEmail = document.getElementById("erroremail");
const errTlf = document.getElementById("errortlf");
const errEdad = document.getElementById("erroredad");
let check = document.getElementById("ski");

let contador1 = Number(localStorage.getItem("contador1")) || 0;
let contador2 = Number(localStorage.getItem("contador2")) || 0;

 document.getElementById("contador").innerHTML = contador1;
        document.getElementById("contadorclub").innerHTML = contador2;

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
        if (email.value === ""){
            email.style.border = "2px solid red";
            errEmail.textContent = "Está vacío";
            errEmail.style.color = "red";
            valido=false;
        }else if (!email.checkValidity()) {
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

        if (tfl.value === ""){
            tfl.style.border = "2px solid red";
            errortfl.textContent = "Está vacío";
            errortfl.style.color = "red";
            valido=false;
        }else if (!tfl.checkValidity()) {
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
            contador1++;
            localStorage.setItem("contador1", contador1);

        if(check.checked){
            contador2++;
            localStorage.setItem("contador2", contador2);
        }
    }

    document.getElementById("contador").innerHTML = contador1;
    document.getElementById("contadorclub").innerHTML = contador2;


    });

document.getElementById("resetcontador").addEventListener("click", function(e){
    e.preventDefault()

    let reset = 0;
    localStorage.setItem("contador1", reset);
      document.getElementById("contador").innerHTML = reset;

})

document.getElementById("resetcontador2").addEventListener("click", function(e){

    let reset = 0;
    localStorage.setItem("contador2", reset);
    
      document.getElementById("contadorclub").innerHTML = reset;

})
