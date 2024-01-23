/*const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']
const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB']
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
let i = 0;
while (i < 10) {
    console.log(webTechs[i])
    i = i + 1;
} 
let b = 10
while (i > 0){
     console.log(webTechs[i])
     i--;
}
let yas = Number(prompt("Enter your age:"))
if(yas> 17) {console.log("Yaşınız 18'den büyüktür.") }else {
    console.log(`Yaşınız 18'den küçüyüt. 18 Yaşınızıne girmenize ${18-yas} yıl vardır.`)
}
let myAge = Number(prompt("Enter your age:"))
let yourAge = Number(prompt("Enter your age:"))
if(myAge>yourAge) {console.log(`Benim Yaşım sizden ${myAge-yourAge} Yaş büyüktür.`) }else {
    console.log(`Sizin yaşınız benden ${yourAge-myAge} yaş büyüktür.`)
}

let a = 4
let b = 3
if(a<b) {console.log(`A  B'den en den büyüktür.`) }else {
    console.log(`B A 'dan en dan büyüktür.`)
}

let numara = Number(prompt("Bir numara Giriniz"))
if(numara%2==0) {console.log(`${numara} çift sayıdır`) }else {
    console.log(`${numara} tek sayıdır`)
}


let ay = prompt("Lütfen bir ay giriniz:").toLowerCase();
if (ay === "eylül" || ay === "ekim" || ay === "kasım") {
    console.log("Mevsim: Sonbahar");
} else if (ay === "aralık" || ay === "ocak" || ay === "şubat") {
    console.log("Mevsim: Kış");
} else if (ay === "mart" || ay === "nisan" || ay === "mayıs") {
    console.log("Mevsim: İlkbahar");
} else if (ay === "haziran" || ay === "temmuz" || ay === "ağustos") {
    console.log("Mevsim: Yaz");
}else {
    console.log("Geçersiz ay girişi");
}

let day = prompt("Lütfen gün adı giriniz.").toLowerCase();
if (day === "pazartesi" || day === "salı" || day === "çarşamba" || day === "perşembe" || day === "cuma") {
    console.log(`${day} Çalışma günüdür`)
} else if (day === "cumartesi" || day === "pazar") { console.log(`${day} Haftasonu tatili`) } else {
    console.log(` ${day} Tanımsız bir giriş`)
}

let month = prompt("Lütfen ay adı giriniz.").toLowerCase();
if (month === "ocak" || month === "mart" || month === "mayıs" || month === "ağustos" || month === "ekim" || month === "aralık") {
    console.log(` Girdiginiz ay : ${month}'dır bu ay 31 Gün çekmektedir.  `)
} else if (month === "nisan" || month === "haziran" || month === "temmuz" || month === "eylül" || month === "kasım") { console.log(` Girdiginiz ay : ${month}'dır bu ay 30 Gün çekmektedir.  `) }
else if (month === "şubat") { console.log(console.log(` Girdiginiz ay : ${month}'dır bu ay 28 Gün çekmektedir.  `)) }else{console.log("hatalı giriş")}

list = ["#",]
for(i=0; i<10 ; i++){
    list[i]= "#"
    console.log(list)
}
for (let i = 1; i <= 7; i++) {
    console.log("#".repeat(i));
}

for (let i = 0; i <= 10; i++) {
console.log(` ${i} * ${i} = ${i*i}   `  )
}

for (sayi=4 ;sayi<=100 ;sayi++){
let asal = true;
for (let i = 2; i <= sayi - 1; i++) {
  if (sayi % i === 0) {
    asal = false;
    break;
  }
}
if (asal) {
  console.log(`${sayi} Asaldır.`);
} else {
  console.log(`${sayi} Asal Değildir.`);
}

}
*/

let toplam=0
for (i=0; i<=100 ;i++){
    if(i%2==1){toplam = i+toplam}
    
    
}
console.log(toplam)