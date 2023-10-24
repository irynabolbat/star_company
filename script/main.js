import login from "./login.js";
import showSlide from "./slide.js";
import sendRequest from "./sendRequest.js";

const prevBtn = document.getElementById("prev_btn");
const nextBtn = document.getElementById("next_btn");
const startBtn = document.getElementById("start_btn");
const slides = document.querySelectorAll(".slides li");
const emailForm = document.getElementById("email_form");
const passwordForm = document.getElementById("password_form");

let currentIndex = 0;

login();

showSlide(currentIndex);

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

startBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const selectElement = document.querySelector('.select_position');
  const ageElement = document.querySelector('.select_age');
  const locationInput = document.querySelector('.input_slider');

  if (locationInput.value.trim() === '' || emailForm.value.trim() === '' || passwordForm.value.trim() === '') {
    alert('Please fill in location, email and password fields.');
  } else {
    const formData = {
      occupation: selectElement.value,
      age: ageElement.value,
      location: locationInput.value,
      email: emailForm.value,
      password: passwordForm.value,
    };

    sendRequest(formData);
  }
});
