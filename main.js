


let flag;
let curr ="O";
const X = 'PLAYERX_WON';
const O = 'PLAYERO_WON';
const TIE = 'TIE';
//if(!flag) document.getElementById("message").innerHTML="choose a player"; 
const announcer = document.getElementById("result");
let board = ['', '', '', '', '', '', '', '', ''];
function player(id)
{
  if(id==="red") flag=0;
  else flag=1;
}
function handleCellClick(id){ 
const num= parseInt(id);
curr =  flag ? "O" : "X";
flag=!flag;
document.getElementById(id).innerHTML = curr;
document.getElementById(id).disabled = true;
board[num]= curr;

handleResultValidation();
}

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
function handleResultValidation() {
 let roundWon = false;
 for (let i = 0; i <= 7; i++) {
   const winCondition = winningConditions[i];
   const a = board[winCondition[0]];
   const b = board[winCondition[1]];
   const c = board[winCondition[2]];
   if (a === "" || b === "" || c === "") {
     continue;
   }
   if (a === b && b === c) {
     roundWon = true;
     break;
   }
 }
 if (roundWon) {
   announce( curr === "X" ? X : O);
   return;
 }
 if (!board.includes('')) announce(TIE);
}
const announce =(type)=> {
   switch(type){
      case O:
           announcer.innerHTML = 'Player <span class="playerO">O</span> Won!';
         
           break;
      case X:
           announcer.innerHTML = 'Player <span class="playerX">X</span> Won!';
           
           break;
      case TIE:
           announcer.innerHTML= 'It is a Tie';
        
       }
         announcer.classList.remove('hide');

setTimeout(() => {
  document.location.reload();
}, 1500);};
