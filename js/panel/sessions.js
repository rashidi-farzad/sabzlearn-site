import {
  getAndShowAllSessions,
  prepareCreateNewSessionForm,
  createSession,
  removeSession,
} from "./funcs/sessions.js";
window.removeSession = removeSession;
window.addEventListener("load", () => {
  const createSessionBtn = document.querySelector("#create-session");
  prepareCreateNewSessionForm();
  getAndShowAllSessions();
  createSessionBtn.addEventListener("click", (event) => {
    event.preventDefault();
    createSession();
  });
});
