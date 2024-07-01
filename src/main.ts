let progress:any = document.getElementById('progress');
let song:any = document.getElementById('song');
let ctrlIcon:any = document.getElementById('ctrlIcon');

song.onloadmetadata = function():void{
    progress.max = song.duration;
    progress.value = song.currentTime;

}

function playPause():void{
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }else{
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value= song.currentTime;
    },500)
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
}