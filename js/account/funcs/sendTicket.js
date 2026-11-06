import { getToken } from "./../../funcs/utils.js";
const prepareSendTicketForm = async () => {
  const ticketsDepartmentsWrapper = document.querySelector("#departments");
  const res = await fetch(`http://localhost:4000/v1/tickets/departments`);
  const departments = await res.json();
};
export { prepareSendTicketForm };
