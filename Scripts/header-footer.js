const header = document.getElementById("header");
header.innerHTML = `
<div class="logo" class="flex flex-col md:flex-row justify-between items-center p-4 w-full gap-4 md:gap-0">FixItLocal</div>
    <div>
        <nav  class="nav-content" class="flex flex-wrap justify-center items-center gap-4 text-sm md:text-base w-full md:w-auto">
            <a href="/index.html">home</a>
            <a href="/pages/Services.html">Find Services</a>
            <a href="/pages/About.html">About</a>
        </nav>
    </div>
    <div  class="Signup" class="flex items-center justify-center gap-3 w-full md:w-auto mt-2 md:mt-0" >
        <a href="/pages/signup.html">Signup</a>
    </div>
`;
const footer = document.getElementById("footer");
footer.innerHTML = `
<div class="copyright">
     <div class="logo">FixItLocal</div>
     <p>2024 FixItLocal. Refined Reliability for Local <br>
    Services.</p>
   </div>
   <div>
    <h4>SERVICES</h4>
    <div>Plumbling</div>
    <div>Electrical</div>
    <div>Capentry</div>
    <div>Appliance Repair</div>
   </div>
   <div>
    <h4>COMPANY</h4>
    <div>Contact Us</div>
    <div>Careers</div>
   </div>
   <div>
    <h4>LEGAL</h4>
    <div>Privacy Policy</div>
   </div>
`;
