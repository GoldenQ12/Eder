

// * QUESTIONS AND ANSWERS
const posibleQuestions = [ 
 "Pregunta chill, como me llamaba en el LoL cuando te conocí?",
 "Te acuerdas de mi cumpleaños ? :) ( Usa la pista si no 😂 ) ",
 "Sabrías decirme cual es la canción que esta sonando ahora mismo?", 
 "Cual fue la primera discoteca a la que fuimos solos a la esquizofrenia? :)", 
 "Todas putas?"]

const posibleAnswers1 = [ 
    "GoldenSQ", 
    "7 de diciembre", 
    "Alejo - COSMO", 
    "Back&Stage", 
    "SIIIII, Absolutamente TODAAS"]

const posibleAnswers2 = [
    "GoldenStorm0",
    "25 de noviembre",
    "Alvaro Diaz, Feid - GATITAS SANDUNGUERAS VOL.1",
    "Sonora",
    "No hombre, hay gente buena"]

const posibleAnswers3 = [
    "Gamer546Videos",
    "29 de noviembre",
    "Myke Towers, Bad Bunny - ADIVINO",
    "Antzoki",
    "No se que poner xD"]

const realAnswers = [
    "GoldenSQ",
    "29 de noviembre",
    "Alvaro Diaz, Feid - GATITAS SANDUNGUERAS VOL.1",
    "Back&Stage",
    "SIIIII, Absolutamente TODAAS"
]

const clues = [
    "Pues como siempre bro, no me he cambiado el nombre :D",
    "Finales de noviembre, :)",
    "Alvarito?",
    "A la que vamos siempre brooo (creo XD )",
    "Si necesitas pista para esto no te conozco :)"
]
const songs = [
    "/assets/audio/badgyal.mp3",
    "/assets/audio/casa.mp3",
    "/assets/audio/gatitas.mp3",
    "/assets/audio/crush.mp3",
    "/assets/audio/reina.mp3",
]


let questionCount = 0;

// * DOM INTERACT 
const questionText = document.getElementById('questionText');
const answerText1 = document.getElementById('answerText1');
const answerText2 = document.getElementById('answerText2');
const answerText3 = document.getElementById('answerText3');

const btnNext = document.getElementById('btnNext');
const btnCheck = document.getElementById('btnCheck');
const btnClue = document.getElementById('btnClue');
const textClue = document.getElementById('clue');


// var audio = new Audio(songs[questionCount]);
// audio.play();
var audio = new Audio();
var currentAudio = null;

addEventListener("DOMContentLoaded", (event) => {
    questionText.innerHTML = posibleQuestions[questionCount];
    answerText1.innerHTML = posibleAnswers1[questionCount];
    answerText2.innerHTML = posibleAnswers2[questionCount];
    answerText3.innerHTML = posibleAnswers3[questionCount];
    playNextSong();
});

btnClue.addEventListener('click', () => {
    textClue.innerHTML = clues[questionCount];
})


// *  FUNCTIONS AND STUFF 



btnCheck.addEventListener('click', () => {
    checkAnswer();
})

btnNext.addEventListener('click', () => {
    if (questionCount === posibleQuestions.length - 1) {
        window.location.href = "gift.html";
    } 
    questionCount++;
    nextQuestion();
    btnCheck.removeAttribute('data-bs-toggle');
    btnCheck.removeAttribute('data-bs-target');

})

// checkAnswer()
// nextQuestion()

function nextQuestion () {
    questionText.innerHTML = posibleQuestions[questionCount];
    answerText1.innerHTML = posibleAnswers1[questionCount];
    answerText2.innerHTML = posibleAnswers2[questionCount];
    answerText3.innerHTML = posibleAnswers3[questionCount];
    const checkedRadio = document.querySelector('input[name="flexRadioDefault"]:checked');
    checkedRadio.checked = false;
     if (questionCount === 5) {
         questionCount = 0;
     }
     playNextSong();
         if (currentAudio) {
        currentAudio.pause();
    }
}



function checkAnswer() {

    const checkedRadio = document.querySelector('input[name="flexRadioDefault"]:checked');
    let labelText = "";
    let answer = "";
    // If a radio button is checked, display its value
    if (checkedRadio) {
     
        // let checkedRadioText = document.querySelector()
        const label = document.querySelector(`label[for="${checkedRadio.id}"]`);
        labelText = label.textContent;
    }
    answer = labelText;
    console.log('Label: ' + labelText)
    if (answer === realAnswers[questionCount]) {
        btnCheck.setAttribute('data-bs-toggle', "modal");
        btnCheck.setAttribute('data-bs-target', "#correctModal");

    } else{
        btnCheck.setAttribute('data-bs-toggle', "modal");
        btnCheck.setAttribute('data-bs-target', "#errorModal");
    }
    
}

function playNextSong() {
    
    // Check if there are more songs in the array
        audio.src = songs[questionCount];
        audio.play();// Play the audio
        audio.volume = 0.040;
        if (songs[questionCount] === "/assets/audio/gatitas.mp3"){
            audio.volume = 0.080
        }
    } 
   
    
