
document.querySelector(".O-Cell4").style.visibility = "hidden";
document.querySelector(".X-Cell4").style.visibility = "hidden";

document.querySelector(".O-Cell1").style.visibility = "hidden";
document.querySelector(".X-Cell1").style.visibility = "hidden";

document.querySelector(".O-Cell2").style.visibility = "hidden";
document.querySelector(".X-Cell2").style.visibility = "hidden";

document.querySelector(".O-Cell3").style.visibility = "hidden";
document.querySelector(".X-Cell3").style.visibility = "hidden";

document.querySelector(".O-Cell5").style.visibility = "hidden";
document.querySelector(".X-Cell5").style.visibility = "hidden";

document.querySelector(".O-Cell6").style.visibility = "hidden";
document.querySelector(".X-Cell6").style.visibility = "hidden";

document.querySelector(".O-Cell7").style.visibility = "hidden";
document.querySelector(".X-Cell7").style.visibility = "hidden";

document.querySelector(".O-Cell8").style.visibility = "hidden";
document.querySelector(".X-Cell8").style.visibility = "hidden";

document.querySelector(".O-Cell9").style.visibility = "hidden";
document.querySelector(".X-Cell9").style.visibility = "hidden";


const cell1 = document.querySelector('.Cell1');
const cell2 = document.querySelector('.Cell2');
const cell3 = document.querySelector('.Cell3');
const cell4 = document.querySelector('.Cell4');
const cell5 = document.querySelector('.Cell5');
const cell6 = document.querySelector('.Cell6');
const cell7 = document.querySelector('.Cell7');
const cell8 = document.querySelector('.Cell8');
const cell9 = document.querySelector('.Cell9');

let occupCell1 = "";
let occupCell2 = "";
let occupCell3 = "";
let occupCell4 = "";
let occupCell5 = "";
let occupCell6 = "";
let occupCell7 = "";
let occupCell8 = "";
let occupCell9 = "";

let first_turn = true;
let second_turn = false;

cell1.addEventListener("click", function(){
  if(occupCell1 == "" && first_turn === true){
    document.querySelector(".O-Cell1").style.visibility = "visible";
    occupCell1 = "O";
    first_turn = false;
    second_turn = true;

  }else if(occupCell1 == "" && second_turn === true){
    document.querySelector(".X-Cell1").style.visibility = "visible";
    occupCell1 = "X";
    first_turn = true;
    second_turn = false;
  }
  win_condi();
});


cell2.addEventListener("click", function(){
  if(occupCell2 == "" && first_turn === true){
    document.querySelector(".O-Cell2").style.visibility = "visible";
    occupCell2 = "O";
    first_turn = false;
    second_turn = true;

  }else if(occupCell2 == "" && first_turn === false){
    document.querySelector(".X-Cell2").style.visibility = "visible";
    occupCell2 = "X";
    first_turn = true;
    second_turn = false;
  }
  win_condi();
});


cell3.addEventListener("click", function(){
  if(occupCell3 == "" && first_turn === true){
    document.querySelector(".O-Cell3").style.visibility = "visible";
    occupCell3 = "O";
    first_turn = false;
    second_turn = true;

  }else if(occupCell3 == "" && first_turn === false){
    document.querySelector(".X-Cell3").style.visibility = "visible";
    occupCell3 = "X";
    first_turn = true;
    second_turn = false;

  }
  win_condi();

});


cell4.addEventListener("click", function(){
  if(occupCell4 == "" && first_turn === true){
    document.querySelector(".O-Cell4").style.visibility = "visible";
    occupCell4 = "O";
    first_turn = false;
    second_turn = true;

  }else if(occupCell4 == "" && first_turn === false){
    document.querySelector(".X-Cell4").style.visibility = "visible";
    occupCell4 = "X";
    first_turn = true;
    second_turn = false;
  }
  win_condi();
});


cell5.addEventListener("click", function(){
  if(occupCell5 == "" && first_turn === true){
    document.querySelector(".O-Cell5").style.visibility = "visible";
    occupCell5 = "O";
    first_turn = false;
    second_turn = true;

  }else if(occupCell5 == "" && first_turn === false){
    document.querySelector(".X-Cell5").style.visibility = "visible";
    occupCell5 = "X";
    first_turn = true;
    second_turn = false;
  }
  win_condi();
});


cell6.addEventListener("click", function(){
  if(occupCell6 == "" && first_turn === true){
    document.querySelector(".O-Cell6").style.visibility = "visible";
    occupCell6 = "O";
    first_turn = false;
    second_turn = true;

  }else if(occupCell6 == "" && first_turn === false){
    document.querySelector(".X-Cell6").style.visibility = "visible";
    occupCell6 = "X";
    first_turn = true;
    second_turn = false;
  }
  win_condi();
});


cell7.addEventListener("click", function(){
  if(occupCell7 == "" && first_turn === true){
    document.querySelector(".O-Cell7").style.visibility = "visible";
    occupCell7 = "O";
    first_turn = false;
    second_turn = true;

  }else if(occupCell7 == "" && first_turn === false){
    document.querySelector(".X-Cell7").style.visibility = "visible";
    occupCell7 = "X";
    first_turn = true;
    second_turn = false;
  }
  win_condi();
});


cell8.addEventListener("click", function(){
  if(occupCell8 == "" && first_turn === true){
    document.querySelector(".O-Cell8").style.visibility = "visible";
    occupCell8 = "O";
    first_turn = false;
    second_turn = true;

  }else if(occupCell8 == "" && first_turn === false){
    document.querySelector(".X-Cell8").style.visibility = "visible";
    occupCell8 = "X";
    first_turn = true;
    second_turn = false;
  }
  win_condi();
});


cell9.addEventListener("click", function(){
  if(occupCell9 == "" && first_turn === true){
    document.querySelector(".O-Cell9").style.visibility = "visible";
    occupCell9 = "O";
    first_turn = false;
    second_turn = true;

  }else if(occupCell9 == "" && first_turn === false){
    document.querySelector(".X-Cell9").style.visibility = "visible";
    occupCell9 = "X";
    first_turn = true;
    second_turn = false;
  }
  win_condi();
});
const blankWins = document.querySelector('.size');


function win_condi(){

  if((occupCell1 == "O" && occupCell2 == "O" && occupCell3 == "O") ||
    (occupCell1 == "X" && occupCell2 == "X" && occupCell3 == "X")){
      document.querySelector(".O-Cell4").remove();
      document.querySelector(".X-Cell4").remove();
      document.querySelector(".O-Cell1").remove();
      document.querySelector(".X-Cell1").remove();
      document.querySelector(".O-Cell2").remove();
      document.querySelector(".X-Cell2").remove();
      document.querySelector(".O-Cell3").remove();
      document.querySelector(".X-Cell3").remove();
      document.querySelector(".O-Cell5").remove();
      document.querySelector(".X-Cell5").remove();
      document.querySelector(".O-Cell6").remove();
      document.querySelector(".X-Cell6").remove();
      document.querySelector(".O-Cell7").remove();
      document.querySelector(".X-Cell7").remove();
      document.querySelector(".O-Cell8").remove();
      document.querySelector(".X-Cell8").remove();
      document.querySelector(".O-Cell9").remove();
      document.querySelector(".X-Cell9").remove();
      document.querySelector(".board").remove();


    blankWins.textContent = occupCell1 + " Wins!";
  }

  if ((occupCell4 == "O" && occupCell5 == "O" && occupCell6 == "O") ||
    (occupCell4 == "X" && occupCell5 == "X" && occupCell6 == "X")) {

      document.querySelector(".O-Cell4").remove();
      document.querySelector(".X-Cell4").remove();
      document.querySelector(".O-Cell1").remove();
      document.querySelector(".X-Cell1").remove();
      document.querySelector(".O-Cell2").remove();
      document.querySelector(".X-Cell2").remove();
      document.querySelector(".O-Cell3").remove();
      document.querySelector(".X-Cell3").remove();
      document.querySelector(".O-Cell5").remove();
      document.querySelector(".X-Cell5").remove();
      document.querySelector(".O-Cell6").remove();
      document.querySelector(".X-Cell6").remove();
      document.querySelector(".O-Cell7").remove();
      document.querySelector(".X-Cell7").remove();
      document.querySelector(".O-Cell8").remove();
      document.querySelector(".X-Cell8").remove();
      document.querySelector(".O-Cell9").remove();
      document.querySelector(".X-Cell9").remove();
      document.querySelector(".board").remove();

      blankWins.textContent = occupCell4 + " Wins!";

  }

  if ((occupCell7 == "O" && occupCell8 == "O" && occupCell9 == "O") ||
    (occupCell7 == "X" && occupCell8 == "X" && occupCell9 == "X")) {
      document.querySelector(".O-Cell4").remove();
      document.querySelector(".X-Cell4").remove();
      document.querySelector(".O-Cell1").remove();
      document.querySelector(".X-Cell1").remove();
      document.querySelector(".O-Cell2").remove();
      document.querySelector(".X-Cell2").remove();
      document.querySelector(".O-Cell3").remove();
      document.querySelector(".X-Cell3").remove();
      document.querySelector(".O-Cell5").remove();
      document.querySelector(".X-Cell5").remove();
      document.querySelector(".O-Cell6").remove();
      document.querySelector(".X-Cell6").remove();
      document.querySelector(".O-Cell7").remove();
      document.querySelector(".X-Cell7").remove();
      document.querySelector(".O-Cell8").remove();
      document.querySelector(".X-Cell8").remove();
      document.querySelector(".O-Cell9").remove();
      document.querySelector(".X-Cell9").remove();
      document.querySelector(".board").remove();

      blankWins.textContent = occupCell7 + " Wins!";
  }

  if ((occupCell1 == "O" && occupCell4 == "O" && occupCell7 == "O") ||
    (occupCell1 == "X" && occupCell4 == "X" && occupCell7 == "X")) {
      document.querySelector(".O-Cell4").remove();
      document.querySelector(".X-Cell4").remove();
      document.querySelector(".O-Cell1").remove();
      document.querySelector(".X-Cell1").remove();
      document.querySelector(".O-Cell2").remove();
      document.querySelector(".X-Cell2").remove();
      document.querySelector(".O-Cell3").remove();
      document.querySelector(".X-Cell3").remove();
      document.querySelector(".O-Cell5").remove();
      document.querySelector(".X-Cell5").remove();
      document.querySelector(".O-Cell6").remove();
      document.querySelector(".X-Cell6").remove();
      document.querySelector(".O-Cell7").remove();
      document.querySelector(".X-Cell7").remove();
      document.querySelector(".O-Cell8").remove();
      document.querySelector(".X-Cell8").remove();
      document.querySelector(".O-Cell9").remove();
      document.querySelector(".X-Cell9").remove();
      document.querySelector(".board").remove();

      blankWins.textContent = occupCell1 + " Wins!";

  }

  if ((occupCell2 == "O" && occupCell5 == "O" && occupCell8 == "O") ||
    (occupCell2 == "X" && occupCell5 == "X" && occupCell8 == "X")) {
      document.querySelector(".O-Cell4").remove();
      document.querySelector(".X-Cell4").remove();
      document.querySelector(".O-Cell1").remove();
      document.querySelector(".X-Cell1").remove();
      document.querySelector(".O-Cell2").remove();
      document.querySelector(".X-Cell2").remove();
      document.querySelector(".O-Cell3").remove();
      document.querySelector(".X-Cell3").remove();
      document.querySelector(".O-Cell5").remove();
      document.querySelector(".X-Cell5").remove();
      document.querySelector(".O-Cell6").remove();
      document.querySelector(".X-Cell6").remove();
      document.querySelector(".O-Cell7").remove();
      document.querySelector(".X-Cell7").remove();
      document.querySelector(".O-Cell8").remove();
      document.querySelector(".X-Cell8").remove();
      document.querySelector(".O-Cell9").remove();
      document.querySelector(".X-Cell9").remove();
      document.querySelector(".board").remove();

      blankWins.textContent = occupCell2 + " Wins!";
  }

  if ((occupCell3 == "O" && occupCell6 == "O" && occupCell9 == "O") ||
    (occupCell3 == "X" && occupCell6 == "X" && occupCell9 == "X")) {
      document.querySelector(".O-Cell4").remove();
      document.querySelector(".X-Cell4").remove();
      document.querySelector(".O-Cell1").remove();
      document.querySelector(".X-Cell1").remove();
      document.querySelector(".O-Cell2").remove();
      document.querySelector(".X-Cell2").remove();
      document.querySelector(".O-Cell3").remove();
      document.querySelector(".X-Cell3").remove();
      document.querySelector(".O-Cell5").remove();
      document.querySelector(".X-Cell5").remove();
      document.querySelector(".O-Cell6").remove();
      document.querySelector(".X-Cell6").remove();
      document.querySelector(".O-Cell7").remove();
      document.querySelector(".X-Cell7").remove();
      document.querySelector(".O-Cell8").remove();
      document.querySelector(".X-Cell8").remove();
      document.querySelector(".O-Cell9").remove();
      document.querySelector(".X-Cell9").remove();
      document.querySelector(".board").remove();

      blankWins.textContent = occupCell3 + " Wins!";

  }

  if ((occupCell1 == "O" && occupCell5 == "O" && occupCell9 == "O") ||
    (occupCell1 == "X" && occupCell5 == "X" && occupCell9 == "X")) {
      document.querySelector(".O-Cell4").remove();
      document.querySelector(".X-Cell4").remove();
      document.querySelector(".O-Cell1").remove();
      document.querySelector(".X-Cell1").remove();
      document.querySelector(".O-Cell2").remove();
      document.querySelector(".X-Cell2").remove();
      document.querySelector(".O-Cell3").remove();
      document.querySelector(".X-Cell3").remove();
      document.querySelector(".O-Cell5").remove();
      document.querySelector(".X-Cell5").remove();
      document.querySelector(".O-Cell6").remove();
      document.querySelector(".X-Cell6").remove();
      document.querySelector(".O-Cell7").remove();
      document.querySelector(".X-Cell7").remove();
      document.querySelector(".O-Cell8").remove();
      document.querySelector(".X-Cell8").remove();
      document.querySelector(".O-Cell9").remove();
      document.querySelector(".X-Cell9").remove();
      document.querySelector(".board").remove();

      blankWins.textContent = occupCell1 + " Wins!";

  }

  if ((occupCell3 == "O" && occupCell5 == "O" && occupCell7 == "O") ||
    (occupCell3 == "X" && occupCell5 == "X" && occupCell7 == "X")) {
      document.querySelector(".O-Cell4").remove();
      document.querySelector(".X-Cell4").remove();
      document.querySelector(".O-Cell1").remove();
      document.querySelector(".X-Cell1").remove();
      document.querySelector(".O-Cell2").remove();
      document.querySelector(".X-Cell2").remove();
      document.querySelector(".O-Cell3").remove();
      document.querySelector(".X-Cell3").remove();
      document.querySelector(".O-Cell5").remove();
      document.querySelector(".X-Cell5").remove();
      document.querySelector(".O-Cell6").remove();
      document.querySelector(".X-Cell6").remove();
      document.querySelector(".O-Cell7").remove();
      document.querySelector(".X-Cell7").remove();
      document.querySelector(".O-Cell8").remove();
      document.querySelector(".X-Cell8").remove();
      document.querySelector(".O-Cell9").remove();
      document.querySelector(".X-Cell9").remove();
      document.querySelector(".board").remove();

      blankWins.textContent = occupCell3 + " Wins!";
  }

  if(occupCell1 != "" && occupCell2 != "" && occupCell3 != "" &&
    occupCell4 != "" && occupCell5 != "" && occupCell6 != "" &&
    occupCell7 != "" && occupCell8 != "" && occupCell9 != ""){
      document.querySelector(".O-Cell4").remove();
      document.querySelector(".X-Cell4").remove();
      document.querySelector(".O-Cell1").remove();
      document.querySelector(".X-Cell1").remove();
      document.querySelector(".O-Cell2").remove();
      document.querySelector(".X-Cell2").remove();
      document.querySelector(".O-Cell3").remove();
      document.querySelector(".X-Cell3").remove();
      document.querySelector(".O-Cell5").remove();
      document.querySelector(".X-Cell5").remove();
      document.querySelector(".O-Cell6").remove();
      document.querySelector(".X-Cell6").remove();
      document.querySelector(".O-Cell7").remove();
      document.querySelector(".X-Cell7").remove();
      document.querySelector(".O-Cell8").remove();
      document.querySelector(".X-Cell8").remove();
      document.querySelector(".O-Cell9").remove();
      document.querySelector(".X-Cell9").remove();
      document.querySelector(".board").remove();

      blankWins.textContent = "Draw!";


  }

}
<<<<<<< HEAD
=======


if (first_turn === true && second_turn === false){
  document.querySelector(".player1").style.visibility = "visible";
  document.querySelector(".player2").style.visibility = "hidden";
}else if(first_turn === false && second_turn === true){
  document.querySelector(".player1").style.visibility = "hidden";
  document.querySelector(".player2").style.visibility = "visible";
}
>>>>>>> 889d2d7def4e0a63f96ad4cd9647f5fd79bfb7b9
