var song = document.getElementById("song"); 
document.getElementById("video").setAttribute("autoplay", "autoplay");

song.volume = 0.02; 

function start() {
    document.getElementById("start").style.display = "none";
    document.getElementById("content").style.display = "block";
    song.play(); 
}
