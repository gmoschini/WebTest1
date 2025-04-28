const correctUsername = "miauser";
const correctPassword = "miapassword";

const form = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");
const protectedContent = document.getElementById("protected-content");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === correctUsername && password === correctPassword) {
    document.querySelector(".login-container").style.display = "none";
    protectedContent.style.display = "block";
  } else {
    errorMessage.textContent = "Username o password errati.";
  }
});
