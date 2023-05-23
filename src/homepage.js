export function initialHomePage() {
  const content = document.querySelector("#content");
  const header = document.createElement("header");

  content.appendChild(header);

  let btns = [];

  for (let i = 0; i < 3; i++) {
    const button = document.createElement("button");
    button.classList.add("header-buttons");
    header.appendChild(button);
    btns.push(button);
  }

  btns[0].textContent = "Home";
  btns[1].textContent = "Menu";
  btns[2].textContent = "Contact";

  const hero = document.createElement("div");
  hero.classList.add("hero");
  content.appendChild(hero);

  const heroHeader = document.createElement("h1");
  heroHeader.textContent = "Custodia Cajigas";
  hero.appendChild(heroHeader);

  const heroImageDiv = document.createElement("div");
  heroImageDiv.classList.add("image-div");
  hero.appendChild(heroImageDiv);

  const aboutPara = document.createElement("p");
  aboutPara.textContent =
    "Renowed restaurant in the center of Granada, In bussines from 1919. We cook traditional spanish meals like Gazpacho, Paella, Croquetas and many more";
  hero.appendChild(aboutPara);

  const footer = document.createElement("footer");
  content.appendChild(footer);
}

export function homePageSwitch() {
  const content = document.querySelector("#content");
  const footer = document.querySelector("footer");

  const hero = document.createElement("div");
  hero.classList.add("hero");
  content.insertBefore(hero, footer);

  const heroHeader = document.createElement("h1");
  heroHeader.textContent = "Custodia Cajigas";
  hero.appendChild(heroHeader);

  const heroImageDiv = document.createElement("div");
  heroImageDiv.classList.add("image-div");
  hero.appendChild(heroImageDiv);

  const aboutPara = document.createElement("p");
  aboutPara.textContent =
    "Renowed restaurant in the center of Granada, In bussines from 1919. We cook traditional spanish meals like Gazpacho, Paella, Croquetas and many more";
  hero.appendChild(aboutPara);
}
