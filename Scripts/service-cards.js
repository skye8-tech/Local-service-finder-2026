const professionalsData = [
  {
    id: 1,
    name: "Mary's Plumbing",
    tags: "RESIDENTIAL • COMMERCIAL",
    description:
      "Expert plumbing services for residential and commercial systems...",
    rating: "4.5",
    rate: "FCFA 42,500",
    image: "../images/pictures/female-plumber.jpg",
  },
  {
    id: 2,
    name: "Mike's Electric",
    tags: "RESIDENTIAL • EMERGENCY",
    description:
      "Licensed electrician providing 24/7 support for outages, panel upgrades...",
    rating: "4.7",
    rate: "FCFA 47,500",
    image: "../images/pictures/solar.jpg",
  },
  {
    id: 3,
    name: "Elite HVAC Services",
    tags: "HEATING • COOLING",
    description:
      "Reliable heating and cooling solutions, AC diagnostics, and installation...",
    rating: "4.8",
    rate: "FCFA 55,000",
    image: "../images/pictures/electrician2.jpg",
  },
  {
    id: 4,
    name: "Dave's Handyman",
    tags: "GENERAL REPAIRS",
    description:
      "Your go-to professional for general home repairs, painting and odd jobs...",
    rating: "4.6",
    rate: "FCFA 37,500",
    image: "../images/pictures/worker.jpg",
  },

  {
    name: "Alpha Carpentry",
    tags: "WOODWORK",
    description: "Custom cabinets...",
    rating: "3.8",
    rate: "FCFA 45,000",
    img: "../images/pictures/.jpg",
  },
  {
    name: "Pro Paint & Stain",
    tags: "PAINTING",
    description: "Interior wall coloring...",
    rating: "3.6",
    rate: "32,500",
    img: "../../images/p6.jpg",
  },
  {
    name: "Apex Landscaping",
    tags: "GARDENING",
    description: "Yard lawn maintenance...",
    rating: "4.0",
    rate: "FCFA 35,000",
    img: "../../images/p7.jpg",
  },
  {
    name: "Smart Fix Appliance",
    tags: "APPLIANCE",
    description: "Washers and dryers...",
    rating: "3.9",
    rate: "FCFA 50,000",
    img: "../../images/p8.jpg",
  },

  {
    name: "Eco Cleaners",
    tags: "CLEANING",
    description: "Deep home sanitation...",
    rating: "4.5",
    rate: "FCFA 25,000",
    img: "../../images/p9.jpg",
  },
  {
    name: "Bolt Roofing",
    tags: "ROOFING",
    description: "Shingle restoration...",
    rating: "4.8",
    rate: "FCFA 60,000",
    img: "../../images/p10.jpg",
  },
  {
    name: "Masonry Masters",
    tags: "CONCRETE",
    description: "Brick paving work...",
    rating: "3.5",
    rate: "FCFA 47,500",
    img: "../../images/p11.jpg",
  },
  {
    name: "Secure Locks",
    tags: "LOCKSMITH",
    description: "Emergency key changes...",
    rating: "3.9",
    rate: "FCFA 35,000",
    img: "../../images/p12.jpg",
  },
];
let currentPage = 1;

function renderCards() {
  const gridContainer = document.getElementById("cards-build");

  const startIndex = (currentPage - 1) * 4;
  const endIndex = startIndex + 4;

  const pageDataSlice = professionalsData.slice(startIndex, endIndex);

  gridContainer.innerHTML = pageDataSlice
    .map(
      (pro) => `
        <div class="pro-card">
            <div class="pro-image-wrapper">
                <img src="${pro.image}" alt="${pro.name}" class="pro-img">
                <div class="rating-badge">
                    <span>⭐</span> ${pro.rating}
                </div>
            </div>

            <div class="pro-details-wrapper">
                <div>
                    <div class="card-top-row">
                        <div>
                            <h3 class="pro-name">${pro.name}</h3>
                            <p class="pro-tags">${pro.tags}</p>
                        </div>
                        <button class="heart-btn">♡</button>
                    </div>
                    <p class="pro-desc">${pro.description}</p>
                </div>

                <!-- Footer Base Split Elements -->
                <div class="card-bottom-row">
                    <div class="price-box">
                        <p>Starting at</p>
                        <h4>${pro.rate}<span>/hr</span></h4>
                    </div>
                    <a href="#" class="view-profile-link">View Profile</a>
                </div>
            </div>
        </div>
    `,
    )
    .join("");
}
document.addEventListener("DOMContentLoaded", () => {
  renderCards();
  const pageNumbers = document.querySelectorAll(".page-num");

  pageNumbers.forEach((button) => {
    button.addEventListener("click", () => {
      currentPage = parseInt(button.textContent.trim());
      renderCards();
      document.querySelector(".page-num.active")?.classList.remove("active");
      button.classList.add("active");
    });
  });
});
