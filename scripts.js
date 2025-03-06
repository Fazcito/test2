// Variables de chat
const chatbox = document.getElementById('chatbox');
const closeChat = document.getElementById('closeChat');
const sendChatButton = document.getElementById('sendChat');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');

// Respuestas del bot
const botResponses = {
    "hola": "¡Hola! ¿En qué puedo ayudarte hoy?",
    "cuál es tu nombre?": "Soy un bot creado para ayudarte. ¿Cómo puedo asistirte?",
    "qué servicios ofreces?": "Ofrecemos soluciones digitales y tecnológicas para tu negocio, incluyendo desarrollo web, marketing digital y más.",
    "gracias": "¡De nada! Si tienes más preguntas, no dudes en preguntar.",
    "default": "Lo siento, no entendí tu pregunta. ¿Podrías reformularla?"
};

// Función para abrir el chat
function openChat() {
    chatbox.style.display = 'block';
}

// Cerrar el chat
closeChat.addEventListener('click', () => {
    chatbox.style.display = 'none';
});

// Enviar mensaje (usuario)
sendChatButton.addEventListener('click', () => {
    const userMessage = chatInput.value.trim(); // Obtener mensaje del usuario
    console.log("Mensaje del usuario: " + userMessage); // Depuración
    if (userMessage) {
        displayMessage(userMessage, 'user'); // Mostrar mensaje del usuario
        chatInput.value = ''; // Limpiar input
        chatMessages.scrollTop = chatMessages.scrollHeight; // Desplazar hacia abajo
        botReply(userMessage); // Llamar a la función de respuesta del bot
    }
});

// Mostrar mensajes (usuario y bot)
function displayMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
}

// Responder automáticamente como bot
function botReply(userMessage) {
    // Convertir la entrada del usuario a minúsculas para hacer la comparación insensible a mayúsculas/minúsculas
    const lowerCaseMessage = userMessage.toLowerCase();
    console.log("Mensaje en minúsculas: " + lowerCaseMessage); // Depuración

    // Buscar una respuesta en el objeto de respuestas
    let botResponse = botResponses[lowerCaseMessage] || botResponses["default"];
    console.log("Respuesta del bot: " + botResponse); // Depuración

    // Mostrar la respuesta del bot con un retraso de 1 segundo
    setTimeout(() => {
        displayMessage(botResponse, 'bot');
        chatMessages.scrollTop = chatMessages.scrollHeight; // Desplazar hacia abajo
    }, 1000); // Simula un retraso de 1 segundo
}

// Abrir el chat automáticamente al cargar la página
openChat();
