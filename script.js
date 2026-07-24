const sendBtn = document.getElementById("send-btn");
const userInput = document.querySelector("input");
const chatArea = document.querySelector("main");

function sendMessage() {

    const messageText = userInput.value;

if (messageText === "") return;

const welcome = document.querySelector(".welcome");
  welcome.style.display = "none";

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", "user-message");
  messageDiv.textContent = messageText;

chatArea.appendChild(messageDiv);

 userInput.value = "";
}
sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") sendMessage();
});

const suggestionBtns = document.querySelectorAll(".suggestion-btn");
suggestionBtns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    userInput.value = btn.textContent;
    sendMessage();
  });
});