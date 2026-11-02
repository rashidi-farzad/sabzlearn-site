import { showSwal, getToken } from "./../../funcs/utils.js";
const getAndShowAllContacts = async () => {
  const contactsListTableElem = document.querySelector(".table tbody");
  contactsListTableElem.innerHTML = "";
  const res = await fetch(`http://localhost:4000/v1/contact`);
  const contacts = await res.json();
  contacts.forEach((contact, index) => {
    contactsListTableElem.insertAdjacentHTML(
      "beforeend",
      `
    <tr>
          <td class="${contact.answer === 1 ? "answer-contact" : "not-answer-contact"}">${index + 1}</td>
          <td>${contact.name}</td>
          <td>${contact.email}</td>
          <td>${contact.phone}</td>
          <td>${contact.createdAt.slice(0, 10)}</td>
            <td>
              <button type="button" onclick="showContactBody('${contact.body}')" class="btn btn-success edit-btn">
                مشاهده
              </button>
            </td>
            <td>
              <button type="button" onclick="answerToContacts('${contact.email}')" class="btn btn-primary edit-btn">
                پاسخ
              </button>
            </td>
            <td>
              <button type="button" class="btn btn-warning edit-btn">
                ویرایش
              </button>
            </td>
            <td>
              <button type="button" onclick="removeContact('${contact._id}')" class="btn btn-danger delete-btn">
                حذف
              </button>
            </td>
        </tr>
        `,
    );
    console.log(contact);
  });
};
const showContactBody = (body) => {
  showSwal(body, undefined, "مشاهده شد", () => {});
};
const answerToContacts = async (userEmail) => {
  swal({
    title: "متن پاسخ را وارد نمایید",
    content: "input",
    button: "ثبت پاسخ",
  }).then(async (result) => {
    if (result) {
      const contactAnswerInfos = {
        email: userEmail,
        answer: result,
      };
      const res = await fetch(`http://localhost:4000/v1/contact/answer`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${getToken()}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactAnswerInfos),
      });
      if (res.ok) {
        showSwal("پاسخ شما با موفقیت ارسال شد", "success", "تایید", () => {
          getAndShowAllContacts();
        });
      }
    }
  });
};
const removeContact = async (contactID) => {
  showSwal(
    "آیا از حذف پیام مورد نظر اطمینان دارید؟",
    "warning",
    ["خیر", "بله"],
    async (result) => {
      if (result) {
        const res = await fetch(
          `http://localhost:4000/v1/contact/${contactID}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${getToken()}`,
            },
          },
        );
        if (res.ok) {
          showSwal("پیام مورد نظر با موفقیت حذف شد", "success", "تایید", () => {
            getAndShowAllContacts();
          });
        }
      }
    },
  );
};
export {
  getAndShowAllContacts,
  showContactBody,
  answerToContacts,
  removeContact,
};
