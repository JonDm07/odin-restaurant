export function contactPage() {
    const content = document.querySelector("#content");
    const footer = document.querySelector("footer");

    const hero = document.createElement("div");
    hero.classList.add("hero", "contact");
    content.insertBefore(hero, footer);

    let divsArray =  []
    let h3Array = []
    let paraTextArray = []

    for(let i = 0; i < 4; i++) {
        const div = document.createElement('div')
        div.classList.add('contact-div')
        hero.appendChild(div)
        divsArray.push(div)

        const h3 = document.createElement('h3')
        div.appendChild(h3)
        h3Array.push(h3)

        const paraText = document.createElement('p')
        div.appendChild(paraText)
        paraTextArray.push(paraText)
    }

    h3Array[0].textContent = 'Hello Nicole!'
    h3Array[1].textContent = '!Hola Nicole!'
    h3Array[2].textContent = 'Hello Alejandra!'
    h3Array[3].textContent = 'Hola Alejandra!'

    paraTextArray[0].textContent = 'Phone number: +34 722220826'
    paraTextArray[1].textContent = 'Phone number: +34 787526484'
    paraTextArray[2].textContent = 'Phone number: +34 761584814'
    paraTextArray[3].textContent = 'Phone number: +34 761215486'


}