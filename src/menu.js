export function menuPage() {
  const content = document.querySelector("#content");
  const footer = document.querySelector("footer");

  const hero = document.createElement("div");
  hero.classList.add("hero", "menu");
  content.insertBefore(hero, footer);

  let itemDivs = [];
  let pictureDivs = [];
  let textDivs = [];
  let headerTexts = [];
  let paraTexts = [];

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
    headerTexts.push(headerText);

    const paraText = document.createElement("p");
    textDiv.appendChild(paraText);
    paraTexts.push(paraText);
  }

  headerTexts[0].textContent = "Paella";
  headerTexts[1].textContent = "Croquettes";
  headerTexts[2].textContent = "Gambas al pil pil";
  headerTexts[3].textContent = "Gazpacho";

  paraTexts[0].textContent =
    "Paella is regarded as one of the community's identifying symbols. It is one of the best-known dishes in Spanish cuisine. Paella is a classic Spanish rice dish made with rice, saffron, vegetables, chicken, and seafood cooked and served in one pan.";
  paraTexts[1].textContent =
    "Small fried rounds or cylinders of meat, fish, or vegetables are consumed on almost every continent in various forms.";
  paraTexts[2].textContent =
    "The history of Gambas Pil Pil is a little unclear, but it originates in either the Basque Country, Andalusia or Galicia. Made with fresh prawns cooked in oil infused with garlic and chilli and served with bread to soak up the delicious sauce.";
  paraTexts[3].textContent =
    "It originated in the southern regions of the Iberian peninsula and spread into other areas. Gazpacho is widely eaten in Spain and Portugal, particularly during hot summers, since it is refreshing and cool. Gazpacho is a cold soup and drink made of raw, blended vegetables.";

  console.log(headerTexts);
}
