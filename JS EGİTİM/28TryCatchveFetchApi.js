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

let ul= document.querySelector(`#task-list`)
console.log(ul)

//API üzerinden veri çektik ve ekrana yazdırdık 
fetch('https://jsonplaceholder.typicode.com/todos/1/posts').then(
    response => response.json()
    ).then(json => json.forEach(element => {
        console.log(element);
        const news = document.createElement("li");
        ul.appendChild(news)
        news.innerHTML =`${element.id} ${element.title}`
        
        
    }))

