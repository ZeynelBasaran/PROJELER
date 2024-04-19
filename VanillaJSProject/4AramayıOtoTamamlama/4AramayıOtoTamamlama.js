//Döngü içerisinde daha önce oluşturulan elementi silmiyor düzeltilmesi lazım

fetch("/VanillaJSProject/4AramayıOtoTamamlama/state_capitals.json").then(
    response => response.json()
).then(responseJson => {

    responseJson.forEach(element => {

        searchİnp(element)
        

    })
})

function searchİnp(element) {

    const input = document.querySelector(`#inputs`);
    input.addEventListener("keyup", (den) => {
        const keyup = den.target.value.toUpperCase()

        if (element.name.toUpperCase().indexOf(keyup) > -1) {
            createElement(element)
        } else {
            deleteElement(element)
        }
    }
    )

}

function createElement(element) {

    const bar = document.querySelector(`.bar`)
    const li = document.createElement(`li`);

    li.classList = `lidom ${element.abbr}`;
    li.innerHTML = `
    <b>${element.name}</b>
    <div class="bardiv">
        <span><b>Abbr: </b>${element.abbr}</span>
        <span><b>Capital: </b>${element.capital}</span>
       
        <span><b>Lat: </b>${element.lat}</span>
    
    `
    bar.appendChild(li)
}
function deleteElement(element) {
    let del = document.querySelectorAll(`.${element.abbr}`);
    del.forEach((deletee) => {
        deletee.style.display = "none";
    })

}
/*
let bar = document.querySelector(`.bar`);
bar.innerHTML = "";*/










