//randomly calculated computer's choice
function computerPlay(){
    let rand = Math.floor(Math.random() * 3);
    switch(rand){
        case 0:
        return "paper";
        break;

        case 1:
        return "rock";
        break;

        case 2:
        return "scissors";
        break;
        }
    }

    //playing one round of the game
function playRound(playerSelection, computerSelection){

let content='';

  if(playerSelection == "paper" && computerSelection == "rock" ||
    playerSelection == "rock" && computerSelection ==  "scissors" ||
    playerSelection == "scissors" && computerSelection == "paper"){
      content = playerSelection + " beats " + computerSelection;
      document.getElementById("scoreBoard").innerHTML = content;
      return 0;
  } else if (playerSelection == "rock" && computerSelection == "paper" ||
              playerSelection == "paper" && computerSelection == "scissors" ||
              playerSelection == "scissors" && computerSelection == "rock") {
                  content = computerSelection + " beats " + playerSelection;
                  document.getElementById("scoreBoard").innerHTML = content;
                  return 1;
  } else {
    content = "draw";
    document.getElementById("scoreBoard").innerHTML = content;
    return 2;
  }
}

const buttons = document.querySelectorAll('button');
let player = document.getElementById('playerBox');
let comp = document.getElementById('compBox');
let playerScore = document.getElementById('left');
let compScore = document.getElementById('right');
let p = 0;
let c = 0;

buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', (e) => {
    let compChoice = computerPlay();
    let play = playRound(button.id, compChoice);
    let content = '';
    if (button.id === "rock"){
    player.removeAttribute('class');
    player.classList.add('icon-hand-grab-o');

    } else if (button.id === "paper") {
      player.removeAttribute('class');
      player.classList.add('icon-hand-paper-o');

    } else if (button.id === "scissors") {
      player.removeAttribute('class');
      player.classList.add('icon-hand-scissors-o');
    }

    if ( compChoice === "rock"){
    comp.removeAttribute('class');
    comp.classList.add('icon-hand-grab-o');

    } else if (compChoice === "paper") {
      comp.removeAttribute('class');
      comp.classList.add('icon-hand-paper-o');

    } else if (compChoice === "scissors") {
      comp.removeAttribute('class');
      comp.classList.add('icon-hand-scissors-o');
    }
//keeping score
    if (play === 0){
      p++;
      document.getElementById("left").innerHTML = p;
    } else if (play === 1){
      c++;
      document.getElementById("right").innerHTML = c;
    }

    if (p === 5){
      document.getElementById("scoreBoard").innerHTML = "You won!";
      document.getElementById("left").innerHTML = 0;
      document.getElementById("right").innerHTML = 0;
      p = 0;
      c = 0;
    } else if (c === 5) {
      document.getElementById("scoreBoard").innerHTML = "You Lose!";
      document.getElementById("left").innerHTML = 0;
      document.getElementById("right").innerHTML = 0;
      p = 0;
      c = 0;
    }

  });
});
