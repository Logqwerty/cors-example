const $ = (sel, el = document) => el.querySelector(sel);
const map = () => {};

const result = $("#result");
const reqBtn = $("#request-btn");

reqBtn.addEventListener("click", (e) => {
  fetch("http://localhost:9000/api/menus")
    .then((res) => res.json())
    .then((munus) => (console.log(munus), menus))
    .then((menus) => (result.innerHTML = JSON.stringify(menus)))
    .catch((err) => console.error(err.message));
});
