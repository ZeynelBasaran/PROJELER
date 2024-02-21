const labels = document.querySelectorAll(`.card div label`)


labels.forEach(label=>{
    label.innerHTML = label.innerText
    .split(``)
    .map((letter,ind)=> `<span class="sp" style="transition-delay:${ind*30}ms">${letter}</span>`)
    .join(``)
    
})


const inputss = document.querySelectorAll(`.card div input`);
const inputss2= document.querySelector(`.card div input:focus+ label span`);
console.log(inputss2)


//Deneme amaçlı aşagıdaki kod yazıldı

inputss.forEach(element => {
    element.addEventListener("input",(inp)=>{
        if(inp.value=""){
            console.log("a") 
        }else{
            
        }
    
    
    
    })
});








console.log("---")

let names = "zeynel"// Stringi diziye çevirip tek tek yazdırıyor.
let names2 = names.split("")

const NEW_USER = names2.map(user => user.toUpperCase())
console.log(NEW_USER)//(MAP) Arraydeki verileri istedigimiz formatta yeniden düzenlemek için kullanılır
console.log(NEW_USER.join(""))//(JOİN)Parantez içerisine dizi elemanları arasına koymak istediğimiz string'i parametre olarak girebiliriz. Eğer bir parametre vermezsek virgül bastırır.


