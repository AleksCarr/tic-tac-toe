
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

cell1.addEventListener("click", function(){
  if(occupCell1 == "" && first_turn === true){
    document.querySelector(".O-Cell1").style.visibility = "visible";
    occupCell1 = "O";
    first_turn = false;

  }else if(occupCell1 == "" && first_turn === false){
    document.querySelector(".X-Cell1").style.visibility = "visible";
    occupCell1 = "X";
    first_turn = true;
  }

});


cell2.addEventListener("click", function(){
  if(occupCell1 == "" && first_turn === true){
    document.querySelector(".O-Cell2").style.visibility = "visible";
    occupCell1 = "O";
    first_turn = false;

  }else if(occupCell1 == "" && first_turn === false){
    document.querySelector(".X-Cell2").style.visibility = "visible";
    occupCell1 = "X";
    first_turn = true;
  }
});


cell3.addEventListener("click", function(){
  if(occupCell1 == "" && first_turn === true){
    document.querySelector(".O-Cell3").style.visibility = "visible";
    occupCell1 = "O";
    first_turn = false;

  }else if(occupCell1 == "" && first_turn === false){
    document.querySelector(".X-Cell3").style.visibility = "visible";
    occupCell1 = "X";
    first_turn = true;
  }

});


cell4.addEventListener("click", function(){
  if(occupCell1 == "" && first_turn === true){
    document.querySelector(".O-Cell4").style.visibility = "visible";
    occupCell1 = "O";
    first_turn = false;

  }else if(occupCell1 == "" && first_turn === false){
    document.querySelector(".X-Cell4").style.visibility = "visible";
    occupCell1 = "X";
    first_turn = true;
  }
});


cell5.addEventListener("click", function(){
  if(occupCell1 == "" && first_turn === true){
    document.querySelector(".O-Cell5").style.visibility = "visible";
    occupCell1 = "O";
    first_turn = false;

  }else if(occupCell1 == "" && first_turn === false){
    document.querySelector(".X-Cell5").style.visibility = "visible";
    occupCell1 = "X";
    first_turn = true;
  }

});


cell6.addEventListener("click", function(){
  if(occupCell1 == "" && first_turn === true){
    document.querySelector(".O-Cell6").style.visibility = "visible";
    occupCell1 = "O";
    first_turn = false;

  }else if(occupCell1 == "" && first_turn === false){
    document.querySelector(".X-Cell6").style.visibility = "visible";
    occupCell1 = "X";
    first_turn = true;
  }
});


cell7.addEventListener("click", function(){
  if(occupCell1 == "" && first_turn === true){
    document.querySelector(".O-Cell7").style.visibility = "visible";
    occupCell1 = "O";
    first_turn = false;

  }else if(occupCell1 == "" && first_turn === false){
    document.querySelector(".X-Cell7").style.visibility = "visible";
    occupCell1 = "X";
    first_turn = true;
  }
});


cell8.addEventListener("click", function(){
  if(occupCell1 == "" && first_turn === true){
    document.querySelector(".O-Cell8").style.visibility = "visible";
    occupCell1 = "O";
    first_turn = false;

  }else if(occupCell1 == "" && first_turn === false){
    document.querySelector(".X-Cell8").style.visibility = "visible";
    occupCell1 = "X";
    first_turn = true;
  }
});


cell9.addEventListener("click", function(){
  if(occupCell1 == "" && first_turn === true){
    document.querySelector(".O-Cell9").style.visibility = "visible";
    occupCell1 = "O";
    first_turn = false;

  }else if(occupCell1 == "" && first_turn === false){
    document.querySelector(".X-Cell9").style.visibility = "visible";
    occupCell1 = "X";
    first_turn = true;
  }
});
