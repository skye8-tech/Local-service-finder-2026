let activeRole = "customer";
const customerbtn = document.getElementById("customerbtn");
const workerbtn = document.getElementById("workerbtn");
const loginForm = document.getElementById("loginForm");

function setActive(role) {
  activeRole = role;
  if (role === "customer") {
    customerbtn.className =
      "border w-1/2 py-3  text-center  bg-white border-b-2 border-[#735C00] text-black  rounded-[5px] p-[5px]";
    workerbtn.className =
      "border w-1/2 py-3  text-center  bg-white text-[black] border-transparent rounded-[5px] p-[5px]";
  } else {
    customerbtn.className =
      "border w-1/2 py-3  text-center  bg-white text-[black] border-transparent rounded-[5px] p-[5px]";
    workerbtn.className =
      "border w-1/2 py-3  text-center  bg-white border-b-2 border-[#735C00] text-black  rounded-[5px] p-[5px]";
  }
}
customerbtn.addEventListener("click", () => setActive("customer"));
workerbtn.addEventListener("click", () => setActive("worker"));
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (activeRole === "customer") {
    window.location.href = "dashboards/customer.html";
  } else {
    window.location.href = "dashboards/worker.html";
  }
});
