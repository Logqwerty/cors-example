const $ = (sel, el = document) => el.querySelector(sel);
const map = () => {};

const result = $("#result");
const reqBtn = $("#request-btn");
const loginBtn = $("#login-btn");

loginBtn.addEventListener("click", (e) => {
  fetch("http://localhost:9000/login", {
    credentials: "include",
  });
});

reqBtn.addEventListener("click", (e) => {
  fetch("http://localhost:9000/api/menus", {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  })
    .then((res) => res.json())
    .then((menus) => (console.log(menus), menus))
    .then((menus) => (result.innerHTML = JSON.stringify(menus)))
    .catch((err) => console.error(err.message));
});
