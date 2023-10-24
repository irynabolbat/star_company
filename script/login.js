import validEmail from "./emailValid.js";
import validPassword from "./passwordValid.js";
import sendRequest from "./sendRequest.js";

const loginEmail = document.getElementById("login_email");
const loginPassword = document.getElementById("login_pswd");
const loginValidation = document.querySelector(".login_valid");
const pswdValidation = document.querySelector(".pswd_valid");
const loginForm = document.querySelector(".login_form");

function login() {
  validEmail(loginEmail, loginValidation);
  validPassword(loginPassword, pswdValidation)
  
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const email = loginEmail.value;
    const password = loginPassword.value;
  
    sendRequest({email, password});
  })
}

export default login;
