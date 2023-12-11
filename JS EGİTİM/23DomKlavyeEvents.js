const text = document.getElementById("txtTaskName");
function run(e){
    console.log(e.type)
    console.log(e.target.value) //Klavyeden basılan tuşu alabiliriz.
};

//FOCUS
text.addEventListener("focus",run)

//BLUR (dışarı tıklandıgında bildiriyor.)
text.addEventListener("blur",run)

//PASTE (bir şey kopyalandıgında) COPY VE CUT MODUDA VAR
text.addEventListener("paste",run)

//SELECT (Yazılan metinde bir yeri seçmek)
text.addEventListener("select",run)

//KEYDOWN (Klavyeden tuşa basıldıgında)
text.addEventListener("keydown",run)

//KEYUP (Klavyeden tuşa basıp bıraktıgımızda)
text.addEventListener("keyup",run)

console.log(text)
