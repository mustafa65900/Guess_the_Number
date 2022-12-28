let computerGuess;
let userGuess =[];

let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");

let audio = new Audio("./music.wav");

const init = () => {
    //random no generate
    computerGuess = Math.floor(Math.random() * 100);  
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
};

//opening of modes

const startGame = () => {
    document.getElementById("gameArea").style.display = "block";
    document.getElementById("welcomeScreen").style.display = "none";
};

const startNewGame = () => {
    document.getElementById("newGameButton").style.display = "inline";
    userNumberUpdate.setAttribute("disabled",true);
};

const newGame = () => {
    audio.play();
    window.location.reload();
}

const easyMode = () => {
    audio.play();
    maxGuess = 10;
    startGame();
};

const hardMode = () => {
    audio.play();
    maxGuess = 5;
    startGame();
};

const compareGuess = () => {
    audio.play();
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess,userNumber];
    document.getElementById("guesses").innerHTML = userGuess;

    //low or high or right chck

    if(userGuess.length < maxGuess){
        if(userNumber > computerGuess){
            userGuessUpdate.innerHTML = "Your guess is High";
            userNumberUpdate.value = "";
        }
        else if(userNumber < computerGuess){
            userGuessUpdate.innerHTML = "Your guess is Low";
            userNumberUpdate.value = "";
        }
        else{
            userGuessUpdate.innerHTML = "Hurray!! Your guess is Correct";
            userNumberUpdate.value = "";
            startNewGame();
        }
    }
    else{
        if(userNumber > computerGuess){
            userGuessUpdate.innerHTML = `You Loose!! Correct Number was ${computerGuess}`;
            userNumberUpdate.value = "";
            startNewGame();
        }
        else if(userNumber < computerGuess){
            userGuessUpdate.innerHTML = `You Loose!! Correct Number was ${computerGuess}`;
            userNumberUpdate.value = "";
            startNewGame();
        }
        else{
            userGuessUpdate.innerHTML = "Hurray!! Your guess is Correct";
            userNumberUpdate.value = "";
            startNewGame();
        }
    }

    document.getElementById("attempts").innerHTML = userGuess.length;

};






