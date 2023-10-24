import validEmail from "./emailValid.js";
import helpers from "./helpers.js";
import validPassword from "./passwordValid.js";

const emailErr = document.getElementById("email_error");
const passwordErr = document.getElementById("password_error");
const locationInfo = document.getElementById("location_info");
const passwordInfo = document.getElementById("password_info");
const points = document.querySelectorAll(".slider_point");
const slides = document.querySelectorAll(".slides li");
const prevBtn = document.getElementById("prev_btn");
const nextBtn = document.getElementById("next_btn");
const startBtn = document.getElementById("start_btn");
const emailForm = document.getElementById("email_form");
const passwordForm = document.getElementById("password_form");

function showSlide(index) {
  if (index >= 0 && index < slides.length) {
    slides.forEach((slide) => (slide.style.display = "none"));
    slides[index].style.display = "block";

    points.forEach((point, i) => {
      if (i <= index) {
        point.classList.add("active");
      } else {
        point.classList.remove("active");
      }
    });

    if (slides[index].classList.contains("location")) {
      helpers.addClass(locationInfo, "info");
      helpers.addContent(locationInfo, "info", "E.g.: New Roads or 70760 \n We don’t use postal addresses to contact members directly!");
    } else {
      helpers.removeClass(locationInfo, "info");
      helpers.removeContent(locationInfo);
    }

    if (slides[index].classList.contains("email_adress")) {
      validEmail(emailForm, emailErr);
    } else {
      helpers.removeClass(emailErr, "error");
      helpers.removeInner(emailErr);
    }

    if (slides[index].classList.contains("password_reg")) {
      validPassword(passwordForm, passwordErr);
      helpers.addClass(passwordInfo, "info");
      helpers.addInner(passwordInfo, "info", `<p>By clicking the button above you agree to our <a>Terms of Use</a> \n and <a>Privacy Policy</a> including use of cookies and to receive newsletters,\n account updates and offers sent by StarCompany.</p>`);
    } else {
      helpers.removeClass(passwordErr, "error");
      helpers.removeClass(passwordInfo, "info");
      helpers.removeInner(passwordErr);
      helpers.removeInner(passwordInfo);
    }

    nextBtn.style.display = index === slides.length - 1 ? "none" : "block";
    startBtn.style.display = index === slides.length - 1 ? "block" : "none";
    prevBtn.disabled = index === 0;
  }
}


export default showSlide;
