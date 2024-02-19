const audio = ["Applause","Boo","Gasp","Tada","Victory","Wrong"]
let body = document.querySelector(`body`)

audio.forEach(sound => {
    const btn = document.createElement(`button`)
    btn.classList.add(`btn`)
    btn.innerText = sound
    body.appendChild(btn)
    
    btn.addEventListener("click",(a) => {
        stopSongs()
        document.getElementById(sound).play()

    })

});

function stopSongs(){
    audio.forEach(sound =>{
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}