var isPlaying = false;
var audio = document.getElementById("myAudio");
audio.volume = 0.1;
audio.loop = true;

function toggleMusic() {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isPlaying = !isPlaying;
}