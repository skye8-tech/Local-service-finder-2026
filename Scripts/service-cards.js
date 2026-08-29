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
                    <a href="#" class="view-profile-link">View Profile</a>
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
