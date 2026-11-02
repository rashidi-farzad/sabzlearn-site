import {
  getAndShowAllDiscountCodes,
  prepareCreateNewDiscountCode,
  createDiscountCode,
} from "./funcs/discounts.js";
window.addEventListener("load", () => {
  const createDiscountBtnElem = document.querySelector("#create-discount");
  getAndShowAllDiscountCodes();
  createDiscountBtnElem.addEventListener("click", (event) => {
    event.preventDefault();
    createDiscountCode();
  });
  prepareCreateNewDiscountCode();
});
