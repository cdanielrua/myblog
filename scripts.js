function leerMas(id) {
    const moreText = document.getElementById(`more-${id}`);
    moreText.style.display = moreText.style.display === "none" || moreText.style.display === "" ? "block" : "none";
}
