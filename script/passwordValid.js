import helpers from "./helpers.js";

 function validPassword(passwordInput, pswdError) {
  passwordInput.addEventListener("change", () => {
    helpers.isEmpty(passwordInput.value)

    if (passwordInput.value.length < 8) {
      helpers.addContent(pswdError, "error", "Password should have at least 8 characters")
    } else {
      helpers.removeContent(pswdError, "error")
    }
  })
}

export default validPassword;