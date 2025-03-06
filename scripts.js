// Abrir y cerrar el chat
const chatbox = document.getElementById('chatbox');
const closeChat = document.getElementById('closeChat');
const sendChatButton = document.getElementById('sendChat');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');

// Abre el chat
function openChat() {
    chatbox.style.display = 'block';
}

// Cierra el chat
closeChat.addEventListener('click', () => {
    chatbox.style.display = 'none';
});

// Enviar mensaje
sendChatButton.addEventListener('click', () => {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'user');
        messageDiv.textContent = userMessage;
        chatMessages.appendChild(messageDiv);
        chatInput.value = ''; // Limpiar input
        chatMessages.scrollTop = chatMessages.scrollHeight; // Desplazar hacia abajo
    }
});

// Abrir chat al hacer clic en el botón flotante
openChat();
