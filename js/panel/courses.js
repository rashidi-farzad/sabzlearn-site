import {
  createNewCourse,
  getAllCourses,
  prepareCreateCourseForm,
  removeCourses,
} from "./funcs/courses.js";
window.removeCourses = removeCourses;
window.addEventListener("load", () => {
  const createCourseBtn = document.querySelector("#create-course-btn");

  getAllCourses();
  prepareCreateCourseForm();

  createCourseBtn.addEventListener("click", (event) => {
    event.preventDefault();
    createNewCourse();
  });
});
