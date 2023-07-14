//Selects user buttons(top ones)
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let playerPicks = [rock,paper,scissors]

//Selects computer button(bottomones)
let Crock = document.getElementById('Crock');
let Cpaper = document.getElementById('Cpaper');
let Cscissors = document.getElementById('Cscissors');

let computerPicks = [Crock,Cpaper,Cscissors]
//Selects outcome node
let matchResult = document.getElementById('outcome3');
let whiteBorder = 'border: rgba(255,255,255,0.5) solid 3px;'

//Function triggers
rock.addEventListener('click',()=>btnClicked(rock));
paper.addEventListener('click',()=>btnClicked(paper));
scissors.addEventListener('click',()=>btnClicked(scissors));

//Function for buttons
function btnClicked(yourPick){
    matchResult.style.backgroundColor = "rgba(0,0,0,0)"
    playerPicks.forEach(pick => pick.style= "border: none")
    computerPicks.forEach(pick => pick.style= "border: none")
    oneRound(correctInput(yourPick.innerText), getComputerChoice);
    playerPicks.textContent = yourPick.innerText;
    yourPick.style = whiteBorder;
}

//Generates Paper Rock or Scissors
function getComputerChoice(){
    randomNum = (Math.random()*3);
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
function correctInput(lowCase){
    return lowCase.toLowerCase();
    
}

let Machine = 0;
let Player = 0;
let Draw = 0;
let Matches = 0;

//Adds "s" to end of an arrgument if its more than 1
//its not working
function grammar(x,word){
    if(x=1){
        return word
    }else if((x>1)||(x=0)){
        return word+="s";
    }
}

let draws = document.getElementById('draws');
let wins = document.getElementById('wins');
let loses = document.getElementById('loses');

function winner(){
    if(Machine===Player){
        matchResult.style = "background-color: orange; color: white";
        matchResult.textContent = "Out of "+Matches+" rounds its a Draw! There were " + Draw + " " + grammar(Draw,"Draw")
    }
    else if(Player>Machine){
        matchResult.style = "background-color: green; color: white";
        matchResult.textContent = "You won! "+Player + " out of "+Matches+", there were " + Draw + " " + grammar(Draw,"Draw");
    }
    else if(Machine>Player){
        matchResult.style = "background-color: red; color: white";
        matchResult.textContent = "You lose! Coputer won "+Machine + " out of "+Matches+", there were " + Draw + " " + grammar(Draw,"Draw") +", you won " + Player + " " + grammar(Player,"Time")
    }
    else{
        alert("Error");
    }
    
    Machine = 0; Player = 0; Draw = 0; Matches = 0;
}

//Determins winner
function oneRound(playerSelection,ComputerChoice){

    ComputerChoice = getComputerChoice();
    let result;

    if(ComputerChoice===playerSelection){
        result = "draw";
        Draw ++;
        Matches++;
    }
    else if (((ComputerChoice=="paper")&&(playerSelection=="rock"))||
            ((ComputerChoice=="scissors")&&(playerSelection=="paper"))||
            ((ComputerChoice=="rock")&&(playerSelection=="scissors"))){
        result= false;
        Machine ++;
        Matches++;
    }
    else{
        result= true;
        Player ++;
        Matches++;
    }

    //Displays current wins draws and loses on web page
    wins.textContent = "Wins: "+Player;
    draws.textContent = "Draws: "+Draw;
    loses.textContent = "Loses: "+Machine;

    
    
    //Changes the web page determined by match result
    switch(result){
        case true:
            matchResult.textContent = "You Win";
            matchResult.style.color = "green";
            break;
        case false:
            matchResult.textContent = "You Lose";
            matchResult.style.color = "red";
            break;
        case "draw":
            matchResult.textContent = "It's a Tie";
            matchResult.style.color = "orange";
            break;
    }

    //gives white border to element that computer chosed
    function selectElemnt(elemnt){
    if(ComputerChoice==elemnt.innerText.toLowerCase())
    {  
        elemnt.style = whiteBorder
    }

    }
    selectElemnt(Crock); selectElemnt(Cpaper); selectElemnt(Cscissors);

    //If there were 10 maches then winner function starts
    if(Player+Machine+Draw===5){
        winner();
    }
}


