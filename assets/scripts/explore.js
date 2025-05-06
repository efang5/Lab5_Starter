// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voices = synth.getVoices();
  const selection = document.getElementById("voice-select");
  let voice;
  const text = document.getElementById("text-to-speak");
  let textToSpeak;
  const button = document.querySelector("button");
  let utterance;
  const picture = document.querySelector("img");

  selection.addEventListener("load", () => {
    for(let i = 0; i < voices.length(); i++){
      let opt = document.createElement("option");
      opt.text = voices[i];
      selection.add(opt);
    }
  });

  selection.addEventListener("change", (event) => {
    voice = event.target.value;
  });

  text.addEventListener("input", (event) => {
    textToSpeak = event.target.value;
  });

  button.addEventListener("click", () => {
    utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.voice = voice;
    synth.speak(utterance);
    picture.src = "assets/images/smiling-open.png";
  });

  synth.addEventListener("end", () => {
    picture.src = "assets/images/smiling.png";
  });
}