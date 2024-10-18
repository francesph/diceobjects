let dicePlayer1 = [];
let dicePlayer2 = [];
let numberOfDice = 2;
let totalScorePlayer1 = 0;
let totalScorePlayer2 = 0;


function setup() {
  createCanvas(700, 800);
  for (let i = 0; i < numberOfDice; i++) {
    dicePlayer1[i] = new Die(50); // argument is the size of the die
    dicePlayer2[i] = new Die(50);
  }
  rollDice();
  rectMode(CENTER);
}

function draw() {
  background("#f7eea4");
  
  let horizontalOffset = 265
  let player2Offset = 265;

  strokeWeight(4);
  fill("black");
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

  fill("green");
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
  text(`Player 1 Score: ${totalScorePlayer1}`, 350, 300);
  text(`Player 2 Score: ${totalScorePlayer2}`, 350, 700);

  //WIN/LOSE MESSAGE--------------------------------------------------------------------------
 
  fill("purple");
  textSize(60);
  strokeWeight(3);
  if (totalScorePlayer1 === 100){
    text('You Win!', 350, 200);
  }
  
  fill("red");
  textStyle(BOLD);
  textSize(60);
  if (totalScorePlayer1 > 100) {
    text('You Lose', 350, 200);
  }

  fill("purple");
  textSize(60);
  strokeWeight(3);
  if (totalScorePlayer2 === 100){
    text('You Win!', 350, 600);
  }
  
  fill("red");
  textStyle(BOLD);
  textSize(60);
  if (totalScorePlayer2 > 100) {
    text('You Lose', 350, 600);
  }
}


function rollDice() {
  for (let i = 0; i < dicePlayer1.length; i++) {
    dicePlayer1[i].roll();
    totalScorePlayer1 += dicePlayer1[i].value;
  }
  
  for (let i = 0; i < dicePlayer2.length; i++) {
    dicePlayer2[i].roll();
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