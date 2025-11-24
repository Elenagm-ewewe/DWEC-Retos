class Personaje{
    constructor(nombre, descripcion, carac = []){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.carac = carac;

    }
}

const personajes = [new Personaje("stan", "Stan Mars es uno de los personajes principales de South Park, interpretado en inglés por Trey Parker, es uno de los personajes principales junto con Kyle Broflovski, Kenny McCormick, Eric Cartman y Butters Stotch. Él es el más normal del grupo, muy maduro para su edad y bien intencionado.Es el único personaje que ha tenido una novia estable.", ["estudiante", "hombre", "protagonista"]),
    new Personaje("kenny", "Es famoso porque no se le entiende cuando habla, debido que la capucha de su abrigo está muy ajustada.También es conocido por morir en casi todos lo episodios, a lo cual normalmente sigue una exclamación de Stan: ¡Oh, Dios mío! ¡Mataron a Kenny!, seguido de Kyle diciendo: ¡Hijos de puta!. En un episodio (Temporada 5 episodio 13), Kenny muere de forma aparentemente definitiva por una enfermedad, pero vuelve aparecer al final de la siguiente temporada.", ["estudiante", "hombre", "protagonista"]),
    new Personaje("cartman", "Eric Theodore Cartman aunque generalmente lo llaman simplemente por su apellido Cartman, es el total antagonista principal de South Park. Ninguno de los otros personajes considera a Cartman como su amigo y no se sabe porque comenzaron a salir con él en primer lugar; sin embargo, suele ser la primera opción de Kyle cuando rompe su amistad con Stan.", ["estudiante", "hombre", "protagonista"]),
    new Personaje("kyle", "Kyle es el más listo de los cuatro protagonistas, por lo que se le considera la voz de la razón en el grupo. A diferencia de su mejor amigo Stan, es más precavido y tiende a involucrarse menos en situaciones peligrosas. A veces muestra mejores valores morales que el resto de sus amigos.", ["estudiante", "hombre", "protagonista"]),
    new Personaje("butters", "Leopold Butters Stotch es un personaje principal de la serie. Él es un estudiante de cuarto grado en South Park Elementary. El papel de Butters comenzó a aumentar gradualmente después de que reemplazó a Kenny durante su remoción temporal en la sexta temporada. ", ["estudiante", "hombre", "secundario"]),
    new Personaje("heidi", "Es famoso porque no se le entiende cuando habla, debido que la capucha de su abrigo está muy ajustada.También es conocido por morir en casi todos lo episodios, a lo cual normalmente sigue una exclamación de Stan: ¡Oh, Dios mío! ¡Mataron a Kenny!, seguido de Kyle diciendo: ¡Hijos de puta!. En un episodio (Temporada 5 episodio 13), Kenny muere de forma aparentemente definitiva por una enfermedad, pero vuelve aparecer al final de la siguiente temporada.", ["estudiante", "mujer", "secundario"]),
    new Personaje("nichole", "Nichole Daniels es una estudiante de cuarto grado de la Escuela Primaria de South Park, Hizo su primera aparición en el episodio de la Temporada 16, Cartman Encuentra el Amor. A partir de la Temporada 17, ha hecho numerosas apariciones desde entonces. ", ["estudiante", "mujer", "secundario"]),
    new Personaje("wendy", "Es muy inteligente para su corta edad, al igual que Stan, ideológicamente es todo lo contrario a Eric Cartman con quien discute casi siempre. En uno de los primeros episodios se sabe que es de origen francés y que su padre es de Estrasburgo.", ["estudiante", "mujer", "protagonista"])
]


document.addEventListener("DOMContentLoaded", () => {

let contenedor = document.getElementById("contenedor");
let info = document.getElementById("informacion");

personajes.forEach(p => {

    let imagen = document.createElement("img");
    imagen.src = "img/" + p.nombre + ".jpg"
    imagen.dataset.nombre = p.nombre; 

    imagen.addEventListener("mouseover", () => {
        info.innerHTML = p.descripcion;
    });

    imagen.addEventListener("mouseout",() =>{
        info.innerHTML = "";
    });


    contenedor.appendChild(imagen)

    });
});

document.getElementById("chicas").addEventListener("click", () => resaltar("mujer"));
document.getElementById("chicos").addEventListener("click", () => resaltar("hombre"));
document.getElementById("protagonista").addEventListener("click", () => resaltar("protagonista"));


function resaltar(caracteistica){
    let imagenes = document.querySelectorAll("#contenedor img");

    imagenes.forEach(i => {

        let perso = personajes.find(p => p.nombre === i.dataset.nombre);

        if(perso.carac.includes(caracteistica)){
            i.style.border = "4px solid red";
            i.style.filter= "none"
        }else{
            i.style.border= "none";
            i.style.filter= "grayscale()"
        }

    })


}