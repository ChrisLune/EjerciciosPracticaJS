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
    busquedaActiva: true 
};

//Utilizando Switch

const name = usuario.nombre;
const lastname = usuario.apellidos;
const moduloNombre = "React"; // Cambiar para buscar otros módulos
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

