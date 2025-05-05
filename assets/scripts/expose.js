// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById("horn-select");
  const hornPic = document.querySelector(header + img);
  const audio = document.getElementsByClassName("hidden")[0];
  const volume = document.getElementById("volume");
  const volImg = document.getElementBySelector(div > img);
  const button = document.getElementBySelector(button);
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener("change", (event) => {
    if (event.target.value == "air-horn") {
      hornPic.src = "assets/images/air-horn.svg";
      audio.src = "assests/audio/air-horn.mp3";
    }
    else if (event.target.value == "car-horn") {
      hornPic.src = "assets/images/car-horn.svg";
      audio.src = "assests/audio/car-horn.mp3";
    }
    else if (event.target.value == "party-horn") {
      hornPic.src = "assets/images/party-horn.svg";
      audio.src = "assests/audio/party-horn.mp3";
    }
  });

  volume.addEventListener("input", (event) => {
    let vol = event.target.value;
    audio.volume = (vol/100);
    if(vol == 0){
      volImg.src = "assests/icons/volume-level-0.svg";
    }
    else if(vol < 33){
      volImg.src = "assests/icons/volume-level-1.svg";
    }
    else if(vol < 67){
      volImg.src = "assests/icons/volume-level-2.svg";
    }
    else{
      volImg.src = "assests/icons/volume-level-3.svg";
    }
  });

  button.addEventListener("click", () => {
    audio.play();
    if(hornSelect.value == "party-horn"){
      jsConfetti.addConfetti();
    }
  });
}