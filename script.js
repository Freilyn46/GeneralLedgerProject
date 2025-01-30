// Código de ejemplo para interacciones básicas

// Cuando el documento esté listo, ejecuta esta función
document.addEventListener("DOMContentLoaded", function() {
    // Ejemplo: Cambio de color al hacer clic en un botón
    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach(card => {
        card.addEventListener("click", function() {
            card.style.backgroundColor = "#e0f7fa";  // Cambia el fondo a un color claro al hacer clic
            card.style.transition = "background-color 0.3s ease";  // Transición suave
        });
    });

    // Ejemplo: Mostrar una alerta al cargar la página
    console.log("Bienvenido a la página de General Ledger Reconstruction");
    alert("Bienvenido a la plataforma de reconstrucción de libros contables!");
});