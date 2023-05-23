import { initialHomePage, homePageSwitch } from "./homepage";
import { menuPage } from "./menu";

initialHomePage();

const btns = document.querySelectorAll(".header-buttons");

btns[0].addEventListener("click", () => {
  const hero = document.querySelector(".hero");
  hero.remove();

  homePageSwitch();
});

btns[1].addEventListener("click", () => {
  const hero = document.querySelector(".hero");
  hero.remove();

  menuPage();
});
