let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let playerPicks = [rock,paper,scissors]

let whiteBorder = 'border: rgba(255,255,255,0.5) solid 3px;'
//Each Button Functions
rock.addEventListener('click',function(){
    playerPicks.forEach(pick => pick.style= "border: none")
    computerPicks.forEach(pick => pick.style= "border: none")
    oneRound(correctInput(rock.innerText), getComputerChoice);
    playerPick.textContent = "Rock"
    rock.style = whiteBorder
})

paper.addEventListener('click',function(){
    playerPicks.forEach(pick => pick.style= "border: none")
    computerPicks.forEach(pick => pick.style= "border: none")
    oneRound(correctInput(paper.innerText), getComputerChoice);
    playerPick.textContent = "Paper"
    paper.style = whiteBorder
})

scissors.addEventListener('click',function(){
    playerPicks.forEach(pick => pick.style= "border: none")
    computerPicks.forEach(pick => pick.style= "border: none")
    oneRound(correctInput(scissors.innerText), getComputerChoice);
    playerPick.textContent = "Scissors"
    scissors.style = whiteBorder
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
function game(){
    for(let i=0; i<5 ;i++){
        oneRound(correctInput(),getComputerChoice());

        }
    }

//game();
//winner();

function oneRound(playerSelection,ComputerChoice){
    ComputerChoice = getComputerChoice();
    if(ComputerChoice===playerSelection){

        result = "draw";
        computerPick.textContent = ComputerChoice;

    }
    else if ((ComputerChoice=="paper")&&(playerSelection=="rock")){

        result= false;
        computerPick.textContent = ComputerChoice;

    }
    else if((ComputerChoice=="scissors")&&(playerSelection=="paper")){

        result = false
        computerPick.textContent = ComputerChoice;
    }
    else if((ComputerChoice=="rock")&&(playerSelection=="scissors")){

        result= false
        computerPick.textContent = ComputerChoice;

    }
    else if ((ComputerChoice=="rock")&&(playerSelection=="paper")){

        result= true
        computerPick.textContent = ComputerChoice;
    }
    else if((ComputerChoice=="paper")&&(playerSelection=="scissors")){

        result = true
        computerPick.textContent = ComputerChoice;
    }
    else if((ComputerChoice=="scissors")&&(playerSelection=="rock")){

        result= true
        computerPick.textContent = ComputerChoice;
    }

    switch(result){
        case true:
            matchResult.textContent = "You Win";
            matchResult.style.backgroundColor = "green";
            break;
        case false:
            matchResult.textContent = "You Lose";
            matchResult.style.backgroundColor = "red";
            break;
        case "draw":
            matchResult.textContent = "It's a Tie";
            matchResult.style.backgroundColor = "orange";
            break;
    }
    if(ComputerChoice==Crock.innerText.toLowerCase())
    {  
        Crock.style = whiteBorder
    }
    else if(ComputerChoice==Cpaper.innerText.toLowerCase())
    {
        Cpaper.style = whiteBorder
    }
    else
    {
        Cscissors.style = whiteBorder
    }
}