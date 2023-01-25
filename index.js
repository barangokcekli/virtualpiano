keys = document.querySelectorAll(".key");

//Detecting Button Press
keys.forEach((key) => {
  key.addEventListener("click", function () {
    makeSound(this.getAttribute("data-key"));
    buttonAnimation(this.getAttribute("data-key"));
  });
});

//Detecting Keyboard Press
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(currentKey) {
  document.querySelector(`[data-key="${currentKey}"]`).classList.add("pressed");
  setTimeout(() => {
    document
      .querySelector(`[data-key="${currentKey}"]`)
      .classList.remove("pressed");
  }, 80);
}

// SOUND MAKER FUNCTION
function makeSound(key) {
  switch (key) {
    case "1":
      var audio = new Audio("sounds/C2.mp3");
      audio.play();
      break;
    case "!":
      var audio = new Audio("sounds/Cb2.mp3");
      audio.play();
      break;
    case "2":
      var audio = new Audio("sounds/D2.mp3");
      audio.play();
      break;
    case "'":
      var audio = new Audio("sounds/Db2.mp3");
      audio.play();
      break;
    case "3":
      var audio = new Audio("sounds/E2.mp3");
      audio.play();
      break;
    case "4":
      var audio = new Audio("sounds/F2.mp3");
      audio.play();
      break;
    case "+":
      var audio = new Audio("sounds/Fb2.mp3");
      audio.play();
      break;
    case "5":
      var audio = new Audio("sounds/G2.mp3");
      audio.play();
      break;
    case "%":
      var audio = new Audio("sounds/Gb2.mp3");
      audio.play();
      break;
    case "6":
      var audio = new Audio("sounds/A2.mp3");
      audio.play();
      break;
    case "&":
      var audio = new Audio("sounds/Ab2.mp3");
      audio.play();
      break;
    case "7":
      var audio = new Audio("sounds/B2.mp3");
      audio.play();
      break;
    case "8":
      var audio = new Audio("sounds/C3.mp3");
      audio.play();
      break;
    case "(":
      var audio = new Audio("sounds/Cb3.mp3");
      audio.play();
      break;
    case "9":
      var audio = new Audio("sounds/D3.mp3");
      audio.play();
      break;
    case ")":
      var audio = new Audio("sounds/Db3.mp3");
      audio.play();
      break;
    case "0":
      var audio = new Audio("sounds/E3.mp3");
      audio.play();
      break;
    case "q":
      var audio = new Audio("sounds/F3.mp3");
      audio.play();
      break;
    case "Q":
      var audio = new Audio("sounds/Fb3.mp3");
      audio.play();
      break;
    case "w":
      var audio = new Audio("sounds/G3.mp3");
      audio.play();
      break;
    case "W":
      var audio = new Audio("sounds/Gb3.mp3");
      audio.play();
      break;
    case "e":
      var audio = new Audio("sounds/A3.mp3");
      audio.play();
      break;
    case "E":
      var audio = new Audio("sounds/Ab3.mp3");
      audio.play();
      break;
    case "r":
      var audio = new Audio("sounds/B3.mp3");
      audio.play();
      break;
    case "t":
      var audio = new Audio("sounds/C4.mp3");
      audio.play();
      break;
    case "T":
      var audio = new Audio("sounds/Cb4.mp3");
      audio.play();
      break;
    case "y":
      var audio = new Audio("sounds/D4.mp3");
      audio.play();
      break;
    case "Y":
      var audio = new Audio("sounds/Db4.mp3");
      audio.play();
      break;
    case "u":
      var audio = new Audio("sounds/E4.mp3");
      audio.play();
      break;
    case "ı":
      var audio = new Audio("sounds/F4.mp3");
      audio.play();
      break;
    case "I":
      var audio = new Audio("sounds/Fb4.mp3");
      audio.play();
      break;
    case "o":
      var audio = new Audio("sounds/G4.mp3");
      audio.play();
      break;
    case "O":
      var audio = new Audio("sounds/Gb4.mp3");
      audio.play();
      break;
    case "p":
      var audio = new Audio("sounds/A4.mp3");
      audio.play();
      break;
    case "P":
      var audio = new Audio("sounds/Ab4.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/B4.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/C5.mp3");
      audio.play();
      break;
    case "S":
      var audio = new Audio("sounds/Cb5.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/D5.mp3");
      audio.play();
      break;
    case "D":
      var audio = new Audio("sounds/Db5.mp3");
      audio.play();
      break;
    case "f":
      var audio = new Audio("sounds/E5.mp3");
      audio.play();
      break;
    case "g":
      var audio = new Audio("sounds/F5.mp3");
      audio.play();
      break;
    case "G":
      var audio = new Audio("sounds/Fb5.mp3");
      audio.play();
      break;
    case "h":
      var audio = new Audio("sounds/G5.mp3");
      audio.play();
      break;
    case "H":
      var audio = new Audio("sounds/Gb5.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/A5.mp3");
      audio.play();
      break;
    case "J":
      var audio = new Audio("sounds/Ab5.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/B5.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/C6.mp3");
      audio.play();
      break;
    case "L":
      var audio = new Audio("sounds/Cb6.mp3");
      audio.play();
      break;
    case "z":
      var audio = new Audio("sounds/D6.mp3");
      audio.play();
      break;
    case "Z":
      var audio = new Audio("sounds/Db6.mp3");
      audio.play();
      break;
    case "x":
      var audio = new Audio("sounds/E6.mp3");
      audio.play();
      break;
    case "c":
      var audio = new Audio("sounds/F6.mp3");
      audio.play();
      break;
    case "C":
      var audio = new Audio("sounds/Fb6.mp3");
      audio.play();
      break;
    case "v":
      var audio = new Audio("sounds/G6.mp3");
      audio.play();
      break;
    case "V":
      var audio = new Audio("sounds/Gb6.mp3");
      audio.play();
      break;
    case "b":
      var audio = new Audio("sounds/A6.mp3");
      audio.play();
      break;
    case "B":
      var audio = new Audio("sounds/Ab6.mp3");
      audio.play();
      break;
    case "n":
      var audio = new Audio("sounds/B6.mp3");
      audio.play();
      break;
    case "m":
      var audio = new Audio("sounds/C7.mp3");
      audio.play();
      break;

    default:
      break;
  }
}
