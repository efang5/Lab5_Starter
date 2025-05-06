// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const selection = document.getElementById("voice-select");
  let voice;
  const text = document.getElementById("text-to-speak");
  let textToSpeak;
  const button = document.querySelector("button");
  let utterance;
  const picture = document.querySelector("img");

  synth.addEventListener("voiceschanged", () => {
    const voices = synth.getVoices();
    for(let i = 0; i < voices.length; i++){
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      selection.appendChild(option);
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

    utterance.addEventListener("end", () => {
      picture.src = "assets/images/smiling.png";
    });
  });
}