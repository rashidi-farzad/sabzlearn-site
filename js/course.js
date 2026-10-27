import {
  getCourseDetails,
  getAndShowRelatedCourses,
  submitComment,
} from "./funcs/shared.js";

window.addEventListener("load", () => {
  const commentsRespondBtn = document.querySelector(".comments__respond-btn");
  getCourseDetails();
  getAndShowRelatedCourses();
  commentsRespondBtn.addEventListener("click", submitComment);
});
