

//Dom erişme ve btnclick eventi sonrası valuelerin fonk gönderimi
const result = document.querySelector(`.result`)
const len = document.querySelector(`#Len`);
const uppercase = document.querySelector(`#uppercase`)
const lowercase = document.querySelector(`#lowercase`)
const number = document.querySelector(`#number`)
const symbol = document.querySelector(`#symbol`)
const generate = document.querySelector(`#generate`)
const copy = document.querySelector(`.copy`)
generate.addEventListener("click", () => {
    const leng = len.value;
    const hasLower = lowercase.checked; //Checked etiketlerinin true false döndürür.
    const hasUpper = uppercase.checked;
    const hasNumber = number.checked;
    const hasSymbol = symbol.checked;

    result.innerText = generatePassword(hasLower, hasNumber, hasSymbol, hasUpper, leng)

})

const randomFunc = {
    low: getRandomLower,
    up: getRandomUpper,
    sym: getRandomSymbol,
    numb: getRandomNumber
}

function generatePassword(low, numb, sym, up, leng) {
    let generatedPassword = ""
    const typeCount = low + numb + sym + up
    console.log(typeCount)
    //Array list True false olarak dönmekkte - Object.values() fonksiyonu, bir nesnenin değerlerini bir dizi olarak döndürür.
    const typeArr = [{ low }, { numb }, { sym }, { up }].filter(item => Object.values(item)[0])



    if (typeCount === 0) {//Hiç biri seçilmezse boş ekran
        return ''
    }
    console.log("-")

    for (let i = 0; i < leng; i += typeCount) {
        typeArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            //console.log(funcName)//numb,numver vs diye dönmekte
            generatedPassword += randomFunc[funcName]()//Rastgele numb,sayı oluşturan fonksiyonu çagırmakta
            //console.log(generatedPassword)
        })
    }
    const finalpassword = generatedPassword.slice(0, leng)//Oluşturulan pasword uzunluguna göre slice etmek için 


    copy.addEventListener("click", () => {
        clipBoard(finalpassword)
    })
    return finalpassword

}

//https://www.w3schools.com/charsets/ref_html_ascii.asp
//HTML'de ASCII Printable Characters olarak 97-122 Arası random rakam üreterek harfi HTML karakter numarasından string.fromcharcode ile oluşturuyoruz.

function getRandomLower() {//26 Harf var
    return String.fromCharCode(((Math.floor(Math.random() * 26)) + 97))
}
function getRandomUpper() {
    return String.fromCharCode(((Math.floor(Math.random() * 26)) + 65))
}
function getRandomNumber() {//10Adet rakam var
    return String.fromCharCode(((Math.floor(Math.random() * 10)) + 48))
}
function getRandomSymbol() {
    const symbols = "!@#$(){}[]\|<>/,.*"
    return symbols[Math.floor(Math.random() * symbols.length)]
}
//Rasgele sayı,büyük harf,küçük harf ve sembol üretecek functionlar tamam



function clipBoard(finalpassword) {
    navigator.clipboard.writeText(finalpassword)
        .then(() => {
            console.log('Metin kopyalandı: ' + finalpassword);
            alert('Metin kopyalandı: ' + finalpassword);
            finalpassword=""
        })
        .catch(err => {
            console.error('Metin kopyalanırken hata oluştu: ', err);
            alert('Metin kopyalanırken hata oluştu!');
        });
}



