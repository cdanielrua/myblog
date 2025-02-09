document.addEventListener("DOMContentLoaded", function () {
    // Cargar el header
    fetch("../../components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;

            // Ahora que el header está cargado, cargamos el navigation dentro de él
            fetch("../../components/navigation.html")
                .then(response => response.text())
                .then(navData => {
                    document.getElementById("navigation").innerHTML = navData;
                });
        });

    // Cargar el footer
    fetch("../../components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
});

