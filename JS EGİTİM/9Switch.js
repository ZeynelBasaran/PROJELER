let islem = 1;

switch (islem) {
    case 1: 
        console.log("işlem 1'e eşittir")
        break; // Break konmazsa diğer koşullarda çalışır.
    case 2:
        console.log("işlem 2'ye eşittir")
        break;
    case 3:
        console.log("işlem 3'ye eşittir")
        break;
    default: // Hiç bir koşul sağlanmazsa çalışacak
        console.log("Rakam yok");

}
let zaman =new Date();

console.log(zaman.getDate());
let zaman1= zaman.getDate();
console.log(zaman1);
let day=zaman1

switch (true) {
    case 0 < day && day <= 10:
    console.log("Ayın ilk 10 günü içerisindesiniz")
    break;
    case 10 < day && day <= 20:
    console.log("Ayın ortanca 10 günü içerisindesiniz")
    break;
    case 20 < day && day <= 31:
    console.log("Ayın son 10 günü içerisindesiniz")
    break;
    default:
    console.log("Rakam yok");

}
