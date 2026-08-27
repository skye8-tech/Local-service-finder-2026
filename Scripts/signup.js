const tabCustomer = document.getElementById("tab-customer");
const tabWorker = document.getElementById("tab-worker");
const signupForm = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const termsCheckbox = document.getElementById("terms");
const roleInput = document.getElementById("user-role");

function setRole(role) {
  roleInput.value = role;

  if (role === "customer") {
    tabCustomer.className =
      "w-1/2 py-3 text-sm font-medium border-b-2 bg-white border-[#735C00] text-black focus:outline-none transition-all";
    tabWorker.className =
      "w-1/2 py-3 text-sm font-medium border-b-2 border-transparent bg-[var(--tertiary-color)] text-[black] hover:text-gray-600 focus:outline-none transition-all";
  } else {
    tabWorker.className =
      "w-1/2 py-3 text-sm font-medium border-b-2 bg-white border-[#735C00] text-black focus:outline-none transition-all";
    tabCustomer.className =
      "w-1/2 py-3 text-sm font-medium border-b-2 border-transparent bg-[var(--tertiary-color)] text-[black] hover:text-gray-600 focus:outline-none transition-all";
  }
}

tabCustomer.addEventListener("click", () => setRole("customer"));
tabWorker.addEventListener("click", () => setRole("worker"));
// --- Clear and Unified Submit & Validation Handler ---
signupForm.addEventListener("submit", (e) => {
  // 1. Stop the page from reloading or navigating automatically
  e.preventDefault();

  let isValid = true;
  const currentRole = roleInput.value; // FIX: Grabs the string value, not the element

  // 2. Full Name Validation
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

  // 3. Email Validation
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

  // 4. Password Strength Validation
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

  // 5. Terms & Conditions Validation
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

  // 6. Conditional Routing (Only triggers if EVERY check above passes)
  if (isValid) {
    console.log(`Successful validation for role: ${currentRole}`);

    if (currentRole === "customer") {
      window.location.href = "dashboards/customer.html";
    } else {
      window.location.href = "dashboards/worker.html";
    }
  }
});

// --- Helper UI Utilities ---
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

// --- Live Input Clearing Event Listeners for clean UX ---
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
