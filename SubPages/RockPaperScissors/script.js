let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let playerPicks = [rock,paper,scissors]

//Each Button Functions
rock.addEventListener('click',function(){
    playerPicks.forEach(pick => pick.style= "border: none")
    computerPicks.forEach(pick => pick.style= "border: none")
    oneRound(correctInput(rock.innerText), getComputerChoice);
    playerPick.textContent = "Rock"
})

paper.addEventListener('click',function(){
    playerPicks.forEach(pick => pick.style= "border: none")
    computerPicks.forEach(pick => pick.style= "border: none")
    oneRound(correctInput(paper.innerText), getComputerChoice);
    playerPick.textContent = "Paper"
})

scissors.addEventListener('click',function(){
    playerPicks.forEach(pick => pick.style= "border: none")
    computerPicks.forEach(pick => pick.style= "border: none")
    oneRound(correctInput(scissors.innerText), getComputerChoice);
    playerPick.textContent = "Scissors"
})

let playerPick = document.getElementById('outcome1');
let computerPick = document.getElementById('outcome2');
let matchResult = document.getElementById('outcome3');


let Crock = document.getElementById('Crock');
let Cpaper = document.getElementById('Cpaper');
let Cscissors = document.getElementById('Cscissors');

let computerPicks = [Crock,Cpaper,Cscissors]

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
    return randomNum;

}

// User input
//correctInput(userInput);
function correctInput(lowCase){
    lowCase = lowCase.toLowerCase();
    if(lowCase=="rock"||lowCase=="paper"||lowCase=="scissors"){
        //console.log("You chosed " + lowCase);
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

/*
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
*/


let redBorder = "border: red solid 3px;"
let greenBorder = 'border: green solid 3px;'
let orangeBorder = 'border: orange solid 3px;'


function oneRound(playerSelection,ComputerChoice){
    ComputerChoice = getComputerChoice();
    if(ComputerChoice===playerSelection){

        matchResult.textContent = "Its a draw!"
        computerPick.textContent = ComputerChoice;
        playerPicks.forEach(pick => pick.style = orangeBorder)
        computerPicks.forEach(pick => pick.style = orangeBorder)

    }
    else if ((ComputerChoice=="paper")&&(playerSelection=="rock")){

        matchResult.textContent = "You lose Paper beats Rock";
        computerPick.textContent = ComputerChoice;
        rock.style = redBorder
        Cpaper.style  = greenBorder;

    }
    else if((ComputerChoice=="scissors")&&(playerSelection=="paper")){

        matchResult.textContent = "You lose Scissors beats Paper";
        computerPick.textContent = ComputerChoice;
        paper.style = redBorder;
        Cscissors.style = greenBorder;

    }
    else if((ComputerChoice=="rock")&&(playerSelection=="scissors")){

        matchResult.textContent = "You lose Rock beats Scissors" ;
        computerPick.textContent = ComputerChoice;
        scissors.style = redBorder
        Crock.style = greenBorder

    }
    else if ((ComputerChoice=="rock")&&(playerSelection=="paper")){

        matchResult.textContent = "You win Paper beats Rock";
        computerPick.textContent = ComputerChoice;
        Crock.style = redBorder
        paper.style = greenBorder

    }
    else if((ComputerChoice=="paper")&&(playerSelection=="scissors")){

        matchResult.textContent = "You Win Scissors beats Paper";
        computerPick.textContent = ComputerChoice;
        Cpaper.style = redBorder
        scissors.style = greenBorder

    }
    else if((ComputerChoice=="scissors")&&(playerSelection=="rock")){

        matchResult.textContent = "You win Rock beats Scissors" ;
        computerPick.textContent = ComputerChoice;
        Cscissors.style = redBorder
        rock.style = greenBorder

    }

    else{

        result.textContent = "You win";
    }
}

/*
function game(){
    for(let i=0; i<5 ;i++){
        oneRound(correctInput(),getComputerChoice());
        console.log(Machine);
        console.log(Player);
        console.log(Draw);

        }
    }
*/
//game();
//winner();