//Generates Paper Rock or Scissors
function randomRPS(){
    randomNum = (Math.random()*3)+1;
    if(randomNum>1&&randomNum<2){
        randomNum = "rock"
    }else if(randomNum>2 && randomNum<3){
        randomNum = "paper"
    }else{
        randomNum = "scissors"
    }
    return randomNum;
}

console.log(randomRPS());

// User input
let userInput = "scissors";

//Checking if user input is paper rock or scissors and puts it to lower case
function checkLetters(){
    lowCas = userInput.toLowerCase();
    if(lowCas=="rock"||lowCas=="paper"||lowCas=="scissors"){
        return lowCas;
    }else{
    console.log("Enter Rock Paper or Scissors");
    }
}

console.log(checkLetters());

//Final function to check who wins or if its draw
function RPS(){
    if(randomNum===lowCas){
        console.log("Its a draw!");

    }else if((randomNum=="rock") && (lowCas=="scissors")){
        console.log("You Lose!");

    }else if((randomNum=="paper") && (lowCas=="rock")){
        console.log("You Lose!");
    }

    else if((randomNum=="scissors") && (lowCas=="paper")){
        console.log("You Lose!");
    }
    else{
        console.log("You Win!");
    }
}
    console.log(RPS())
