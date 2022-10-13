import listTpl from "./list.hbs";
import menu from "./menu.json";

const refs = {
  list: document.querySelector(".js-menu"),
  checkBox: document.querySelector("#theme-switch-toggle"),
  body: document.querySelector("body"),
};

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

// розмітка
const createMenuCards = function (menu) {
  return menu.map(listTpl).join("");
};

const menuCards = createMenuCards(menu);
refs.list.insertAdjacentHTML("beforeend", menuCards);

// зміна теми
const onChangeTheme = function () {
  if (refs.checkBox.checked) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    localStorage.setItem("currentTheme", "dark-theme");
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
    localStorage.setItem("currentTheme", "light-theme");
  }
};

const savedCurrentTheme = function () {
  const theme = localStorage.getItem("currentTheme");
  if (theme === "dark-theme") {
    refs.body.classList.add(Theme.DARK);
    refs.checkBox.checked === true;
  }
};

refs.checkBox.addEventListener("change", onChangeTheme);
savedCurrentTheme();
