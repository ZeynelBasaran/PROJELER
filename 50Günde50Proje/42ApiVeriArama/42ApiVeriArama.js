const list = document.querySelector(`.list`)
const inputs = document.querySelector(`#inp`)
const listItem = []

const API_URL = "https://randomuser.me/api/?results=100"
fetch(API_URL)
    .then(res => res.json())//Dosyayı json formatına döndürüyoruz.
    .then(
        data => createElement(data)

    )//then ile sonucu yakalıyoruz.

function createElement(data) {

    for (let i = 0; i < data.results.length; i++) {
        let divDom = document.createElement("div")
        divDom.classList = "person"

        divDom.innerHTML = `
            <img src="${data.results[i].picture.large}" alt="">
            <div>
            <h3 class="name">${data.results[i].name.first + " " + data.results[i].name.last}</h3>
            <span>${data.results[i].location.city},${data.results[i].location.country}</span>
            </div>
        
        `
        list.appendChild(divDom)
        listItem.push(divDom)


    }

}


inputs.addEventListener("input", (e) => filterDate(e.target.value))
function filterDate(searchTerm) {
    listItem.forEach(item => {
        console.log(item.innerText.toLowerCase().includes(searchTerm.toLowerCase()))
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove("hide")
        }else{
            item.classList.add("hide")
        }
    })
}

/*
//Benim kullandıgım metod üstteki metod daha iyi komple metni arıyor benimki ise direkt name kısmını arıyor.
inputs.addEventListener("input", (e) => {
    let searchval = e.target.value.toUpperCase()
    const persons = document.querySelectorAll(`.name`)
    for (let i = 0; i < persons.length; i++) {
        
        if (persons[i].innerText.toLocaleUpperCase().indexOf(searchval) > -1) {
            persons[i].parentElement.parentElement.style.display = ""
        } else {
           
            persons[i].parentElement.parentElement.style.display = "none"
        }
        
    }

})
*/



