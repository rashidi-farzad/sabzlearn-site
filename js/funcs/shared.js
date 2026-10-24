import { getMe } from "./auth.js";
import { isLogin } from "./utils.js";
const showUsernameInNavbar = () => {
  const navbarProfileBox = document.querySelector(".main-header__profile");
  const isUserLogin = isLogin();
  if (isUserLogin) {
    const userInfos = getMe().then((data) => {
      navbarProfileBox.setAttribute("href", "index.html");
      navbarProfileBox.innerHTML = `<span class="main-header__profile-text">${data.name}</span>`;
    });
  } else {
    navbarProfileBox.setAttribute("href", "login.html");
    navbarProfileBox.innerHTML = `<span class="main-header__profile-text">ورود | ثبت نام</span>`;
  }
};
const renderTopbarMenus = async () => {
  const topbarMenu = document.querySelector(".top-bar__menu");

  const res = await fetch("http://localhost:4000/v1/menus/topbar");
  const menus = await res.json();

  topbarMenu.innerHTML = "";
  const shuffledMenus = menus.sort((a, b) => 0.5 - Math.random());
  shuffledMenus.slice(0, 6).map((menu) => {
    topbarMenu.innerHTML += `
      <li class="top-bar__item">
        <a href="#" class="top-bar__link">${menu.title}</a>
      </li>
    `;
  });
};
export { showUsernameInNavbar, renderTopbarMenus };
