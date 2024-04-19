const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]

function zamanAyarla() {
    const zaman = new Date()
    console.log(zaman)

    const saat = zaman.getHours();
    const dakika = zaman.getMinutes();
    const saniye = zaman.getSeconds();
    const gun = zaman.getDate()
    const ay = zaman.getMonth() + 1
    const yıl = zaman.getFullYear()

    const hour = document.querySelector(`.hour`);
    (saat < 10) ? hour.innerHTML = `0${saat}` : hour.innerHTML = `${saat}`

    const minute = document.querySelector(`.minute`);
    (dakika < 10) ? minute.innerHTML = `0${dakika}` : minute.innerHTML = `${dakika}`

    const second = document.querySelector(`.second`);
    (saniye < 10) ? second.innerHTML = `0${saniye}` : second.innerHTML = `${saniye}`

    const date = document.querySelector(`.date`)
    date.innerHTML = `${gun} / ${ay} / ${yıl} `



}
setInterval(() => zamanAyarla(), 1000)
