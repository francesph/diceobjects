let dicePlayer1 = [];
let dicePlayer2 = [];
let numberOfDice = 2;
let totalScorePlayer1 = 0;
let totalScorePlayer2 = 0;
let theFont;

function preload() {
    theFont = loadFont("assets/PlayfairDisplaySC-Regular.ttf");
}
function setup() {
  createCanvas(700, 800);

  for (let i = 0; i < numberOfDice; i++) {
    dicePlayer1[i] = new Die(50); // argument is the size of the die
    dicePlayer2[i] = new Die(50);
  }
  textFont(theFont);
  rectMode(CENTER);
//adds that reset button in bottom left corner
  button = createButton("Reset");
  button.mouseClicked(resetGame);
}

function resetGame() {
  totalScorePlayer1 = 0;
  totalScorePlayer2 = 0;
}

function draw() {
  background("#eddcfe");
  
  let horizontalOffset = 265
  let player2Offset = 265;
  
  strokeWeight(8);
  line(0, 400, 700, 400)

  // loop over the array and place+display each die
  for (let i = 0; i < dicePlayer1.length; i++) {
    const die = dicePlayer1[i]; // 'die' is a temporary variable for the current array item
    die.place(horizontalOffset+die.size*1.2*i+die.size, die.size*4); // place the die neatly in the row
    die.display(); // actually draw it on screen
  }

  for (let i = 0; i < dicePlayer2.length; i++) {
    const die = dicePlayer2[i]; // 'die' is a temporary variable for the current array item
    die.place(player2Offset+die.size*1.2*i+die.size, die.size*12); // place the die neatly in the row
    die.display(); // actually draw it on screen
  }
//SCORE---------------------------------------------------------------------------------------------
  // let totalSum = calculateSum();
  // textSize(20);
  // fill("black");
  // textAlign(LEFT);
  // text(`Sum: ${totalSum}`, 200, 100); 

  fill("#7294b3");
  textStyle(NORMAL);
  textSize(46);
  text('Player 1', 360, 100);

  fill("blue");
  textStyle(NORMAL);
  textSize(46);
  text('Player 2', 360, 500);
  
  fill("black");
  textSize(32);
  textAlign(CENTER);
  text(`Score: ${totalScorePlayer1}`, 350, 300);
  text(`Score: ${totalScorePlayer2}`, 350, 700);

  //WIN/LOSE MESSAGE--------------------------------------------------------------------------
 
  //PLAYER 1 (350, 200)
  fill("green");
  textSize(60);
  textStyle(BOLD);
  if (totalScorePlayer1 === 100){
    text('You Win!', 350, 200);
    // text("You Lose", 350, 600)
  }
  fill("red");
  textSize(60);
  textStyle(BOLD);
  if (totalScorePlayer1 === 100){
    // text('You Win!', 350, 200);
    text("You Lose", 350, 600)
  }

  fill("red");
  textStyle(BOLD);
  textSize(60);
  if (totalScorePlayer1 > 100) {
    // text('You Win!', 350, 600);
    text('You Lose', 350, 200);
  }

  fill("green");
  textStyle(BOLD);
  textSize(60);
  if (totalScorePlayer1 > 100) {
    text('You Win!', 350, 600);
    // text('You Lose', 350, 200);
  }
//PLAYER 2 (350, 600) -----------------------------------
  fill("green");
  textSize(60);
  textStyle(BOLD);
  if (totalScorePlayer2 === 100){
    text('You Win!', 350, 600);
    // text("You Lose", 350, 200);
  }

  fill("red");
  textSize(60);
  textStyle(BOLD);
  if (totalScorePlayer2 === 100){
    // text('You Win!', 350, 600); player 2 wins
    text("You Lose", 350, 200); //player 1 loses
  }

  fill("red");
  textStyle(BOLD);
  textSize(60);
  if (totalScorePlayer2 > 100) {
    // text('You Win!', 350, 200);
    text('You Lose', 350, 600);
  }

  fill("green");
  textStyle(BOLD);
  textSize(60);
  if (totalScorePlayer2 > 100) {
    text('You Win!', 350, 200);
    // text('You Lose', 350, 600);
  }
}


function rollDice() {
  for (let i = 0; i < dicePlayer1.length; i++) {
    dicePlayer1[i].roll();
    if (dicePlayer1[i].value === 1) {
      totalScorePlayer1 = totalScorePlayer1-5; // Reset Player 1's score if they roll a 1
      break;
    }
    totalScorePlayer1 += dicePlayer1[i].value;
    
  }
  
  for (let i = 0; i < dicePlayer2.length; i++) {
    dicePlayer2[i].roll();
    if (dicePlayer2[i].value === 1) {
      totalScorePlayer2 = totalScorePlayer2-5; // Reset Player 1's score if they roll a 1
      break;
    }
    totalScorePlayer2 += dicePlayer2[i].value;
  }
}

  function mouseClicked() {
  // loop over the array of dice...
  for (let i = 0; i < dice.length; i++) {
    const die = dice[i];
    // if the cursor is over the current die, freeze/unfreeze that die
    if (die.isTouched(mouseX,mouseY)) {
      die.toggleFreeze();
    }
  }
  rollDice();
}

function keyPressed() {
  rollDice(); // Roll all dice when a key is pressed
}