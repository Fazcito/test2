// Lógica para el formulario de contacto
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    const formMessage = document.getElementById("formMessage");

    if (nombre && email && mensaje) {
        formMessage.style.display = "block";
        formMessage.textContent = "Gracias por tu mensaje. Nos pondremos en contacto pronto.";
        formMessage.style.backgroundColor = "#d4edda";
    } else {
        formMessage.style.display = "block";
        formMessage.textContent = "Por favor, completa todos los campos.";
        formMessage.style.backgroundColor = "#f8d7da";
    }
});
