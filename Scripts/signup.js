const tabCustomer = document.getElementById("customer-checked");
const tabWorker = document.getElementById("worker-checked");
const signupForm = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const termsCheckbox = document.getElementById("terms");
const roleInput = document.getElementById("user-role");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;
  const currentRole = roleInput.value;

  const nameValue = nameInput.value.trim();
  if (nameValue === "") {
    showError(nameInput, "error-name", "Please enter your full name.");
    isValid = false;
  } else if (nameValue.length < 2) {
    showError(
      nameInput,
      "error-name",
      "Name must be at least 2 characters long.",
    );
    isValid = false;
  } else {
    clearError(nameInput, "error-name");
  }

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
      "Password must be at least 8 characters long.",
    );
    isValid = false;
  } else if (!/[A-Z]/.test(passwordValue) || !/[0-9]/.test(passwordValue)) {
    showError(
      passwordInput,
      "error-password",
      "Password must include an uppercase letter and a number.",
    );
    isValid = false;
  } else {
    clearError(passwordInput, "error-password");
  }

  if (!termsCheckbox.checked) {
    showError(
      termsCheckbox,
      "error-terms",
      "You must agree to the Terms & Conditions to proceed.",
    );
    isValid = false;
  } else {
    clearError(termsCheckbox, "error-terms");
  }

  if (isValid) {
    if (tabCustomer.checked) {
      window.location.href = "dashboards/customer.html";
    } else {
      window.location.href = "dashboards/worker.html";
    }
  }
});

function showError(inputElement, errorElementId, message) {
  const errorElement = document.getElementById(errorElementId);
  if (!errorElement) return;

  errorElement.textContent = message;
  errorElement.classList.remove("hidden");

  if (inputElement.type !== "checkbox") {
    inputElement.classList.add("border-red-500", "focus:border-red-500");
    inputElement.classList.remove("border-gray-200", "focus:border-gray-400");
  }
}

function clearError(inputElement, errorElementId) {
  const errorElement = document.getElementById(errorElementId);
  if (!errorElement) return;

  errorElement.textContent = "";
  errorElement.classList.add("hidden");

  if (inputElement.type !== "checkbox") {
    inputElement.classList.remove("border-red-500", "focus:border-red-500");
    inputElement.classList.add("border-gray-200", "focus:border-gray-400");
  }
}

nameInput.addEventListener("input", () => clearError(nameInput, "error-name"));
emailInput.addEventListener("input", () =>
  clearError(emailInput, "error-email"),
);
passwordInput.addEventListener("input", () =>
  clearError(passwordInput, "error-password"),
);
termsCheckbox.addEventListener("change", () => {
  if (termsCheckbox.checked) clearError(termsCheckbox, "error-terms");
});
