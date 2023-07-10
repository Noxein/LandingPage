//Generates Paper Rock or Scissors
function getComputerChoice(){
    randomNum = (Math.random()*3)+1;
    if(randomNum>1&&randomNum<2){
        randomNum = "rock"
    }else if(randomNum>2 && randomNum<3){
        randomNum = "paper"
    }else{
        randomNum = "scissors"
    }
    console.log("Machine chosed "+randomNum);
    return randomNum;

}

// User input
//correctInput(userInput);
function correctInput(){
    let userInput = prompt("Chose Paper Rock or Scissors")
    lowCase = (userInput.toLowerCase());
    if(lowCase=="rock"||lowCase=="paper"||lowCase=="scissors"){
        console.log("You chosed " + lowCase);
        return lowCase;
    }else{
        again = prompt("Wrong input, try again. Chose Paper Rock or Scissors");
        correctInput(again);
    }
}

let Machine = 0;
let Player = 0;
let Draw = 0
let Time = "";

function grammar(Draw){
    if(Draw<=1){
        return "Draw"
    }else{
        return "Draws"
    }
}

function grammarT(Time){
    if(Time<=1){
        return "Time"
    }else{
        return "Times"
    }
}
function winner(){
    if((Machine===Player)||(Draw===5)){
        alert("Out of 5 rounds its a Draw! There were " + Draw + " " + grammar(Draw))
    }
    else if(Player>Machine){
        alert("You won! "+Player + " out of 5, there were " + Draw + " " + grammar(Draw))
    }
    else if(Machine>Player){
        alert("You lose! Coputer won "+Machine + " out of 5, there were " + Draw + " " + grammar(Draw) +", you won " + Player + " " + grammarT(Time))
    }
    else{
        alert("Error");
    }
}

function oneRound(playerSelection, computerSelection){
    randomNum;
    if(computerSelection===playerSelection){
        alert("Its a draw");
        return Draw++;
    }else if ((computerSelection=="paper")&&(playerSelection=="rock")){
        alert("You lose Paper beats Rock");
        return Machine++;

    }else if((computerSelection=="scissors")&&(playerSelection=="paper")){
        alert("You lose Scissors beats Paper");
        return Machine++;

    }else if((computerSelection=="rock")&&(playerSelection=="scissors")){
        alert("You lose Rock beats Scissors");
        return Machine++;

    }else{
        alert("You win");
        return Player ++;
    }
}


function game(){
    for(let i=0; i<5 ;i++){
        oneRound(correctInput(),getComputerChoice());
        console.log(Machine);
        console.log(Player);
        console.log(Draw);

        }
    }

game();
winner();
