import helpers from "./helpers.js";

const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

function validEmail(emailInput, emailError) {
  emailInput.addEventListener("change", () => {
    helpers.isEmpty(emailInput.value)
  
    if (!regex.test(emailInput.value)) {
      helpers.addContent(emailError, "error", "Please enter a valid email address");
    } else {
      helpers.removeContent(emailError, "error");
    }
  })
}

export default validEmail;