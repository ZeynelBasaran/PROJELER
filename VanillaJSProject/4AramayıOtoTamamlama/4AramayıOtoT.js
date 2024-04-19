//Json dosyasını baglama ve filtre etme
const searchStates = async searchText => {
    const res = await fetch("/VanillaJSProject/4AramayıOtoTamamlama/state_capitals.json");
    const states = await res.json();// Fetch dosya alındı.

    //Filter ile veri üzerinde gezip Regexp ile arama yapıp sonuç döndürüyoruz.
    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, `gi`)//RegExp g global i büyük-küçükhard duyarsızlıgı 
        return state.name.match(regex) || state.abbr.match(regex)
    })

    //Arama butonu sıfırlanınca eşleşmeyi sıfırlıyor.
    if (searchText.length === 0) {
        matches = [];
        bar.innerHTML = ""
    }
    domAktarma(matches)


}

const search = document.querySelector(`#inputs`);
search.addEventListener(`input`, () => searchStates(search.value))
const bar = document.querySelector(`.bar`)

//Map ile liste üzerinde gezinip join ile list oluşturduk.
function domAktarma(matches) {
    if (matches.length > 0) {
        const html = matches.map(match => `
    <li class="lidom">
    <b>${match.name}</b>
    <div class="bardiv">
        <span><b>Abbr: </b>${match.abbr}</span>
        <span><b>Capital: </b>${match.capital}</span>
       
        <span><b>Lat: </b>${match.lat}</span>
    </li>
    `).join("");

        bar.innerHTML = html;
    }
}


