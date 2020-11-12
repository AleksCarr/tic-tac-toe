
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

  } if(occupCell1 == "" && second_turn === true){
    document.querySelector(".X-Cell1").style.visibility = "visible";
    occupCell1 = "X";
    first_turn = true;
    second_turn = false;
  }

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
});
