import { showSwal, saveIntoLocalStorage, getToken } from "./utils.js";
const register = () => {
  const name = document.querySelector("#name");
  const username = document.querySelector("#username");
  const email = document.querySelector("#email");
  const phone = document.querySelector("#phone");
  const password = document.querySelector("#password");

  const newUser = {
    name: name.value,
    username: username.value,
    email: email.value,
    phone: phone.value,
    password: password.value,
    confirmPassword: password.value,
  };
  fetch("http://localhost:4000/v1/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
    .then((res) => {
      if (res.status === 201) {
        showSwal(
          "ثبت نام با موفقیت انجام شد",
          "success",
          "ورود به پنل",
          (result) => {
            location.href = "index.html";
          },
        );
      } else if (res.status === 409) {
        showSwal(
          "نام کاربری یا ایمیل قبلا استفاده شده",
          "error",
          "تصحیح اطلاعات",
          () => {},
        );
      }
      return res.json();
    })
    .then((result) => {
      saveIntoLocalStorage("user", { token: result.accessToken });
    });
};
const login = () => {
  const identifierInput = document.querySelector("#identifier");
  const passwordInput = document.querySelector("#password");
  const userInfos = {
    identifier: identifierInput.value,
    password: passwordInput.value,
  };
  fetch("http://localhost:4000/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfos),
  })
    .then((res) => {
      if (res.status === 401) {
        showSwal(
          "کاربری با این اطلاعات یافت نشد",
          "error",
          "تصحیح اطلاعات",
          () => {},
        );
      } else if (res.status === 200) {
        showSwal("با موفقیت وارد شدید", "success", "ورود به پنل", () => {
          location.href = "index.html";
        });
      }
      return res.json();
    })
    .then((result) => {
      console.log(result);
      saveIntoLocalStorage("user", { token: result.accessToken });
    });
};
const getMe = async () => {
  const token = getToken();
  if (!token) {
    return false;
  }
  const res = await fetch("http://localhost:4000/v1/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};
export { register, login, getMe };
