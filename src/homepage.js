const restaurantName = "Random restaurant name";
const paraText = "Random restaurant invitation and description text";

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
  hero.classList.add("hero", "home");
  content.appendChild(hero);

  const heroHeader = document.createElement("h1");
  heroHeader.textContent = restaurantName;
  hero.appendChild(heroHeader);

  const heroImageDiv = document.createElement("div");
  heroImageDiv.classList.add("image-div");
  hero.appendChild(heroImageDiv);
  heroImageDiv.textContent = "Random restaurant image";

  const aboutPara = document.createElement("p");
  aboutPara.textContent = paraText;
  hero.appendChild(aboutPara);

  const footer = document.createElement("footer");
  content.appendChild(footer);
}

export function homePageSwitch() {
  const content = document.querySelector("#content");
  const footer = document.querySelector("footer");

  const hero = document.createElement("div");
  hero.classList.add("hero", "home");
  content.insertBefore(hero, footer);

  const heroHeader = document.createElement("h1");
  heroHeader.textContent = restaurantName;
  hero.appendChild(heroHeader);

  const heroImageDiv = document.createElement("div");
  heroImageDiv.classList.add("image-div");
  hero.appendChild(heroImageDiv);
  heroImageDiv.textContent = "Random restaurant image";

  const aboutPara = document.createElement("p");
  aboutPara.textContent = paraText;
  hero.appendChild(aboutPara);
}
