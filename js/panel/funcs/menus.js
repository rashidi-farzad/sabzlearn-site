import { getToken, showSwal } from "./../../funcs/utils.js";
let parentMenuID = undefined;
const getAndShowAllMenus = async () => {
  const menusWrapperElem = document.querySelector(".table tbody");
  menusWrapperElem.innerHTML = "";
  const res = await fetch(`http://localhost:4000/v1/menus/all`);
  const menus = await res.json();
  menus.forEach((menu, index) => {
    menusWrapperElem.insertAdjacentHTML(
      "beforeend",
      `
        <tr>
           <td>${index + 1}</td> 
           <td>${menu.title}</td>
           <td><a href="#">${menu.href}</a></td>
           <td>
           ${menu.parent ? menu.parent.title : "--"}
           </td>
           <td>
             <button type="button" class="btn btn-primary edit-btn">
               ویرایش
             </button>
           </td>
           <td>
             <button type="button" onclick="removeMenu('${menu._id}')" class="btn btn-danger delete-btn">
               حذف
             </button>
           </td>
        </tr>
        `,
    );
  });
  return menus;
};
const prepareCreateMenuForm = async () => {
  const parentMenusElem = document.querySelector("#parent-menus");
  parentMenusElem.addEventListener("change", (event) => {
    parentMenuID = event.target.value;
  });
  const res = await fetch(`http://localhost:4000/v1/menus`);
  const menus = await res.json();
  menus.forEach((menu) => {
    parentMenusElem.insertAdjacentHTML(
      "beforeend",
      `
        <option value=${menu._id}>${menu.title}</option>
        `,
    );
  });
};
const createNewMenu = async () => {
  const titleInputElem = document.querySelector("#title");
  const hrefInputElem = document.querySelector("#href");

  const newMenusInfos = {
    title: titleInputElem.value.trim(),
    href: hrefInputElem.value.trim(),
    parent: parentMenuID,
  };

  const res = await fetch(`http://localhost:4000/v1/menus`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newMenusInfos),
  });
  if (res.ok) {
    showSwal("منوی جدید با موفقیت ساخته شد", "success", "تایید", () => {
      getAndShowAllMenus();
    });
  }
};
const removeMenu = async (menuID) => {
  showSwal(
    "آیا از حذف دوره اطمینان دارید؟",
    "warning",
    ["خیر", "بله"],
    async (result) => {
      if (result) {
        const res = await fetch(`http://localhost:4000/v1/menus/${menuID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        });
        if (res.ok) {
          showSwal("دوره با موفقیت حذف شد", "success", "تایید", () => {
            getAndShowAllMenus();
          });
        }
      }
    },
  );
};
export { getAndShowAllMenus, prepareCreateMenuForm, createNewMenu, removeMenu };
