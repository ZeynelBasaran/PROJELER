
let btn = document.querySelector(`.box button`).addEventListener("click", generateJoke)

generateJoke()
function generateJoke() {
    const config = {
        headers: {
            Accept: "application/json",
        },
    }

    fetch('https://icanhazdadjoke.com', config).then((res) => res.json()).then((data) => {
        let message = document.querySelector(`.box h3`);
        message.innerHTML = data.joke



    })


}


//Fetch ile Farklı bir veri alma yöntemi
async function generateJoke2() {
    const config = { // Config giriş için istenen talebe cevap verilen yer.
        headers: {
            Accept: "application/json",
        },
    }
    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()
    console.log(data)
    console.log(data.joke)
}
generateJoke2()



