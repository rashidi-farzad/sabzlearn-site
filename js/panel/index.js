import { getAdminInfos } from "./funcs/utils.js";
import {
  insertNotificationHtmlTemplate,
  seenNotification,
} from "./funcs/notificatios.js";

window.seenNotification = seenNotification;

window.addEventListener("load", () => {
  const adminWelcomeNameElem = document.querySelector("#admin-welcome-name");
  const adminNameElem = document.querySelector("#admin-name");
  const notificationsIconElem = document.querySelector("#notifications-icon");
  const notificationsBoxElem = document.querySelector(".home-notification-modal");

  getAdminInfos().then((admin) => {
    console.log(admin);
    // Protect Cms Routes
    if (admin.role === "ADMIN") {
      // Show Admin Name In Cms Homepage
      adminNameElem.innerHTML = admin.name;
      adminWelcomeNameElem.innerHTML = admin.name;
    } else {
      location.replace("../../login.html");
    }

    notificationsIconElem.addEventListener("mouseenter", () => {
      notificationsBoxElem.classList.add("active-modal-notfication");
    });

    notificationsBoxElem.addEventListener("mouseleave", () => {
      notificationsBoxElem.classList.remove("active-modal-notfication");
    });
    insertNotificationHtmlTemplate(admin.notifications);
  });
});
