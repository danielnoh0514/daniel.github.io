const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector(".greeting");

function handleLogin(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);
  greeting.innerText = `Hello ${username}`;
  loginForm.classList.add("hidden");
  greeting.classList.remove("hidden");
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", handleLogin);
} else {
  greeting.classList.remove("hidden");
  greeting.innerText = `Hello ${savedUsername}`;
}
