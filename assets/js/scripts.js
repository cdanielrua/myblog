// scripts.js - Manejo de navegación dinámica

const pagina = window.location.pathname.split("/").pop();
const tituloSeccion = document.getElementById("titulo-seccion");
const descripcionSeccion = document.getElementById("descripcion-seccion");

switch (pagina) {
    case "perfil.html":
        tituloSeccion.innerText = "Perfil Profesional";
        descripcionSeccion.innerText = "Habilidades y experiencia en ingeniería y ciencias de la computación.";
        break;
    case "blog.html":
        tituloSeccion.innerText = "Blog";
        descripcionSeccion.innerText = "Últimas tendencias en tecnología e inteligencia artificial.";
        break;
    case "hobbies.html":
        tituloSeccion.innerText = "Hobbies";
        descripcionSeccion.innerText = "Exploraciones en ingeniería de sonido y teología.";
        break;
}
