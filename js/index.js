import { getAndShowAllCourses } from "./funcs/shared.js";
const $ = document;
const landingTitle = $.querySelector(".landing__title");
const landingCoursesCount = $.querySelector("#courses-count");
const membersCount = $.querySelector("#members-count");
const coursesTime = $.querySelector("#courses-time");
window.addEventListener("load", () => {
  let landingText = "ما به هر قیمتی دوره آموزشی تولید نمی کنیم !";
  let typeIndex = 0;

  typeWriter(landingText, typeIndex);
  counterElem(40, landingCoursesCount);
  counterElem(31_071, membersCount);
  counterElem(31_320, coursesTime);
  getAndShowAllCourses().then((data) => console.log(data));
});

function typeWriter(text, index) {
  if (index < text.length) {
    landingTitle.textContent += text[index];
    index++;

    setTimeout(() => {
      typeWriter(text, index);
    }, 100);
  }
}
function counterElem(max, elem) {
  let counter = 0;
  const interval = setInterval(() => {
    if (counter === max) {
      clearInterval(interval);
    }
    elem.textContent = counter;
    counter++;
  }, 0.001);
}
