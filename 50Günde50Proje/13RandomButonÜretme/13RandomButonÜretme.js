const tags = document.querySelector(".tags")
const textarea = document.querySelector("#textarea")
textarea.focus();

textarea.addEventListener(`keyup`, (e) => {
    createTags(e.target.value)//Klavyeden basılan her tuşu fonksiyona gönderiyor.

    if (e.key === "Enter") {//Enter a basılıp basılmadıgını kontrol etmek için sonrasında textarea boş kalmakta
        setTimeout(() => {
            e.target.value = ""

        }, 30)

        randomSelect()//Enter sonrası işlemler için diger fonksiyonları çalıştırma
    }
})

function createTags(input) {
    const tag = input.split(",").filter(tagss => tagss.trim() !== "").map(tagss => tagss.trim()) //Virgülle ayırıp boşlukları almadık.

    tags.innerHTML = ""//Her seferinde listeyi son haliyle almak için

    tag.forEach(tag => { //Array Listten Butonları oluşturma
        const btn = document.createElement("span")
        btn.innerHTML = tag;
        btn.classList = "tag"
        tags.appendChild(btn)

    });

}

function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const rastgelesecim = rastgeleTag()//Sayının degişkene atılması

        secim(rastgelesecim)//Rastgele üretilmiş butona seçim classı ataması

        setTimeout(() => {//Classın kaldırılması
            unsecim(rastgelesecim)
        }, 100)
    }, 100)

    setTimeout(()=>{
        clearInterval(interval)//3Saniye sonra intervali sıfırla

        setTimeout(()=>{
            const rastgelesecim = rastgeleTag()//Son kez bir sayı seç

            secim(rastgelesecim)
        },100)
    },times*100)


}

function rastgeleTag() {
    const btns = document.querySelectorAll(`.tag`)
    return btns[Math.floor(Math.random() * btns.length)]//Rastgele sayı üretip butonla eşleştirmek
}


//Claslistlerin ekleme ve silmek
function secim(tag) {
    tag.classList.add("secim")
}
function unsecim(tag) {
    tag.classList.remove("secim")
}