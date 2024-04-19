const APIURL = "https://api.github.com/users/"
const input = document.querySelector(`#search`);
const form = document.querySelector(`form`)
const main = document.querySelector(`#main`)

//Girilen İnput degerini aramaya göndermek
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const user = search.value
    if (user) {
        getUser(user)
        search.value = ""
    }

})

//Api üzerinden Kullanıcı bilgilerini sorgu ile almak
async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username )

        createCard(data)
        getRepos(username)
    } catch (err) {
        if (err.response.status == 404) {
            createErrorStatus("Böyle bir kullanıcı kaydı yoktur.")
        }
    }
}

//Api üzerinden repoları sorgu ile almak
async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created')

        addReposCard(data)
    } catch (err) {
        if (err.response.status == 404) {
            createErrorStatus("Imm Repoda Problem var.")
        }
    }
}

//Hata mesajı
function createErrorStatus(msg) {
    let cardHtml = `
    <div class="card">
        <h1>${msg}</h1>  
    </div>
    `
    main.innerHTML = cardHtml
}

//Kart oluşturmak
function createCard(user) {
    let cardHtml = `
    <div class="card">

            <div class="">
                <img src="${user.avatar_url}"
                    alt=${user.name}"" class="avatar">
            </div>

            <div class="user-info">
                <h2>${user.login}</h2>
                <p>${user.bio}</p>

                <ul class=>
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>

                <div class="repos"></div>

              
            </div>
    `
    main.innerHTML = cardHtml
}

function addReposCard(repos) {
    
    let reposs= document.querySelector(`.repos`)

    repos
    .slice(0,10)//İlk 10 Adetini getiriyor.
    .forEach(repo=>{
        const repoA = document.createElement("a")
        repoA.classList.add("repo")
        repoA.href=repo.html_url
        repoA.target="_blank"
        repoA.innerText= repo.name
        reposs.appendChild(repoA)
    })

    
}

