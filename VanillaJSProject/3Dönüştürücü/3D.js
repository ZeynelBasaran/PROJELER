const input = document.querySelector(`#input`);
const gram = document.querySelector(`.gram`)
const kg = document.querySelector(`.kg`)
const ounces = document.querySelector(`.ounces`)

input.addEventListener("input", () => {
    let deger = Number(input.value)
    if (deger) {
        gram.innerHTML = `<h3>Grams</h3> <p>${deger * 1}</p>`
        kg.innerHTML = `<h3>KG</h3> <p>${deger * 2}</p>`
        ounces.innerHTML = `<h3>Ounces</h3> <p>${deger * 3}</p>`;
        gram.style.visibility= "visible"
        kg.style.visibility= "visible"
        ounces.style.visibility= "visible"

    } else {
        alert("Lütfen bir rakam giriniz !!")
    }
})