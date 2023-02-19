const btn = document.getElementById("btn");
const input = document.getElementById("messageInput");
const lastMessages = document.getElementById("lastMessages");

function send() {
  let message = input.value;
  if (message === "") {
    window.alert("message is empty");
    return;
  }
  lastMessages.innerHTML = message;
  input.value = "";
}

btn.addEventListener("click", send);
