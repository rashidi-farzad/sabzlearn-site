import { getMe } from "./funcs/auth.js";
import { showUsernameInNavbar, renderTopbarMenus } from "./funcs/shared.js";
window.addEventListener("load", () => {
  showUsernameInNavbar();
  renderTopbarMenus();
});
