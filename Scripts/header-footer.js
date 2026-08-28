const header = document.getElementById("header");
header.innerHTML = `
<div class="logo">FixItLocal</div>
    <div>
        <nav  class="nav-content">
            <a href="/index.html">home</a>
            <a href="/pages/Services.html">Find Services</a>
            <a href="/pages/Professionals.html">For Professionals</a>
            <a href="/pages/About.html">About</a>
        </nav>
    </div>
    <div>
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
