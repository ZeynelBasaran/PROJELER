/*let products ;

try {
    products.forEach(element => { console.log(elements)
    });

    Hello()
} catch (error) {
    console.log(error)
}

*/

//JS Dosyadan veri çekmek
fetch("/JS EGİTİM/settings.json").then(
    response => response.json()
).then(responseJson => {
    console.log(responseJson)
    console.log(responseJson.username)
})

//Fonk ile fetch atmak
const searchStates = async searchText => {
    const res = await fetch("/VanillaJSProject/4AramayıOtoTamamlama/state_capitals.json");
    const states = await res.json();
    console.log(states)
}
searchStates()



let ul = document.querySelector(`#task-list`)
console.log(ul)

//API üzerinden veri çektik ve ekrana yazdırdık 
fetch('https://jsonplaceholder.typicode.com/todos/1/posts').then(
    response => response.json()
).then(json => json.forEach(element => {
    console.log(element);
    const news = document.createElement("li");
    ul.appendChild(news)
    news.innerHTML = `${element.id} ${element.title}`


}))


//Fetch ile Farklı bir veri alma yöntemi daha kısa yazım
async function generateJoke2() {
    const config = { // Config giriş için istenen talebe cevap verilen yer.
        headers: {
            Accept: "application/json",
        },
    }
    const res = await fetch('https://icanhazdadjoke.com', config) // Bu kısım 
    const data = await res.json()
    console.log(data)
    console.log(data.joke)
}
generateJoke2()


//Async işlem
async function getData(){
    const users = await(
        await fetch("https://jsonplaceholder.typicode.com/posts")
    ).json()
    console.log("users", users)
}
getData()