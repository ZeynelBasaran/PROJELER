const RES = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const İMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

getMovies(RES)


async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    showMovies(data.results)
}

const form = document.querySelector(`#form`)
const search = document.querySelector(`#search`)
const main = document.querySelector(`.main`)

form.addEventListener(`submit`, (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if (searchTerm && search !== '') {
        getMovies(SEARCH_API + searchTerm)
        search.value = ""
    } else {
        window.location.reload()
    }
})

function showMovies(data) {
    main.innerHTML = ""

    data.forEach((element) => {
        let scoree= element.vote_average.toFixed(2)
        const div = document.createElement("div");
        div.classList = "card";
        main.appendChild(div)
        div.innerHTML = `
            <img src="${İMG_PATH+element.backdrop_path}" alt="">
            <div class="filminfo">
                <h3>${element.title}</h3>
                <span class="${getScore(element.vote_average)}">${scoree}</span>
            </div>
            <div class="baslik">
                <h3>${element.title}</h3>
                ${element.overview}  
            </div>
             `
    });

}



function getScore(vote){
    if(vote>=8){
        return "green"
    }else if(vote>=6){
        return "orange"
    }else if(vote >= 5){
        return "yellow"
    }else{
        return "red"
    }
}


showMovies()
/*
 */