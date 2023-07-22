const guessedLettersElement = document.querySelector (".guessed-letters");
// unordered list where the player’s guessed letters will appear.
const guessButton = document.querySelector (".guess");
// button with the text “Guess!” in it.
const guessForm = document.querySelector (".letter");
// text input where the player will guess a letter.
const wordInProgress = document.querySelector (".word-in-progress");
// empty paragraph where the word in progress will appear.
const remainingGuesses = document.querySelector (".remaining");
// paragraph where the remaining guesses will display.
const numGuessesLeft = document.querySelector (".remaining span");
// span inside the paragraph where the remaining guesses will display.
const message = document.querySelector (".message");
// empty paragraph where messages will appear when the player guesses a letter.
const playAgainButton = document.querySelector (".play-again");
// hidden button that will appear prompting the player to play again.

const word = "magnolia";
// test word before fetch is initiated
let guessedLetters = [];
// array to contain all the letters player guesses

const placeHolder = function (word) {
    const placeholderArray = [];
    for (const letter of word) {
        placeholderArray.push("●");
    }
    wordInProgress.innerText = placeholderArray.join("");
    // joins the array elements into a string
};
placeHolder(word);
// function to add circle placeholders for the letters of the word until guessed

guessButton.addEventListener ("click", function(e){
    e.preventDefault();
    // to prevent the default behavior of form
    // clicking a button, the form submitting, 
    // and then reloading the page.
    message.innerText= "";
    const guess = guessForm.value;
    // the box where players input a guess
    const correctGuess = validatePlayerInput(guess);
    if (correctGuess) {
        makeGuess(guess);
    };
    guessForm.value = "";
});
    
const validatePlayerInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    // regular expression to only allow letters
    if (input.length === 0) {
        message.innerText = "Enter your guess";
        console.log("message:",message.innerText);
        // if input is empty
    } else if (input.length > 1) {
        message.innerText = "Too many, let's stick to one at a time";
        console.log("message:",message.innerText);
        // no more than one letter can be entered at a time
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Words only have letters, try again";
        console.log("message:",message.innerText);
        // cannot enter character that doesn't match the regular expression
    } else {
        return input;
        // all conditions are met
    }
};

const makeGuess = function (letter) {
    letter = letter.toUpperCase();
    if (guessedLetters.includes(letter)) {
        message.innerText = "You already guessed that letter, try again";
    } else {
        guessedLetters.push(letter);
        console.log(guessedLetters);
        displayGuessedLetters (guessedLetters);
        updatedWordInProgress(guessedLetters);
    }
};

const displayGuessedLetters = function  () {
    guessedLettersElement.innerHTML = "";
    // clear the ul
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersElement.append(li);
    }
};
// Displays letters entered in caps on screen

const updatedWordInProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    // splits the word string into an aray
    const revealWord = [];
    for (const letter of wordArray) { 
        if(guessedLetters.includes(letter)) {
            revealWord.push(letter.toUpperCase());
        } else {
            revealWord.push("●");
        }
        console.log(revealWord);
    }
    youWin();
};

const youWin = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
    message.classList.add ("win");
    message.innerHTML = `<p class="highlight">You guessed correct the word! Congrats!</p>`;
        }
};

















