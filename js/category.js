import {
  getAndShowCategoryCourses,
  insertCourseBoxHtmlTemplate,
  coursesSorting,
} from "./funcs/shared.js";
import { searchInArray } from "./funcs/utils.js";
window.addEventListener("load", () => {
  getAndShowCategoryCourses().then((responseCourses) => {
    let courses = [...responseCourses];
    let coursesShowType = "row";
    const coursesShowTypeIcons = document.querySelectorAll(
      ".courses-top-bar__icon-parent",
    );
    const categoryCoursesWrapper = document.querySelector(
      "#category-courses-wrapper",
    );
    const coursesSearchInput = document.querySelector(
      ".courses-top-bar__input",
    );
    // Show Category Courses By row showType
    if (courses.length) {
      insertCourseBoxHtmlTemplate(
        courses,
        coursesShowType,
        categoryCoursesWrapper,
      );
    } else {
      categoryCoursesWrapper.insertAdjacentHTML(
        "beforeend",
        `
              <div class="alert alert-danger">هیچ دوره‌ای برای این دسته بندی وجود ندارد :/</div>
            `,
      );
    }

    coursesShowTypeIcons.forEach((coursesShowTypeIcon) => {
      coursesShowTypeIcon.addEventListener("click", (event) => {
        coursesShowTypeIcons.forEach((icon) =>
          icon.classList.remove("courses-top-bar__icon--active"),
        );
        event.currentTarget.classList.add("courses-top-bar__icon--active");

        if (String(event.currentTarget.className).includes("row")) {
          coursesShowType = "row";
          insertCourseBoxHtmlTemplate(
            courses,
            coursesShowType,
            categoryCoursesWrapper,
          );
        } else {
          coursesShowType = "column";
          insertCourseBoxHtmlTemplate(
            courses,
            coursesShowType,
            categoryCoursesWrapper,
          );
        }
      });
    });
    //   Sort By User Selection Type
    const coursesTopBarSelectionItem = document.querySelectorAll(
      ".courses-top-bar__selection-item",
    );
    const coursesTopBarSelectionTitle = document.querySelector(
      ".courses-top-bar__selection-title",
    );
    coursesTopBarSelectionItem.forEach((selectionItem) => {
      selectionItem.addEventListener("click", (event) => {
        coursesTopBarSelectionItem.forEach((selectionElem) => {
          selectionElem.classList.remove(
            "courses-top-bar__selection-item--active",
          );
        });
        event.currentTarget.classList.add(
          "courses-top-bar__selection-item--active",
        );
        coursesTopBarSelectionTitle.innerHTML = "";
        coursesTopBarSelectionTitle.insertAdjacentHTML(
          "beforeend",
          `
            ${event.currentTarget.innerHTML}
            <i class="fas fa-angle-down courses-top-bar__selection-icon"></i>
            `,
        );
        let userFilteringSelection = event.target.dataset.key;
        let shownCourses = coursesSorting([...courses], userFilteringSelection);
        insertCourseBoxHtmlTemplate(
          shownCourses,
          coursesShowType,
          categoryCoursesWrapper,
        );
      });
    });
    // Handle Search In Courses
    coursesSearchInput.addEventListener("input", (event) => {
      const shownCourses = searchInArray(
        [...responseCourses],
        "name",
        event.target.value,
      );
      if (shownCourses.length) {
        insertCourseBoxHtmlTemplate(
          shownCourses,
          coursesShowType,
          categoryCoursesWrapper,
        );
      } else {
        categoryCoursesWrapper.innerHTML = "";
        categoryCoursesWrapper.insertAdjacentHTML(
          "beforeend",
          `
          <div class="alert alert-danger">هیچ دوره‌ای برای جستجوی شما وجود ندارد :/</div>
          `,
        );
      }
    });
  });
});
