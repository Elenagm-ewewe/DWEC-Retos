

document.getElementById("formulario").addEventListener("submit", function(e) {
e.preventDefault();

let valido = true;

let fechayhora = document.getElementById("fechayhora")

if(fechayhora.value === ""){
    valido = false;
    document.getElementById("errorfechahora").textContent = "Campo requerido"
}else if(!fechayhora.checkValidity()){
    valido = false;
    document.getElementById("errorfechahora").textContent = "Formato incorrecto";
}else{
    fechayhora.style.border = "2px solid green";
}

let cocinero = document.getElementById("cocinero")

if(cocinero.value === ""){
    valido = false;
    document.getElementById("errorcocinero").textContent = "Campo requerido"
}else if(!cocinero.checkValidity()){
    valido = false;
    document.getElementById("errorcocinero").textContent = "Formato incorrecto";
}else{
    cocinero.style.border = "2px solid green";
}



let destinatario = document.getElementById("destinatario");
if(destinatario.value === ""){
    valido = false;
    document.getElementById("errordestinatario").textContent = "Campo requerido"
}else if(!destinatario.checkValidity()){
    valido = false;
    document.getElementById("errordestinatario").textContent = "Formato incorrecto";
}else{
    destinatario.style.border = "2px solid green";
}


let gramos = document.getElementById("gramos");
if(gramos.value === ""){
    valido = false;
    document.getElementById("errorgramos").textContent = "Campo requerido"
}else if(!gramos.checkValidity()){
    valido = false;
    document.getElementById("errorgramos").textContent = "Formato incorrecto";
}else{
    gramos.style.border = "2px solid green";
}


let composicion = document.getElementById("composicion");
if(composicion.value === ""){
    valido = false;
    document.getElementById("errorcomposicion").textContent = "Campo requerido"
}else if(!composicion.checkValidity()){
    valido = false;
    document.getElementById("errorcomposicion").textContent = "Formato incorrecto";
}else{
    composicion.style.border = "2px solid green";
}

let cuenta = document.getElementById("cuenta")
if(!cuenta.checkValidity()|| !validarcuenta(cuenta.value)){
    valido = false;
    document.getElementById("errorcuenta").textContent = "Formato incorrecto";
}else{
    cuenta.style.border = "2px solid green";
}


if(valido){
    document.getElementById("aceptado").textContent = "TODO CORRECTO"
}

});


function validarcuenta(cuenta){

let letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I','J', 'K', 'L','M','N', 'O', 'P', 'Q', 'R', 'S', 'T','U','V', 'W','X','Y', 'Z'];
let valido = true;
let letra1;
let letra2;

for(let i = 0 ; i < letras.length;i++){

    if(cuenta[0] == letras[i]){
        letra1 = i+1;
    }

        if(cuenta[1] == letras[i]){
        letra2 = i+1;
    }

}

let sumaesperada = letra1 + letra2;

let numerossuma = cuenta.substring(2, 4);

if(numerossuma !== sumaesperada.toString().padStart(2, '0')){
    return false;
}

let seisprimeros = cuenta.substring(5, 11);
let seissiguientes = cuenta.substring(11,17);

let suma1 = Math.floor(sumardigitos(seisprimeros)/6);
let suma2 = Math.floor(sumardigitos(seissiguientes)/6);

if(cuenta[18] !== suma1){
return false;
}

if(cuenta[19] !== suma2){
return false;
}



return true;
}




function sumardigitos(cadena){
    let suma = 0;
    for (let i = 0; i < cadena.length; i++) {
        suma += Number(cadena[i]);
    }
    return suma;
}


//Número de cuenta de EEUU: supongamos que un número de cuenta estadounidense tiene el siguiente formato:

    //Dos letras: suponemos que el valor de cada letra es del 1 al 26\ (no hay ñ ni ll).
    //Dos dígitos: debe corresponderse con la suma de la primera letra y la segunda: en caso de que sea menor que 10 se pone el 0 delante.
   // Un guión.
    //Doce dígitos de cuenta
    //Un guión.
    //Dos dígitos de control: el primer dígito debe ser la suma de los 6 primeros dígitos de la cuenta dividido entre 6 y extrayendo solamente su parte entera; y el último dígito exactamente igual, pero con los 6 siguientes.
    //Si el número está correcto se colocará en un campo de texto al lado del anterior, pero sin guiones: solamente los números y las letras. Ejemplo: AA02-123400001200-10

