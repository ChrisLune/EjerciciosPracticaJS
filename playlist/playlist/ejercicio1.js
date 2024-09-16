// Creación de objeto

const usuario = {
    nombre: "Christopher",
    apellidos: "Luna",
    temas: [
        {
            nombre: "Nodo.js",
            fechaInicio: "2024-10-21"
        },
        {
            nombre: "Git",
            fechaInicio: "2024-11-10"
        },
        {
            nombre: "React",
            fechaInicio: "2024-12-16"
        }
    ],
    busquedaActiva: true // true si está en búsqueda, false si no esta en busqueda
};

// Muestra en pantalla la fecha de inicio del módulo de React
/*
const name = usuario.nombre;
const lastname = usuario.apellidos;
const moduloReact = usuario.temas.find(tema => tema.nombre === "React");
if (moduloReact) {
    console.log(`La fecha de inicio del módulo para ${name} ${lastname} de React es: ${moduloReact.fechaInicio}`); // Cambié usuario por name
} else {
    console.log("No se encontró el módulo de React.");
}

// Muestra en pantalla  la fecha de inicio del módulo de Node
const moduloNode = usuario.temas.find(tema => tema.nombre === "Node.js");
if (moduloNode) {
    console.log(`La fecha de inicio del módulo para ${name} ${lastname} de Node es: ${moduloNode.fechaInicio}`);
} else {
    console.log("No se encontró el módulo de Node.");
}

// Muestra en pantalla  la fecha de inicio del módulo de Git
const moduloGit = usuario.temas.find(tema => tema.nombre === "Git");
if (moduloGit) {
    console.log(`La fecha de inicio del módulo para ${name} ${lastname} de Git es: ${moduloGit.fechaInicio}`);
} else {
    console.log("No se encontró el módulo de Git.");
}

console.log("Búsqueda activa:", usuario.busquedaActiva ? "Sí" : "No");
*/

//Utilizando Switch

const name = usuario.nombre;
const lastname = usuario.apellidos;
const moduloNombre = "React"; // Cambia esto para buscar otros módulos
let modulo;

switch (moduloNombre) {
    case "React":
        modulo = usuario.temas.find(tema => tema.nombre === "React");
        break;
    case "Node.js":
        modulo = usuario.temas.find(tema => tema.nombre === "Node.js");
        break;
    case "Git":
        modulo = usuario.temas.find(tema => tema.nombre === "Git");
        break;
    default:
        console.log("Módulo no encontrado.");
}

if (modulo) {
    console.log(`La fecha de inicio del módulo para ${name} ${lastname} de ${moduloNombre} es: ${modulo.fechaInicio}`);
} else {
    console.log(`No se encontró el módulo de ${moduloNombre}.`);
}

console.log("Búsqueda activa:", usuario.busquedaActiva ? "Sí" : "No");

