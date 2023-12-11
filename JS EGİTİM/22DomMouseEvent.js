const btn = document.querySelector("#btnAddNewTask");
const ul = document.querySelector("#task-list");
function run(event){
    console.log(`Event Type ${event.type}`)
}



//Click Event
//btn.addEventListener("click", run)
//ul.addEventListener("click",run)

//Double Click
//btn.addEventListener("dblclick", run)

//Mouse Down (Tıklandı)
btn.addEventListener("mousedown", run)

//Mouseup. (Bırakıldı)
btn.addEventListener("mouseup", run)

//Mouse Enter Üzerine geldiginde çalışıyor
btn.addEventListener("mouseenter", run)

//Mouse Leave Üzerinden ayrıldıgında çalışıyor
btn.addEventListener("mouseleave", run)

//Mouseover. Mouse üzerine geldiginde çalışır
btn.addEventListener("mouseover", run)

//Mouseout Mouse üzerinden ayrıldıgında çalışır
btn.addEventListener("mouseout", run)

//Mousemove Mouse buton üstünde ne kadar piksel hareketi yaptı onu göstermektedir.
btn.addEventListener("mousemove", run)