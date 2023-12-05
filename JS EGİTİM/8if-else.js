const username = "zeynel";
const lastname = "başaran";
const age = 10;
const isStudent = true

if (username == "zeynel") {
    console.log("Kullanıcı mevcut")
} else {
    console.log("Kullanıcı mevcut degil")
}

if (isStudent) {
    console.log("Hangi bölünü okuyorsun")
} else {
    console.log("Mesleginiz nedir")
};

if (age > 18) {
    if (isStudent) {
        console.log("Ehliyet alabilirsin")
    } else {
        console.log("Yaşınız yeterli ancak ögrenim durumu yetersiz")
    }
} else {
    console.log("Yaşınız yetersiz");
};

let id = "1e324e2";   // İD Tanımlanmamışsa
if (typeof id != "undefined") {
    console.log("İD:" + id)
} else {
    console.log("İD tanımlanmamış")
};


