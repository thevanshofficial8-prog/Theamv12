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
function updateDateTime(){
    const now = new Date();

    const date = now.toLocaleDateString("en-IN", {
        weekday:"long",
        day:"2-digit",
        month:"long",
        year:"numeric"
    });

    const time = now.toLocaleTimeString("en-IN");

    document.getElementById("datetime").innerHTML =
        `${date}<br>${time}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);
