const card = document.getElementById('card');
const audio = document.getElementById('bg-audio');
const audioToggle = document.getElementById('audio-toggle');
const loader = document.getElementById('loader');

let isAudioPlaying = false;

function init() {
    // SAFETY TIMEOUT
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 2000);
}

document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 25;
    const y = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

audioToggle.onclick = () => {
    if (isAudioPlaying) {
        audio.pause();
        audioToggle.textContent = '🎵';
    } else {
        audio.play().catch(() => {});
        audioToggle.textContent = '🔊';
    }
    isAudioPlaying = !isAudioPlaying;
};

window.addEventListener('load', init);
setTimeout(init, 5000);