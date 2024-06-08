const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const startButton = document.getElementById("start");
const wholeDiv = document.querySelector(".container");

const textArray = [
    "",
    "Hola Eder, Feliz Cumpleaños 🥳🥳🥳",
    "Te he hecho una pequeña página web, a ver que te parece :)",
    "Ya lo siento por el regalo, pero no se me ocurría nada :(",
    "Es un pequeño quiz de 5 preguntas, espero que te mole :D",
    "Son preguntas sencillas, muy de NPC, asi que ntr"
];
const typingDelay = 50;
const erasingDelay = 20;
const newTextDelay = 1500; // Delay between current and next text
let textArrayIndex = 1;
let charIndex = 0;



function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
  console.log(textArrayIndex + '' +  textArray.length)
  if (textArrayIndex == 0)  window.location.href = "main.html";
 
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
    
  }

}

// startButton.addEventListener('click', function () {
//     wholeDiv.style.display = "flex";
//     cursorSpan.style.display = "block";
//     typedTextSpan.style.display = "block";
//     wholeDiv.style.scale = 1;
//     startButton.style.display = "none";
//     setTimeout(type, newTextDelay + 250);
// })

document.addEventListener("DOMContentLoaded", function() {
  var audio = new Audio('/assets/audio/caidas.mp3');
  audio.play();
  audio.volume = 0.070;
    setTimeout(type, newTextDelay + 250); // On DOM Load initiate the effect
});
//   
