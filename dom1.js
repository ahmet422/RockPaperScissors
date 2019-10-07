// select button to play

var humanWin = 0; // score identificator is assigned to 0 at the beginning
var compWin = 0;
document.getElementById("btn").addEventListener("click", start);

function start() {
  var background = document.getElementById('body');
  background.style.backgroundImage = 'url(images/background4.gif)';
  var elements = document.getElementsByClassName('elements');
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.visibility = 'visible';
  }
  var text = document.getElementById('text');
  text.textContent = 'Untill 3';
 
  var btnText = document.getElementById('btnText');
  btnText.textContent = 'Select Element';
  humanWin = 0;
  compWin = 0;
  score(); 

}



// compares human schoice and computer choice
function onSelect(user) {
  if (endGame()) return; // check if someone win from previous game
  //determineImg(user);
  var comp = randomSelect();
  // if both (human and computer) choose the same element
  if (user === comp) { var winner = 'Tie Round'; text.textContent = winner; return; }
  // 6 possible outcomes
  if (user === 'rock' && comp === 'paper')      {computerWins(); return;}
  if (user === 'rock' && comp === 'scissors')   { humanWins(); return;}
  if (user === 'paper' && comp === 'rock')      {humanWins(); return;}
  if (user === 'paper' && comp === 'scissors')  { computerWins(); return;}
  if (user === 'scissors' && comp === 'paper')  { humanWins(); return;}
  if (user === 'scissors' && comp === 'rock')   {computerWins(); return;}

}
// checks if user or computer did 3 wins
function onRoundEnd() {
  if (humanWin === 3) {
    text.textContent = ' Congrats You Won '
    btnText.textContent = 'Play Again';
  }
  else if (compWin === 3) {
    text.textContent = ' You Lost ';
    btnText.textContent = 'Play Again';
  }
}


function endGame(){
  if(humanWin===3 || compWin===3) {window.alert('Please select Play again button');}
}
function computerWins(){
  winner = 'Robot Wins this round'; compWin++; text.textContent = winner; score();
}

function humanWins(){
  winner = 'Human Wins this round'; humanWin++; text.textContent = winner; score(); 
}
// Score changer function
function score() {
  var humanScore = document.getElementById('humanScore');
  humanScore.textContent = humanWin;
  var compScore = document.getElementById('computerScore');
  compScore.textContent = compWin;
  onRoundEnd(); // calls this function to check if its already 3 or not 
}

// computer selection
var options = ['rock', 'paper', 'scissors']; // array for saving computer selection

function randomSelect() {
  var min = 0;
  var max = 3;
  var random = Math.floor(Math.random() * (+max - +min)) + +min; //random numbers between [0,3)
  /*
  if (random===0) {document.getElementById('selected').src='images/rock.png';}
  if (random===1) {document.getElementById('selected').src='images/paper.png';}
  if (random===2) {document.getElementById('selected').src='images/scissors.png';}
  */
  return options[random];
}

// appears image of selected element of user
/*
function determineImg(){
  if (user==='Rock') {document.getElementById('selected').src='images/rock.png';}
  if (user==='Paper') {document.getElementById('selected').src='images/paper.png';}
  if (user==='Scissors') {document.getElementById('selected').src='images/scissors.png';}
}
*/



