

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
        "James Garfield",
        "Chester A Arthur",
        "Grover Cleveland",
        "Benjamin Harrison",
        "Grover Cleveland",
        "William McKinley",
        "Theodore Roosevelt",
        "William Howard Taft",
        "Woodrow Wilson",
        "Warren G Harding",
        "Calvin Coolidge",
        "Herbert Hoover",
        "Franklin Delano Roosevelt",
        "Harry S Truman",
        "Dwight Eisenhower",
        "John F Kennedy",
        "Lyndon B Johnson",
        "Richard N Nixon",
        "Gerald Ford",
        "Jimmy Carter",
        "Ronald Reagan",
        "George H W Bush",
        "William Jefferson Clinton",
        "George W Bush",
        "Barack Obama",
        "Donald J Trump"],

}



// Randomly Choose a Prez and store as a variable
randPres = game.plist[Math.floor(Math.random() * game.plist.length)];


// set up an array the same length as randPres to hold correct letters guessed thus far
let guessedPresHolder = [];
for (let a = 0; a < randPres.length; a++) {
    guessedPresHolder.push("_");
}
// automatically fill in spaces between names
for (let b = 0; b < randPres.length; b++) {
    if (randPres[b] === " ") {
        guessedPresHolder[b] = " ";
    }
}

// set up an array to hold the final display with correct Capitalization
var finalArray = [];
for (let e = 0; e < randPres.length; e++) {
    finalArray.push(" ");
}
// set up an array of missed letters and a var to indicate a missed guess
var missedGuessArr = [];
// set up the final display array with correct capitalization


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
        }
    }

    // Populate missed letters array

    if (match === false && missedGuessArr.includes(userGuess) === false) {
        missedGuessArr.push(userGuess);
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
    // play as long as we have not won or lost
    ///  won game condition


    if (winCtr === 0) {
        won = true;
    }

    // lost game condition


    if (missedGuessArr.length > 3) {
        lost = true;
    }
    /// once game is lost or won, start over



    console.log(randPres);
    console.log(randPresArr);
    console.log(finalArray);
    console.log(missedGuessArr);
    // console.log(winCtr);
    console.log(won);
    console.log(lost);



};
