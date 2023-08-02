const playerMaker = (nick,mark) =>{
    return {nick, mark}
}
const Maciek = playerMaker('Maciek','o')
const Piotrek = playerMaker('Piotrek','x')

let moshimoshi = document.querySelectorAll('.box');

let Gameboard = ['','','','','','','','',''];

const gameFlow = {
    moves: 1,
    mark: Maciek,

    firstClick: function(){
        moshimoshi.forEach(box =>{
            box.addEventListener('click', ()=>{
                x = box.dataset.id;
                if(box.textContent == ""){
                    box.textContent = this.mark.mark;
                    Gameboard[x] = this.mark.mark;
                    this.moves ++
                    console.log(this.moves);
                    this.winningPlayer();
                    this.turn();
                }
            })
        })
    },

    turn: function(){
        if(this.moves==10){
            this.clearBoard();
        }
        if(this.moves%2==0){
            this.mark = Piotrek
        }else{
            this.mark = Maciek
        }
    },

    clearBoard: function(){
        moshimoshi.forEach(box=>{
            box.textContent = ""
            this.moves = 1;
        })
        for(let i=0;i<Gameboard.length;i++){
            Gameboard[i] = ""
        }
    },

    winningPlayer: function(){
        let board = Gameboard
            wincond.forEach(arr=>{
                if((board[arr[0]]==this.mark.mark)&&(board[arr[1]]==this.mark.mark)&&(board[arr[2]]==this.mark.mark)){
                    console.log('moshimoshi')
                    alert(this.mark.mark + " WON")
                    //to w popup dac
                    this.clearBoard();
                }
            })
    },
}
gameFlow.firstClick();

const wincond = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2],
]