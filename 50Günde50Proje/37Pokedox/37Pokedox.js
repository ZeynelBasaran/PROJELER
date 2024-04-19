const main = document.querySelector(`main`)
const pokemon_count = 500

const colors = {
    fire:"#fddfdf",
    grass:"#defde0",
    electric:"#fcf7de",
    water:"#def3fd",
    ground:"#f4e7da",
    rock:"#d5d5d4",
    fairy:"#fceaff",
    poison:"#98d7a5",
    bug:"#f8d5a3",
    dragon:"#97b3e6",
    psychic:"#eaeda1",
    flying:"#f5f5f5",
    fighting:"#eaeda1",
    normal:"#f5f5f5"

}


const fetchPokemons = async () => {
    for (let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createCard(data)

}

fetchPokemons()

function createCard(data) {
    const divDom = document.createElement("div")
    divDom.classList.add("card", `${data.types[0].type.name}`)
    
    const color= colors[data.types[0].type.name]
    console.log(color)
    divDom.style.backgroundColor = color

    const numbers = data.id
    if (numbers < 10) {
        numb = "00" + numbers
    }else if(numbers>9 && numbers<100){
        numb = "0" + numbers 
    }else if (numbers>100){
        numb = numbers
    }
    

    divDom.innerHTML = `
    <div class="image"> 
        <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${numb}.png" alt="">
    </div>

    <div class="info"> 
        <span class="number">#${numb}</span>
        <h3 class="name">${data.name}</h3>
        <small class="type">Type: <span>${data.types[0].type.name}</span> </small>
    </div>
    `

    main.appendChild(divDom)
}


/*

*/