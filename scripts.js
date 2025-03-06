// Abre el chat
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

// Abre el chat al cargar la página
openChat();

// Cerrar el chat
closeChat.addEventListener('click', () => {
    chatbox.style.display = 'none';
});

// Enviar mensaje (usuario)
sendChatButton.addEventListener('click', () => {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
        displayMessage(userMessage, 'user');
        chatInput.value = ''; // Limpiar input
        chatMessages.scrollTop = chatMessages.scrollHeight; // Desplazar hacia abajo
        botReply(userMessage); // Llamada al bot para generar respuesta
    }
});

// Mostrar mensajes
function displayMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
}

// Responder automáticamente como bot
function botReply(userMessage) {
    // Convertir la entrada del usuario a minúsculas para hacer una comparación más fácil
    const lowerCaseMessage = userMessage.toLowerCase();

    // Buscar una respuesta adecuada en el objeto de respuestas
    let botResponse = botResponses[lowerCaseMessage] || botResponses["default"];

    // Mostrar la respuesta del bot
    setTimeout(() => {
        displayMessage(botResponse, 'bot');
        chatMessages.scrollTop = chatMessages.scrollHeight; // Desplazar hacia abajo
    }, 1000); // Simula un pequeño retraso para la respuesta
}

