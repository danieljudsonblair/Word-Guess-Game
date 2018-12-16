

var game = {
    plist: ["George Washington",
        "John Adams",
        "Thomas Jefferson",
        "James Madison",
        "James Monroe",
        "John Quincy Adams",
        "Andrew Jackson",
        "Martin Van Buren",
        "William Henry Harrison",
        "John Tyler",
        "James K Polk",
        "Zachary Taylor",
        "Millard Fillmore",
        "Franklin Pierce",
        "James Buchanan",
        "Abraham Lincoln",
        "Andrew Johnson",
        "Ulysses S Grant",
        "Rutherford B Hayes",
        "James A Garfield",
        "Chester A Arthur",
        "Grover Cleveland",
        "Benjamin Harrison",
        "Grover Cleveland",
        "William Mckinley",
        "Theodore Roosevelt",
        "William Howard Taft",
        "Woodrow Wilson",
        "Warren G Harding",
        "Calvin Coolidge",
        "Herbert Hoover",
        "Franklin Delano Roosevelt",
        "Harry S Truman",
        "Dwight D Eisenhower",
        "John F Kennedy",
        "Lyndon B Johnson",
        "Richard M Nixon",
        "Gerald R Ford",
        "Jimmy Carter",
        "Ronald Reagan",
        "George H W Bush",
        "William Jefferson Clinton",
        "George W Bush",
        "Barack Obama",
        "Donald J Trump"],

}



// Randomly Choose a Prez and store as a variable
var randPres = game.plist[Math.floor(Math.random() * game.plist.length)];
// display beginning message
document.getElementById("begin").innerHTML = "Press any key to begin!";
// set up an array the same length as randPres to hold correct letters guessed thus far
var guessedPresHolder = [];
for (let a = 0; a < randPres.length; a++) {
    guessedPresHolder.push("_");
}
// automatically fill in spaces between names
for (let b = 0; b < randPres.length; b++) {
    if (randPres[b] === " ") {
        guessedPresHolder[b] = " ";
    }
}
// create function to automatially indicate spaces outside of keyup function
var createSpaces = function () {
    for (let c = 0; c < randPres.length; c++) {
        if (randPres[c] === " ") {
            guessedPresHolder[c] = " ";
        }
    }
    document.getElementById('fArr').innerHTML = guessedPresHolder.join("");
}
// set up an array to hold the final display with correct Capitalization
var finalArray = [];
for (let e = 0; e < randPres.length; e++) {
    finalArray.push("_");
}

// set up an array of missed letter choices
var missedGuessArr = [];

createSpaces();
var wins = 0;
// set up and re-initialize match variable each time key is pressed
// Randomly Choose a Prez and store as a variable
document.onkeyup = function (event) {
    var userGuess = event.key;


    // determine if Presidents name contains users letter guess
    var match = false;
    for (let c = 0; c < randPres.length; c++) {
        if (userGuess === randPres.toLowerCase()[c]) {
            guessedPresHolder[c] = userGuess;
            match = true;
            document.getElementById("begin").innerHTML = "";
        }
    }

    // Populate missed letters array

    if (match === false && missedGuessArr.includes(userGuess) === false && userGuess !== "Enter") {
        missedGuessArr.push(userGuess);
        document.getElementById("begin").innerHTML = "";
    }

    // capitalize first letter of Names
    for (let d = 0; d < guessedPresHolder.length; d++) {
        if (d === 0 || (d > 0 && guessedPresHolder[d - 1] === " ")) {
            finalArray[d] = guessedPresHolder[d].toUpperCase()
        } else { finalArray[d] = guessedPresHolder[d] }
    }
    // indicate a win with a for loop
    var randPresArr = randPres.split("");

    // setup variable for a winning game 
    var winCtr = randPresArr.length;

    for (var i = 0; i < randPresArr.length; ++i) {
        if (randPresArr[i] === finalArray[i]) {
            winCtr = winCtr - 1;
        }

    }


    // set up win/loss variables
    var lost = false;
    var won = false;
    // set up play again message
    var playAgainMsg = "Press Enter to Play Again!";
    var WinLoseMsg = "";
    // play as long as we have not won or lost

    ///  won game condition

    if (winCtr === 0) {
        won = true;

        // display winning messages
        if (game.plist.indexOf(randPres) !== 21 && game.plist.indexOf(randPres) !== 23) {
            WinLoseMsg = "You Won!! :) " + " " + randPres + " is President #" + (game.plist.indexOf(randPres) + 1);
        } else {
            WinLoseMsg = "You Won!! :) " + " " + randPres + " is President #22 and #24";
        }
        document.getElementById("msg").innerHTML = WinLoseMsg;
        document.getElementById("pa").innerHTML = playAgainMsg;
    }

    // lost game condition and messages

    if (missedGuessArr.length > 4) {
        lost = true;
        WinLoseMsg = "You Lost! :("
        document.getElementById("msg").innerHTML = WinLoseMsg;
        document.getElementById("pa").innerHTML = playAgainMsg;
    }

    if (missedGuessArr.length > 5) {
        missedGuessArr.pop();
    }
    var remGuesses = 5 - missedGuessArr.length;
    document.getElementById("rem").innerHTML = "Guesses Remaining: " + remGuesses;

    // play until we have won or lost, then reinitialize game

    if ((won === true || lost === true) && userGuess === "Enter") {
        randPres = game.plist[Math.floor(Math.random() * game.plist.length)];
        remGuesses = 5;
        if (won === true) {
            wins++;
        }

        won = false;
        lost = false;
        document.getElementById("msg").innerHTML = "";
        document.getElementById("pa").innerHTML = "";

        // re-initialize variables
        guessedPresHolder = [];
        for (let a = 0; a < randPres.length; a++) {
            guessedPresHolder.push("_");
        }
        for (let c = 0; c < randPres.length; c++) {
            if (randPres[c] === " ") {
                guessedPresHolder[c] = " ";
            }
        }

        for (let b = 0; b < randPres.length; b++) {
            if (randPres[b] === " ") {
                guessedPresHolder[b] = " ";
            }
        }
        finalArray = [];
        for (let e = 0; e < guessedPresHolder.length; e++) {
            finalArray[e] = guessedPresHolder[e]
        }

        missedGuessArr = [];

        randPresArr = randPres.split("");

        // setup variable for a winning game 
        winCtr = randPresArr.length;


        document.getElementById("begin").innerHTML = "Press any key to begin!";

    }

    document.getElementById("fArr").innerHTML = finalArray.join("");
    document.getElementById('mgArr').innerHTML = missedGuessArr.join(" ");
    document.getElementById("w").innerHTML = "Your score: " + wins;

};
