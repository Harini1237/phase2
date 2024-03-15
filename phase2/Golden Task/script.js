document.addEventListener("DOMContentLoaded", () => {
    const socket = io();
  
    const messages = document.getElementById("chat-messages");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
  
    sendButton.addEventListener("click", () => {
      const message = messageInput.value.trim();
      if (message !== "") {
        socket.emit("chat message", message);
        messageInput.value = "";
      }
    });
  
    socket.on("chat message", (msg) => {
      const messageElement = document.createElement("div");
      messageElement.textContent = msg;
      messages.appendChild(messageElement);
      messages.scrollTop = messages.scrollHeight;
    });
  });
  