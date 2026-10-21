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
        swal({
          title: "ثبت نام با موفقیت انجام شد",
          icon: "success",
          buttons: "ورود به پنل کاربری",
        });
      } else if (res.status === 409) {
        swal({
          title: "نام کاربری یا ایمیل قبلا استفاده شده",
          icon: "error",
          buttons: "تصحیح اطلاعات",
        });
      }
      return res.json();
    })
    .then((result) => console.log(result));
};

export { register };
