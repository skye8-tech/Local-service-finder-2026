const servicesData = [
  {
    id: 1,
    title: "Expert Plumbing",
    description:
      "Vetted professionals for leak repair, pipe installation, or...",
    image: "./images/pictures/plumber.jpg",
  },
  {
    id: 2,
    title: "Licensed Electrical",
    description: "Skilled electricians for wiring, fixtures, and panel...",
    image: "./images/pictures/electrical.jpg",
  },
  {
    id: 3,
    title: "Custom Carpentry",
    description: "Quality woodwork, framing, and structural repairs by...",
    image: "./images/pictures/carpenter.jpg",
  },
  {
    id: 4,
    title: "Appliance Repair",
    description: "Fast and reliable repair for refrigerators, ovens, ...",
    image: "./images/pictures/apliance.jpg",
  },
];

function renderServices() {
  const gridContainer = document.getElementById("dataCard");
  gridContainer.innerHTML = servicesData
    .map(
      (service) => `
        <div class="service-card" data-id="${service.id}">
            <div class="card-image-wrapper">
                <img src="${service.image}" alt="${service.title}" class="service-img">
            </div>
            <div class="card-content">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
        </div>
    `,
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", renderServices);
document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.querySelector(".search-location");
  const searchInput = document.querySelector(".search-input");

  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const query = searchInput.value.trim();

      if (query) {
        window.location.href = `./pages/Services.html?search=${encodeURIComponent(query)}`;
      }
    });
  }
});
