// Detecting button press//
$(".drum").click(function() {
  var buttomInnerHTML = this.innerHTML;
  makeSound(buttomInnerHTML);
  buttonAnimation(buttomInnerHTML);
});

// Detecting keyboard press//
$("body").keypress(function() {
  makeSound(event.key);
  buttonAnimation(event.key);
});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/Bell.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "b":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "z":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "o":
      var tom3 = new Audio("sounds/snare.mp3");
      tom3.play();
      break;

    case "g":
      var tom4 = new Audio("sounds/Harp.mp3");
      tom4.play();
      break;

    case "r":
      var snare = new Audio("sounds/tom-3.mp3");
      snare.play();
      break;

    case "t":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "q":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "v":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "x":
      var tom2 = new Audio("sounds/Chime.mp3");
      tom2.play();
      break;

    case "n":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "c":
      var tom4 = new Audio("sounds/kick-bass.mp3");
      tom4.play();
      break;

    case "i":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "h":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "f":
      var kick = new Audio("sounds/tom-4.mp3");
      kick.play();
      break;

    case "e":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "p":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "m":
      var tom3 = new Audio("sounds/Harp.mp3");
      tom3.play();
      break;

    case "u":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "y":
      var snare = new Audio("sounds/Bell.mp3");
      snare.play();
      break;

    default:
      console.log(buttomInnerHTML);
  }
}


function buttonAnimation(currentKey) {
  $("." + currentKey).addClass("pressed");

  setTimeout(function() {
    $("." + currentKey).removeClass("pressed");
  }, 100);
}