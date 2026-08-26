let activeRole = 'customer'; 
const customerbtn = document.getElementById("customerbtn");
const workerbtn = document.getElementById("workerbtn");
const loginForm = document.getElementById('loginForm');

function setActive(role){
    activeRole = role;
    if(role==='customer'){
        customerbtn.className = "border h-15 w-96 text-center bg-[#735C00] text-white rounded-[5px] p-[5px]";
        workerbtn.className = "border h-15 w-96 text-center bg-[#FBF9F9] text-[#735C00] rounded-[5px] p-[5px]";
    }else{
         customerbtn.className = "border h-15 w-96 text-center bg-[#F5F3F3] text-[#735C00] rounded-[5px] p-[5px]";
        workerbtn.className = "border h-15 w-96 text-center bg-[#735C00] text-white rounded-[5px] p-[5px]";
    }
   
}
 customerbtn.addEventListener('click', ()=> setActive('customer'));
 workerbtn.addEventListener('click', ()=> setActive('worker'));
 loginForm.addEventListener('submit', (e) => {
  e.preventDefault();


  if (activeRole === 'customer') {
    window.location.href = "dashboards/customer.html";
  } else {
    window.location.href = "dashboards/worker.html";
  }
});