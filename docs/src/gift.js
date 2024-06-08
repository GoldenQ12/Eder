var audio = new Audio('/assets/audio/polaris.mp3');
audio.play();
audio.volume = 0.070;

const img = document.getElementById('image');
const codigo = document.getElementById('codigo');
const imagenIn = document.getElementById('imagenIn');

img.addEventListener('click', () => {
    codigo.style.display = "block";
    imagenIn.style.display = "none";
    Fade();
    
})

function Fade () {
    img.classList.toggle("animate");
}