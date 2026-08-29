const tradeSelect = document.getElementById("trade-filter");
const minPriceInput = document.getElementById("minprice");
const maxPriceInput = document.getElementById("maxprice");

function getCombinedFilteredData(selectedRating = null) {
  const urlParams = new URLSearchParams(window.location.search);
  const textSearchQuery = urlParams.get("search")
    ? urlParams.get("search").toLowerCase().trim()
    : "";
  const urlTradeCategory = urlParams.get("trade_category")
    ? urlParams.get("trade_category").toLowerCase().trim()
    : "";

  const chosenSidebarTrade = tradeSelect ? tradeSelect.value.toLowerCase() : "";
  const minPrice =
    minPriceInput && minPriceInput.value ? parseFloat(minPriceInput.value) : 0;
  const maxPrice =
    maxPriceInput && maxPriceInput.value
      ? parseFloat(maxPriceInput.value)
      : Infinity;

  return professionalsData.filter((pro) => {
    let matchesTextSearch = true;
    if (textSearchQuery) {
      matchesTextSearch =
        pro.name.toLowerCase().includes(textSearchQuery) ||
        pro.tags.toLowerCase().includes(textSearchQuery);
    }

    let matchesTrade = true;
    let activeTradeFilter = chosenSidebarTrade;

    if (
      (!activeTradeFilter || activeTradeFilter === "choose trade...") &&
      urlTradeCategory
    ) {
      activeTradeFilter = urlTradeCategory;
    }

    if (activeTradeFilter && activeTradeFilter !== "choose trade...") {
      matchesTrade =
        pro.tags.toLowerCase().includes(activeTradeFilter) ||
        (pro.trade && pro.trade.toLowerCase() === activeTradeFilter);
    }

    const numericalRate = parseFloat(pro.rate.replace(/[^0-9]/g, ""));
    const matchesPrice = numericalRate >= minPrice && numericalRate <= maxPrice;

    let matchesRating = true;
    if (selectedRating) {
      matchesRating = parseFloat(pro.rating) >= selectedRating;
    }

    return matchesTextSearch && matchesTrade && matchesPrice && matchesRating;
  });
}
