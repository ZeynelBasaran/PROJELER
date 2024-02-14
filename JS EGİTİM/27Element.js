/*(Element.attributes) özelliği elemana ait nitelikleri döndürür. Dönen değer bir dizi değil NamedNodeMap objesidir.Bu yüzden dizi metodları kullanılamaz
*/

const h1 = document.getElementById('deneme')
console.log(h1.attributes);
const attributes = h1.attributes

for (const attr of attributes) {
  console.log(attr.name, attr.value)//For döngüsüne sokabiliriz.
}

//childElementCount Elemanın kaç çocuk öğesi olduğunu döndürür.
const ul = document.querySelector("ul")
console.log(ul.childElementCount)

const deleteButtons=document.querySelectorAll(".deleteAll")
deleteButtons.forEach(btn => {
  btn.addEventListener("click",e=>{
    e.target.remove()
    if(ul.childElementCount===0){
      ul.innerHTML=`Eleman kalmadı`
    }
  })
  
});

//(children) Elemanın çocuk öğelerini HTMLCollection objesi olarak döndürür.
const htmlcollect =ul.children  // Nodelisti HTML collection olarak verdi.
console.log(htmlcollect)

/*
(clientHeight) - Elemanın iç yüksekliğini döndürüyor. yükseklik + padding - (varsa) scrollbar yüksekliği değerini döndürüyor. Border ve margin değerlerini hariç tutularak döndürür.
(clientWidth) - Elemanın iç genişliğini döndürüyor. genişlik + padding - (varsa) scrollbar genişliği değerini döndürüyor. Border ve margin değerlerini hariç tutularak döndürür.*/
console.log(document.querySelector('.test').clientHeight)

console.log(document.querySelector('.test').clientWidth)

//(firstElementChild) ve (lastElementChild) Adındanda anlaşılacağı üzere ilk ve son elemanları döndürür.
console.log(ul.firstElementChild)
console.log(ul.lastElementChild)
/*
(nextElementSibling) - Seçilen elemanın hemen sonrasında gelen elemanı döndürür.
(previousElementSibling) - Seçilen elemanın hemen öncesinde gelen elemanı döndürür
(scrollHeight) - Elemanın taşan alanlarıda dahil olmak üzere yüksekliğini döndürür.
(scrollWidth) - Elemanın taşan alanlarıda dahil olmak üzere genişliğini döndürür.
(scrollLeft) - Scroll olan elemanın soldan mesafesini döndürür. Ayrıca soldan mesafesini ayarlamak içinde aynı özellik kullanılır.
(scrollWidth) - Scroll olan elemanın yukarıdan mesafesini döndürür. Ayrıca yukarıdan mesafesini ayarlamak içinde aynı özellik kullanılır.
*/

//after() ve before()Seçilen elemanın öncesine ve sonrasına öğe eklemek için kullanılır.
let h2 = document.createElement('h1')
h1.textContent = 'before işe eklendi baslik'

let p = document.createElement('p')
p.textContent = 'after ile eklendi paragraf'

ul.before(h2)
ul.after(p)

//append() ve prepend() Seçilen elemanın başına ve sonuna öğe eklemek için kullanılır. after() ve before() metodlarından farklı olarak bu iki metod ile seçilen öğenin içinde öncesine ve sonrasına öğeler eklenir.

//closest() Seçilen elemana en yakın belirtilen öğeyi döndürür.
let eleman = document.querySelector("#eleman3")
console.log(
  eleman.closest('ul')
)

//getBoundingClientRect() Seçilen öğenin boyutlarını ve pozisyon bilgilerini DOMRect objesi olarak döndürür.
//hasAttribute() Seçilen elemana ait belirlenen niteliğin olup olmadığını kontrol eder.
//matched() Seçilen elemanın belirtilen css seçicisiyle eşleşip eşleşmediğini kontrol eder.
//toggleAttribute() Seçilen elemana belirtilen nitelik varsa kaldırılmasını yoksa eklenmesini sağlar

//preventDefault Bazı etiketlerin varsayılan davranışları vardır. Örneğin bir a etiketine basınca ilgili linke yönlendirilirsiniz, ya da form içinde tipi submit olan bir button a basınca formu gönderir vs. Bu gibi varsayılan davranışları engellemek için preventDefault kullanabilirsiniz. Örneğin;
const aTags = document.querySelectorAll('a')
aTags.forEach(a => {
		a.addEventListener('click', e => {
			// eger link dis bir baglanti iceriyorsa
			// varsayilan davranisi engelle
			if (e.target.getAttribute('href').includes('http')) {
				if (!confirm('Guvenli olmayan bir siteye gitmeye calisiyorsunuz?')) {
					e.preventDefault()
				}
			}
		})
	})

  //stopPropagation Varsayılan yayılmayı engellemek içinse bu özellik kullanılır. Bunu bir örnekle anlatmak gerekirse, iç içe 3 tane etiketimiz olduğunu düşünelim. Ve bu 3 etiketin de bir click olayı olsun. Eğer 3. etikete tıklarsam hepsi çalışır bunu ekledigim event ise çalışmaz iç içede olsa yanlızca 3. etiket çalışır 