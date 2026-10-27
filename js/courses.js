import {
  showAllCoursesInCoursesPage,
  insertCourseBoxHtmlTemplate,
} from "./funcs/shared.js";
import { getUrlParam, paginateItems, addParamToUrl } from "./funcs/utils.js";
window.addParamToUrl = addParamToUrl;
window.addEventListener("load", () => {
  showAllCoursesInCoursesPage().then((courses) => {
    const coursesPagination = document.querySelector("#courses-pagination");
    const coursesPaginationWrapperElem =
      document.querySelector("#courses-wrapper");
    const currentPage = getUrlParam("page");
    let shownCourses = paginateItems(
      [...courses],
      3,
      coursesPagination,
      currentPage,
    );
    insertCourseBoxHtmlTemplate(
      [...shownCourses],
      "row",
      coursesPaginationWrapperElem,
    );
  });
});
