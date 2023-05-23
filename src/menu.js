export function menuPage() {
  const content = document.querySelector("#content");
  const footer = document.querySelector("footer");

  const hero = document.createElement("div");
  hero.classList.add("hero", "menu");
  content.insertBefore(hero, footer);

  let itemDivs = [];
  let pictureDivs = [];
  let textDivs = [];

  for (let i = 0; i < 4; i++) {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item-div");
    hero.appendChild(itemDiv);
    itemDivs.push(itemDiv);

    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container-div");
    itemDiv.appendChild(containerDiv);

    const pictureDiv = document.createElement("div");
    pictureDiv.classList.add("picture-div");
    containerDiv.appendChild(pictureDiv);
    pictureDivs.push(pictureDiv);

    const textDiv = document.createElement("div");
    textDiv.classList.add("text-div");
    containerDiv.appendChild(textDiv);
    textDivs.push(textDiv);

    const headerText = document.createElement("h2");
    textDiv.appendChild(headerText);
  }
}
