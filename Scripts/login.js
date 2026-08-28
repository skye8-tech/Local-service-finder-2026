const customerchecked = document.getElementById("customer-check").checked;
const workerchecked = document.getElementById("worker-check").checked;
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("A1");
const passwordInput = document.getElementById("p1");
const termsCheckbox = document.getElementById("terms");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue === "") {
    showError(emailInput, "error-email", "Email address is required.");
    isValid = false;
  } else if (!emailRegex.test(emailValue)) {
    showError(emailInput, "error-email", "Please enter a valid email address.");
    isValid = false;
  } else {
    clearError(emailInput, "error-email");
  }
  const passwordValue = passwordInput.value;
  if (passwordValue === "") {
    showError(passwordInput, "error-password", "Password is required.");
    isValid = false;
  } else if (passwordValue.length < 8) {
    showError(
      passwordInput,
      "error-password",
      "Password must be at least 8 characters.",
    );
    isValid = false;
  } else {
    clearError(passwordInput, "error-password");
  }

  if (!termsCheckbox.checked) {
    showError(
      termsCheckbox,
      "error-terms",
      "You must agree to the Terms Policy to proceed.",
    );
    isValid = false;
  } else {
    clearError(termsCheckbox, "error-terms");
  }

  if (isValid === true) {
    if (customerchecked === true) {
      window.location.href = "dashboards/customer.html";
    } else if (workerchecked === true) {
      window.location.href = "dashboards/worker.html";
    }
  }
});
function showError(inputElement, errorElementId, message) {
  const errorElement = document.getElementById(errorElementId);
  if (!errorElement) return;

  errorElement.textContent = message;
  errorElement.classList.remove("hidden");

  inputElement.classList.add("border-red-500", "focus:border-red-500");
  inputElement.classList.remove("border-gray-200");
}
function clearError(inputElement, errorElementId) {
  const errorElement = document.getElementById(errorElementId);
  if (!errorElement) return;

  errorElement.textContent = "";
  errorElement.classList.add("hidden");

  inputElement.classList.remove("border-red-500", "focus:border-red-500");
  inputElement.classList.add("border-gray-200");
}
emailInput.addEventListener("input", () =>
  clearError(emailInput, "error-email"),
);
passwordInput.addEventListener("input", () =>
  clearError(passwordInput, "error-password"),
);
termsCheckbox.addEventListener("change", () => {
  if (termsCheckbox.checked) {
    clearError(termsCheckbox, "error-terms");
  }
});
