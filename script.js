const form = document.querySelector(".form");

const formInput = document.querySelector(".form__input");

const email = document.getElementById("email");
const submitBtn = document.querySelector(".form__button");
const success = document.querySelector(".success");

const errors = document.querySelectorAll(".error");

formInput.addEventListener("input", (e) => {
  if (e.target.value === "") {
    errors.forEach((error) => {
      if (error.classList.contains("error")) {
        error.classList.add("hide");
      }
    });
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateEmail();
});

function validateEmail() {
  let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let value = email.value.trim();

  if (!value.match(emailFormat)) {
    success.classList.add("hide");
    errors.forEach((error) => error.classList.remove("hide"));
  } else {
    errors.forEach((error) => error.classList.add("hide"));
    success.classList.remove("hide");
    value = "";
  }
}

// submitBtn.addEventListener("click", validateEmail);
