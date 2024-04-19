const filterinput = document.querySelector(`#filterinput`)


filterinput.addEventListener("keyup", () => {
    //İnputada girilen veriyi degişkene atadık.
    const veri = filterinput.value.toUpperCase()
    

    const ul = document.querySelector(`#names`)//UL'yi seçtik
    const li = ul.querySelectorAll("li.kisi")//Nodeliste çevirdik
    console.log(li)

    //Nodelist üzerinden foreach ile döngü oluşturup Elemanların textine ulaştık.
    li.forEach(element => {
        let ab = element.getElementsByTagName("a")[0];
        

        //Anın içerisindeki texti alıp veri deki text içeride mevcut mu kontrol ediyoruz. sonrasında mevcut degilse display none yapıyoruz.
        if(ab.innerHTML.toLocaleUpperCase().indexOf(veri)>-1){
            element.style.display ="";
        }else{
            element.style.display ="none";
        }

    }

    )

})