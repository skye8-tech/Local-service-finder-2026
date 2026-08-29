document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (user) {
    const nameElement = document.getElementById("user-display-name");
    const emailElement = document.getElementById("user-display-email");

    if (nameElement) nameElement.textContent = user.name;
    if (emailElement) emailElement.textContent = user.email;
  } else {
    window.location.href = "../login.html";
  }
});
