const music = document.getElementById("music");
const playBtn = document.getElementById("playBtn");

let playing = false;

playBtn.addEventListener("click", () => {
    if (!playing) {
        music.play();
        playBtn.innerHTML = "⏸ Pause Music";
        playing = true;
    } else {
        music.pause();
        playBtn.innerHTML = "▶ Play Music";
        playing = false;
    }
});

music.loop = true;
