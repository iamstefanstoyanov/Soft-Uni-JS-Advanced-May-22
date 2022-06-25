window.addEventListener("load", solve);

function solve() {
  let makeEl = document.getElementById("make");
  let modelEl = document.getElementById("model");
  let prodYearEl = document.getElementById("year");
  let fuelEl = document.getElementById("fuel");
  let originalCostEl = document.getElementById("original-cost");
  let sellingPriceCostEl = document.getElementById("selling-price");
  let publishBtnEL = document.getElementById("publish");

  publishBtnEL.addEventListener("click", publish);
  let profit = 0;
  function publish(e) {
    e.preventDefault();
    let make = makeEl.value;
    let model = modelEl.value;
    let prodYear = prodYearEl.value;
    let fuel = fuelEl.value;
    let originalCost = originalCostEl.value;
    let sellingPrice = sellingPriceCostEl.value;
    if (
      make == "" ||
      model == "" ||
      Number(originalCost) >= Number(sellingPrice) ||
      prodYear == "" ||
      fuel == ""
    ) {
      return;
    }
    let tbodyEl = document.getElementById("table-body");

    let trEl = document.createElement("tr");
    trEl.classList.add("row");

    let tdEl1 = document.createElement("td");
    tdEl1.textContent = make;
    let tdEl2 = document.createElement("td");
    tdEl2.textContent = model;
    let tdEl3 = document.createElement("td");
    tdEl3.textContent = prodYear;
    let tdEl4 = document.createElement("td");
    tdEl4.textContent = fuel;
    let tdEl5 = document.createElement("td");
    tdEl5.textContent = originalCost;
    let tdEl6 = document.createElement("td");
    tdEl6.textContent = sellingPrice;

    let tdElBtns = document.createElement("td");

    let editBtnEL = document.createElement("button");
    editBtnEL.classList.add("action-btn");
    editBtnEL.classList.add("edit");
    editBtnEL.textContent = "Edit";
    editBtnEL.addEventListener("click", edit);

    let sellBtnEL = document.createElement("button");
    sellBtnEL.classList.add("action-btn");
    sellBtnEL.classList.add("sell");
    sellBtnEL.textContent = "Sell";
    sellBtnEL.addEventListener("click", sell);
    tdElBtns.appendChild(editBtnEL);
    tdElBtns.appendChild(sellBtnEL);

    trEl.appendChild(tdEl1);
    trEl.appendChild(tdEl2);
    trEl.appendChild(tdEl3);
    trEl.appendChild(tdEl4);
    trEl.appendChild(tdEl5);
    trEl.appendChild(tdEl6);
    trEl.appendChild(tdElBtns);

    tbodyEl.appendChild(trEl);
    makeEl.value = "";
    modelEl.value = "";
    prodYearEl.value = "";
    fuelEl.value = "";
    originalCostEl.value = "";
    sellingPriceCostEl.value = "";

    function sell() {
      let carsListEl = document.getElementById("cars-list");
      let liEl = document.createElement("li");
      liEl.classList.add("each-list");
      let span1el = document.createElement("span");
      span1el.textContent = make + " " + model;
      let span2el = document.createElement("span");
      span2el.textContent = prodYear;
      let span3el = document.createElement("span");
      span3el.textContent = Number(sellingPrice) - Number(originalCost);

      liEl.appendChild(span1el);
      liEl.appendChild(span2el);
      liEl.appendChild(span3el);
      carsListEl.appendChild(liEl);
      trEl.remove();
      let profitEl = document.getElementById("profit");
      profit += Number(sellingPrice) - Number(originalCost);
      profitEl.textContent = profit.toFixed(2);
    }
    function edit() {
      makeEl.value = make;
      modelEl.value = model;
      prodYearEl.value = prodYear;
      fuelEl.value = fuel;
      originalCostEl.value = originalCost;
      sellingPriceCostEl.value = sellingPrice;
      trEl.remove();
    }
  }
}
