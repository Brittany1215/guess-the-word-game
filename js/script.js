const guessedLettersElement = document.querySelector (".guessed-letters");
// unordered list where the player’s guessed letters will appear.
const guessButton = document.querySelector (".guess");
// button with the text “Guess!” in it.
const guessForm = document.querySelector (".letter");
// text input where the player will guess a letter.
const wordInProgress = document.querySelector (".word-in-progress");
// empty paragraph where the word in progress will appear.
const remainingGuesses = document.querySelector (".remaining");
// paragraph where the remaining guesses will displa
const numGuessesLeft = document.querySelector (".remaining span");
// span inside the paragraph where the remaining guesses will display.
const message = document.querySelector (".message");
// empty paragraph where messages will appear when the player guesses a letter.
const playAgainButton = document.querySelector (".play-again");
// hidden button that will appear prompting the player to play again.

const word = "magnolia";
// test word before fetch is initiated
const guessedLetters = [];
// array to contain all the letters player guesses

function placeHolder(word) {
    const placeholderArray = [];
    for (const letter of word) {
        console.log(letter);
        placeholderArray.push("●");
    }
    wordInProgress.innerText = placeholderArray.join("");
}
placeHolder(word);
// function to add circle placeholders for the letters of the word until guessed


guessButton.addEventListener ("click", function(e){
    e.preventDefault();
    message.innerText= "";
    const guess = guessForm.value;
    console.log(guess);
    const correctGuess = validatePlayerInput(guess);
    if (correctGuess) {
        makeGuess(guess);
    };

    guessForm.value = "";
    // validatePlayerInput();
});
// validatePlayerInput(input);

// need to figure out why messages are not displaying when charcters are entered
function validatePlayerInput(input) {
    const acceptedLetter = /[a-zA-Z]/;
    // regular expression to only allow letters
    if (input.length === 0) {
        message.innerText = "Enter your first guess";
        console.log("message:", message);
        // if input is empty
    } else if (input.length > 1) {
        message.innerText = "Too many, let's stick to one at a time";
        // no more than one letter can be entered at a time
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Words only have letters, try again";
        // cannot enter character that doesn't match the regular expression
    } else {
        return input;
        // all conditions are met
    }
}

function makeGuess(letter) {
    letter = letter.toUpperCase();
    if (guessedLetters.includes(letter)) {
        message.innerText = "You already guessed that letter, try again";
    } else {
        guessedLetters.push(letter);
        console.log(guessedLetters);
    }

}



















