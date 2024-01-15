//   Operatörler
//1. Aritmatik Operatörler
let veri;
const a=20
const b=10
veri=a+b; // Toplamak
console.log(typeof veri)
console.log(veri)
veri=a-b; // Çıkarmak
console.log(veri)
veri=a*b; // Çarpmak
console.log(veri)
veri=a/b; // Bölmek
console.log(veri)
//veri=a++ // +1 Artırmak sabit oldugu için hata verecektir.
let d= 10
veri =d++; // +1 Artırmak
console.log(d)
veri=a%b   // Mod alma (Blümden direkt kalanı söylüyor)
console.log(veri)

//2. Atama Operatörler
veri = a
console.log(veri)
veri +=a // veri = veri+a
console.log(veri)
veri -=a // veri = veri-a
console.log(veri)
veri *=a // veri = veri*a
console.log(veri)
veri /=a // veri = veri/a
console.log(veri)
veri %=a // veri = veri/a
console.log(veri)

//3. Karşılaştırma Operatörler
veri = a==b  //Birbirine eşit mi ? (iki eşittir sadece değer kontrolü)
console.log(veri) // Bu nedenle false
veri = 5==="5" ;// Hem türe bakıyor hem değere (Üç eşittir değer + tür kontrolü)
console.log(veri) // Biri rakam digeri yazı ifadesi 
veri = a!=b // !Eşit degildir ifadesi bu nedenle true (Evet eşit degil)
console.log(veri) // Sonuç true
veri = a>b   // Büyüktür küçüktür ifadesi
console.log(veri); //a 20 b 10 true
veri = a<=b //. Küçük eşittir veya Büyük eşittir ifadesi
console.log(veri) //a 20 b 10 false



//4. Mantıksal Operatörler
//  && AND İki durumunda true olması gerekiyor
veri =  (a>b)&&(a>d);
console.log(veri) // İkiside dogru

//  || OR Bir durumun true olması gerekiyor sonucu true yapıyor
veri =  (a<b)||(a>d); // a hatalı oldugu halde true degerini aldık birinin dogru olması yeterli
console.log(veri) // 

//.  ! NOT ifadesi tersine çevirme
veri =  !(b<a)
console.log(veri) // a , b den büyük true dönmesi gerekirken not ifadesinden dolayı false


