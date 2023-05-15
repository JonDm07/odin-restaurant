export function homepage() {
  const content = document.querySelector("#content");
  const header = document.createElement("header");

  content.appendChild(header);

  let anchors = [];

  for (let i = 0; i < 3; i++) {
    const button = document.createElement("button");
    const anchor = document.createElement("a");
    header.appendChild(button);
    button.appendChild(anchor);
    anchors.push(anchor);
  }

  anchors[0].textContent = "Home";
  anchors[1].textContent = "About";
  anchors[2].textContent = "Contact";

  const hero = document.createElement("div");
  hero.classList.add("hero");
  content.appendChild(hero);

  const heroHeader = document.createElement("h1");
  heroHeader.textContent = "Custodia Cajigas";
  hero.appendChild(heroHeader);
}
