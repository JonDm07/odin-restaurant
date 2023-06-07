export function contactPage() {
  const content = document.querySelector("#content");
  const footer = document.querySelector("footer");

  const hero = document.createElement("div");
  hero.classList.add("hero", "contact");
  content.insertBefore(hero, footer);

  let paraTextArray = [];

  for (let i = 0; i < 4; i++) {
    const div = document.createElement("div");
    div.classList.add("contact-div");
    hero.appendChild(div);

    const h3 = document.createElement("h3");
    div.appendChild(h3);
    h3.textContent = `Random Person ${i + 1}`;

    const paraText = document.createElement("p");
    div.appendChild(paraText);
    paraTextArray.push(paraText);

    const anotherText = document.createElement("p");
    div.appendChild(anotherText);
    anotherText.textContent = `Random Adress ${i + 1}`;
  }
  paraTextArray[0].textContent = "Phone number: +34 722220826";
  paraTextArray[1].textContent = "Phone number: +34 787526484";
  paraTextArray[2].textContent = "Phone number: +34 761584814";
  paraTextArray[3].textContent = "Phone number: +34 761215486";
}
