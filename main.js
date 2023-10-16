const slides = document.querySelectorAll(".slides li");
const prevBtn = document.getElementById("prev_btn");
const nextBtn = document.getElementById("next_btn");
const startBtn = document.getElementById("start_btn");
const loginEmail = document.getElementById("login_email");
const loginEmailForm = document.getElementById("loginEmail_form");
const loginValidation = document.querySelector(".login_valid");
const registrationError = document.getElementById("registration_error");
const locationInfo = document.getElementById("location_info");
const passwordInfo = document.getElementById("password_info");
const points = document.querySelectorAll(".slider_point");
const registrationLogin = document.querySelector(".login_form");

let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
let currentIndex = 0;

function validEmail(emailInput, emailError) {
  emailInput.addEventListener("change", () => {
    if (emailInput.value === "") {
      return;
    }
  
    if (!regex.test(loginEmail.value)) {
      emailError.classList.add("error");
      emailError.textContent = "Please enter a valid email address";
    } else {
      emailError.classList.remove("error");
      emailError.textContent = "";
    }
  })
}

validEmail(loginEmail, loginValidation);

function showSlide(index) {
  slides.forEach((slide) => (slide.style.display = "none"));
  slides[index].style.display = "block";

  points.forEach((point, i) => {
    if (i <= index) {
      point.classList.add("active");
    } else {
      point.classList.remove("active");
    }

    if (slides[index].classList.contains("location")) {
      locationInfo.classList.add("info");
      locationInfo.textContent = "E.g.: New Roads or 70760 \n We don’t use postal addresses to contact members directly!";
    } else {
      locationInfo.classList.remove("info");
      locationInfo.textContent = "";
    }

    if (slides[index].classList.contains("email_adress")) {
      validEmail(loginEmailForm, registrationError);
    } else {
      registrationError.classList.remove("error");
      registrationError.innerHTML = "";
    }

    if (slides[index].classList.contains("password_reg")) {
      passwordInfo.classList.add("info");
      passwordInfo.innerHTML = `<p>By clicking the button above you agree to our <a>Terms of Use</a> \n and <a>Privacy Policy</a> including use of cookies and to receive newsletters,\n account updates and offers sent by StarCompany.</p>`;
    } else {
      passwordInfo.classList.remove("info");
      passwordInfo.innerHTML = "";
    }

    if (index === slides.length - 1) {
      nextBtn.style.display = "none";
      startBtn.style.display = "block";
    } else {
      nextBtn.style.display = "block";
      startBtn.style.display = "none";
    }

    if (index === 0) {
      prevBtn.disabled = true;
    } else {
      prevBtn.disabled = false;
    }
  });
}

showSlide(currentIndex);

nextBtn.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

prevBtn.addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

function sendRequest(data) {
  fetch("http://www.mocky.io/v2/5dfcef48310000ee0ed2c281", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log("Response from the server:", responseData);
    })
    .catch((error) => {
      console.error("Error sending the request:", error);
    });
}

registrationLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  const passwordInput = document.querySelector("#login_pswd");

  const email = loginEmail.value;
  const password = passwordInput.value;

  sendRequest({email, password});
})

startBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const selectElement = document.querySelector('.select_position');
  const ageElement = document.querySelector('.select_age');
  const locationInput = document.querySelector('.input_slider');
  const passwordInput = document.querySelector('.password_form');

  const formData = {
    occupation: selectElement.value,
    age: ageElement.value,
    location: locationInput.value,
    email: loginEmailForm.value,
    password: passwordInput.value,
  };

  sendRequest(formData);
});
