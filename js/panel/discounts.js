import {
  getAndShowAllDiscountCodes,
  prepareCreateNewDiscountCode,
  createDiscountCode,
  removeDiscounCode,
} from "./funcs/discounts.js";
window.removeDiscounCode = removeDiscounCode;
window.addEventListener("load", () => {
  const createDiscountBtnElem = document.querySelector("#create-discount");
  getAndShowAllDiscountCodes();
  prepareCreateNewDiscountCode();
  createDiscountBtnElem.addEventListener("click", (event) => {
    event.preventDefault();
    createDiscountCode();
  });
});
