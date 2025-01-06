const randomNo = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses')
const loOrHi = document.querySelector('.lowOrHi')
const remaining = document.querySelector('.lastResult')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number')
  }else if(guess < 1){
    alert('Please enter number greater than 1')
  }else if(guess > 100){
    alert('Please enter number less than 100')
  }else {
    prevGuess.push(guess);
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over, Random number was ${randomNo} `)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randomNo){
    displayMessage(`You Guessed it right`)
  }else if(guess > randomNo){
    displayMessage(`Number is high`)
  }else if (guess < randomNo){
    displayMessage(`Number is low`)
  }
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess},  `
  numGuess ++;
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
  loOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}