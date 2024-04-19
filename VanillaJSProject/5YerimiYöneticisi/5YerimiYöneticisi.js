const submit = document.querySelector(`#submit`).addEventListener("click", submits)
const list = document.querySelector(`#list`).addEventListener("click", deleteList)

document.addEventListener('DOMContentLoaded', lSgetSite)

function submits(e) {
    e.preventDefault()
    const inputText = document.querySelector(`#webname`).value;
    const url = document.querySelector(`#url`).value;

    //URL için RegExp Kontrolü 
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
    const regex = new RegExp(expression);
    if (!url.match(regex)) {
        alertDiv("Geçersiz URL", "alert alert-danger");
        return false
        
    }

    if (inputText === "" || url === "") {
        alertDiv("Lütfen veri giriniz.", "alert alert-danger")
    } else {

        const webSite = {//Object oluşturmak
            webname: inputText,
            weburl: url
        }
        addList(webSite)

        alertDiv("Yeni Bookmark kayıt oldu.", "alert alert-success")
        inputSıfırla()
        lSaddBooks(webSite)//Oluşturulan Objectin LS'ye gönderimi

    }

}

function addList(webSite) {
    let list = document.querySelector(`#list`)
    let divDom = document.createElement("div")
    divDom.innerHTML = `
        <li>${webSite.webname}</li>
        <button class="btn1"><a href="${webSite.weburl}" target="_blank">Ziyaret Et</a></button>
        <button class="btn2">Sil</button>
        `
    list.appendChild(divDom)
}

function deleteList(x) {
    if (x.target.classList.contains("btn2")) {
        if (confirm("Silmek istediginize emin misiniz.")) {
            x.target.parentElement.remove()
            alertDiv("Seçtigimiz Element Silindi.", "alert alert-warning")
            console.log()
            lSdeleteSite(x.target.parentElement.children[0].textContent)

        }

    }
}

function alertDiv(mesaj, title) {
    const div = document.querySelector("#divalert")
    div.innerHTML = mesaj;
    div.classList = `${title}`;
    div.style.display = "block"
    setTimeout(function () {
        div.style.display = "none"
    }, 5000)

}

function inputSıfırla() {
    let inp = document.querySelector(`#webname`).value = ""
    let url2 = document.querySelector(`#url`).value = ""
}



function lSaddBooks(webSite) { //LS kitap ekleme
    if (localStorage.getItem("inputTexts") === null) {//Eger inputText  LS'De yoksa array oluştr ve bu arreye websiteyi pushla eger sistemde array varsa 
        const webname = [];//Önce boş array oluşturma
        webname.push(webSite)//Array mevcutsa websitesini arraye ekleme
        localStorage.setItem('inputTexts', JSON.stringify(webname))
    } else {//Mevcut Arrayi çagırıp içine oluşuturulan website nesnesini ekledik.
        const webname = JSON.parse(localStorage.getItem('inputTexts'))
        webname.push(webSite)
        localStorage.setItem('inputTexts', JSON.stringify(webname))
    }

}
function lSgetSite() {
    const webname = JSON.parse(localStorage.getItem('inputTexts'))//Get item ile inputteks Arrayini çagırıyoruz.Array içerisinde gezerek elemanları Addliste göndererek LS'dekileride DOM a akatrıyoruz.
    for (let i = 0; i < webname.length; i++) {
        addList(webname[i])
    }
}
function lSdeleteSite(name) {
    const webname = JSON.parse(localStorage.getItem('inputTexts'))
    console.log(webname)

    for (let i = 0; i < webname.length; i++) {
        if (webname[i].webname === name) {

            webname.splice(i,1)
        }
        localStorage.setItem('inputTexts', JSON.stringify(webname))
    }
}



