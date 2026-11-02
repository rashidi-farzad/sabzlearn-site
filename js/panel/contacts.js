import {
  getAndShowAllContacts,
  showContactBody,
  answerToContacts,
  removeContact,
} from "./funcs/contacts.js";
window.showContactBody = showContactBody;
window.answerToContacts = answerToContacts;
window.removeContact = removeContact;
window.addEventListener("load", () => {
  getAndShowAllContacts();
});
