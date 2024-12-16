const chatBox = document.getElementById('chat-box');
const chatForm = document.getElementById('chat-form');
const usernameInput = document.getElementById('username');
const messageInput = document.getElementById('message');

function loadMessages() {
    fetch('get_messages.php')
        .then(response => response.json())
        .then(messages => {
            chatBox.innerHTML = '';
            messages.forEach(msg => {
                const div = document.createElement('div');
                div.textContent = `[${msg.timestamp}] ${msg.username}: ${msg.message}`;
                chatBox.appendChild(div);
            });
        });
}

chatForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('username', usernameInput.value);
    formData.append('message', messageInput.value);

    fetch('send_message.php', { method: 'POST', body: formData })
        .then(() => {
            messageInput.value = '';
            loadMessages();
        });
});

setInterval(loadMessages, 2000);

loadMessages();
