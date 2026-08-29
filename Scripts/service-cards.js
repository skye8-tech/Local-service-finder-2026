let currentPage = 1;
let globalRatingFilter = null;

function renderCards() {
  const gridContainer = document.getElementById("cards-build");
  if (!gridContainer) return;
  const finalizedList = getCombinedFilteredData(globalRatingFilter);

  const startIndex = (currentPage - 1) * 4;
  const endIndex = startIndex + 4;
  const pageDataSlice = finalizedList.slice(startIndex, endIndex);

  if (pageDataSlice.length === 0) {
    gridContainer.innerHTML = `<p class="no-results">No professional matches found for your filter criteria.</p>`;
    return;
  }

  gridContainer.innerHTML = pageDataSlice
    .map(
      (pro) => `
        <div class="pro-card">
            <div class="pro-image-wrapper">
                <img src="${pro.image}" alt="${pro.name}" class="pro-img">
                <div class="rating-badge"><span>⭐</span> ${pro.rating}</div>
            </div>
            <div class="pro-details-wrapper">
                <div>
                    <h3 class="pro-name">${pro.name}</h3>
                    <p class="pro-tags">${pro.tags}</p>
                    <p class="pro-desc">${pro.description}</p>
                </div>
                <div class="card-bottom-row">
                    <div class="price-box">
                        <p>Starting at</p>
                        <h4>${pro.rate}</h4>
                    </div>
                 <a href="#" class="view-profile-link" data-id="${pro.id}">View Profile</a>
                </div>
            </div>
        </div>
    `,
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const initialTrade =
    urlParams.get("trade_category") || urlParams.get("search");

  if (initialTrade && tradeSelect) {
    Array.from(tradeSelect.options).forEach((option) => {
      if (option.value.toLowerCase() === initialTrade.toLowerCase()) {
        tradeSelect.value = option.value;
      }
    });
  }

  renderCards();
  const filterForm =
    document.querySelector(".professionals-search form") ||
    document.querySelector(".Refine-Search-Class form");
  if (filterForm) {
    filterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      currentPage = 1;
      renderCards();
    });
  }
});

const pageNumbers = document.querySelectorAll(".page-num");

pageNumbers.forEach((button) => {
  button.addEventListener("click", () => {
    currentPage = parseInt(button.textContent.trim());

    renderCards();
    document.querySelector(".page-num.active")?.classList.remove("active");
    button.classList.add("active");
  });
});
// --- MODAL CONTROLLER HANDLER SETUP BLOCK ---

function initProfileModal() {
  const modal = document.getElementById("profile-modal");
  const closeBtn = document.getElementById("close-modal-btn");
  const cardsContainer = document.getElementById("cards-build");

  if (!modal || !cardsContainer) return;

  // 1. Listen for link clicks globally inside the parent cards container area
  cardsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-profile-link")) {
      e.preventDefault(); // Stop native link hashtag routing navigation behaviors

      const workerId = parseInt(e.target.getAttribute("data-id"));
      // Find the item matching the clicked ID inside your global data array list source
      const workerData = professionalsData.find((p) => p.id === workerId);

      if (workerData) {
        // Populating element parameters inside the hidden modal content markup blocks
        document.getElementById("modal-worker-img").src = workerData.image;
        document.getElementById("modal-worker-name").textContent =
          workerData.name;
        document.getElementById("modal-worker-tags").textContent =
          workerData.tags;
        document.getElementById("modal-worker-rating").textContent =
          workerData.rating;
        document.getElementById("modal-worker-desc").textContent =
          workerData.description;
        document.getElementById("modal-worker-rate").textContent =
          workerData.rate;

        // Remove hidden class properties layout visually to reveal the profile pop-up instantly
        modal.classList.remove("hidden");
      }
    }
  });

  // 2. Click handler triggers to toggle back visibility parameters when clicking the 'X' button
  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // 3. Close the profile screen automatically if clicking into black dark regions outside the window area container block boundaries
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });

  // 4. Connect transaction click notification triggers
  const payBtn = document.getElementById("pay-now-btn");
  if (payBtn) {
    payBtn.addEventListener("click", () => {
      alert(
        `Initiating Mobile Payment transaction sequence for worker profile booking assignment selection!`,
      );
    });
  }
}

// Ensure you run this initial hook setup inside your main page DOMContentLoaded block function statement
document.addEventListener("DOMContentLoaded", () => {
  // Keep your regular card execution runs here...
  initProfileModal();
});
