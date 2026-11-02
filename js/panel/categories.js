import {
  getAndShowAllCategories,
  removeCategory,
  createNewCategory,
} from "./funcs/categories.js";
window.removeCategory = removeCategory;
window.addEventListener("load", () => {
  const createCategoryBtn = document.querySelector("#create-category");
  createCategoryBtn.addEventListener("click", (event) => {
    event.preventDefault();
    createNewCategory();
  });
  getAndShowAllCategories();
});
