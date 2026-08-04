document.addEventListener("DOMContentLoaded", () => {
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
function createStar() {
    const star = document.createElement("div");
    star.classList.add("shooting-star");

    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * (window.innerHeight / 2) + "px";

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 2500);
}

setInterval(createStar, 800);
const bars = document.querySelectorAll(".visualizer span");

music.addEventListener("play", () => {
    bars.forEach(bar => {
        bar.style.animationPlayState = "running";
    });
});

music.addEventListener("pause", () => {
    bars.forEach(bar => {
        bar.style.animationPlayState = "paused";
    });
});
const text = "Welcome To TheamV12";
let index = 0;

function typing(){
    if(index < text.length){
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typing,100);
    }
}

typing();


// ===== About Section Fade Animation =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".about").forEach(el => observer.observe(el));

// ===== Smooth Scroll =====
document.documentElement.style.scrollBehavior = "smooth";
});
