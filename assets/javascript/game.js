// make an array for the word bank
var town = ['henesys', 'ellinia', 'perion', 'kerning city', 'lith harbor', 'nautilus', 'sleepywood']

// make variables
var randomWord = "";
var lettersofWord = [];
var blanks = 0;
var lines = [];
var wrongGuess = [];

//Counter Variables
var wins = 0;
var losses = 0;
var guessesRemaining = 9;

//function of the game
function Game() {
    randomWord = town[Math.floor(Math.random() * town.length)];

    lettersofWord = randomWord.split("");
    blanks = lettersofWord.length;
    //for loop for blank lines
    for (var i = 0; i < blanks; i++) {
        lines.push("_");
    }
    document.getElementById("current").innerHTML = "  " + lines.join("  ");

    //console.log
    console.log(lines);
    console.log(blanks);
    console.log(lettersofWord);
    console.log(randomWord);
}

//audio variables
var h = document.getElementById("henesyst");
var e = document.getElementById("elliniat");
var p = document.getElementById("periont");
var k = document.getElementById("kerningt");
var li = document.getElementById("litht");
var nau = document.getElementById("naut");
var sl = document.getElementById("sleepyt");


function aud() {

    if (randomWord === town[0]) {
        e.pause();
        p.pause();
        k.pause();
        li.pause();
        nau.pause();
        sl.pause();
        h.play();
        document.getElementById("image").src = "./assets/images/grats.gif";
    } else if (randomWord === town[1]) {
        h.pause();
        p.pause();
        k.pause();
        li.pause();
        nau.pause();
        sl.pause();
        e.play();
        document.getElementById("image").src = "./assets/images/grats.gif";
    } else if (randomWord === town[2]) {
        h.pause();
        e.pause();
        k.pause();
        li.pause();
        nau.pause();
        sl.pause();
        p.play();
        document.getElementById("image").src = "./assets/images/grats.gif";
    } else if (randomWord === town[3]) {
        h.pause();
        e.pause();
        k.pause();
        li.pause();
        nau.pause();
        sl.pause();
        k.play();
        document.getElementById("image").src = "./assets/images/grats.gif";
    } else if (randomWord === town[4]) {
        h.pause();
        p.pause();
        k.pause();
        e.pause();
        nau.pause();
        sl.pause();
        li.play();
        document.getElementById("image").src = "./assets/images/grats.gif";
    } else if (randomWord === town[5]) {
        h.pause();
        p.pause();
        k.pause();
        li.pause();
        e.pause();
        sl.pause();
        nau.play();
        document.getElementById("image").src = "./assets/images/grats.gif";
    } else if (randomWord === town[6]) {
        h.pause();
        p.pause();
        k.pause();
        li.pause();
        nau.pause();
        e.pause();
        sl.play();
        document.getElementById("image").src = "./assets/images/grats.gif";
    }
};

//write a reset function for counter variables
function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    lines = [];
    Game()
}

// if/else statements to see if true/false
function checkLetters(letter) {
    // make a variable for false
    var lineWords = false;

    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            lineWords = true;
        }
    }

    // write a for loop
    if (lineWords) {
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                lines[i] = letter;
            }
        }
    }
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
        // console.log
        console.log(lines)
    }
}

function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| remaining:" + guessesRemaining)

    if (lettersofWord.toString() == lines.toString()) {
        wins++;
        aud();
        reset();
        document.getElementById("image").src = "./assets/images/grats.gif"
        document.getElementById("wins").innerHTML = " " + wins;
    }
    else if (guessesRemaining === 0) {
        losses++;
        reset();
        document.getElementById("image").src = "./assets/images/ms2.gif"
        document.getElementById('losses').innerHTML = '' + losses;
    }
        document.getElementById("current").innerHTML = "  " + lines.join(" ");
        document.getElementById("remaining").innerHTML = " " + guessesRemaining;

    }



Game()
//use string.fromCharCode()

document.onkeyup = function (event) {
    var guess = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guess);
    complete();
    console.log(guess);
    
    document.getElementById("pguess").innerHTML = "  " + wrongGuess.join(" ");
}


// unable to the correct letters to show on blank lines
// unable to stop remaining guesses from going down after every guess





