import { name, getWord } from "./modules/wordList.js";

const word = getWord();
console.log(word);
var guess = 0;
var letter = 0;
var entryRows = document.getElementById("entry-container").children;
var keyboardRows = document.getElementById("keyboard-container").children;
function scoreGuess() {
  var guessString = "";
  var correct = 0;
  var entryLetters = entryRows[guess].children;
  for (var i = 0; i < entryLetters.length; i++) {
    guessString += entryLetters[i].innerText;
  }
  for (var i = 0; i < guessString.length; i++) {
    var letter = guessString.charAt(i).toLowerCase();
    var answerLetter = word.charAt(i);
    if (letter == answerLetter) {
      entryLetters[i].style.backgroundColor = "#538C4F";
      for (var j = 0; j < keyboardRows.length; j++) {
        for (var k = 0; k < keyboardRows[j].children.length; k++) {
          if (keyboardRows[j].children[k].innerText == letter.toUpperCase()) {
            keyboardRows[j].children[k].style.backgroundColor = "#538C4F";
          }
        }
      }
      correct++;
      continue;
    }
    var foundLet = false;
    for (var j = 0; j < word.length; j++) {
      answerLetter = word.charAt(j);
      if (letter == answerLetter) {
        entryLetters[i].style.backgroundColor = "#B59F3B";
        for (var j = 0; j < keyboardRows.length; j++) {
          for (var k = 0; k < keyboardRows[j].children.length; k++) {
            if (keyboardRows[j].children[k].innerText == letter.toUpperCase()) {
              if (
                keyboardRows[j].children[k].style.backgroundColor !=
                "rgb(83, 140, 79)"
              ) {
                keyboardRows[j].children[k].style.backgroundColor = "#B59F3B";
              }
            }
            foundLet = true;
          }
        }
      }
    }
    if (foundLet == false) {
      for (var j = 0; j < keyboardRows.length; j++) {
        for (var k = 0; k < keyboardRows[j].children.length; k++) {
          if (keyboardRows[j].children[k].innerText == letter.toUpperCase()) {
            keyboardRows[j].children[k].style.backgroundColor = "#3a3b3d";
          }
        }
      }
    }
  }

  if (correct == 5) {
    alert("you won!");
  }
}

function keyPress(key) {
  var keyText = key;

  if (keyText == "DEL") {
    if (letter >= 0) {
      letter -= 1;
      var entryLetters = entryRows[guess].children;
      entryLetters[letter].innerText = "";
    }
    return;
  }
  if (keyText == "ENTER") {
    if (letter == 5) {
      scoreGuess();
      guess++;
      letter = 0;
    }
    return;
  }

  if (letter != 5) {
    var entryLetters = entryRows[guess].children;
    entryLetters[letter].innerText = keyText;
    letter += 1;
    return;
  }
}

document.addEventListener("keydown", getKey);

function getKey(e) {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    var key = e.code;
    keyPress(key.slice(-1));
  }
  if (e.keyCode == 8) {
    keyPress("DEL");
  }
  if (e.keyCode == 13) {
    keyPress("ENTER");
  }
}

window.keyPress = keyPress;
