const options = document.querySelectorAll(".playboard__option");
const rock = document.querySelector(".playboard__rock");
const paper = document.querySelector(".playboard__paper");
const scissor = document.querySelector(".playboard__scissors");
const player = document.querySelector(".scoreboard__player");
const computer = document.querySelector(".scoreboard__computer");
var playerPoint = Number(player.dataset.point);
var computerPoint = Number(computer.dataset.point);
var yourMove = document.querySelector(".make-your-move");

player.textContent = playerPoint;
computer.textContent = computerPoint;

var yourPick,computerPick;
console.log(options);
options.forEach(function(e,f){
  e.addEventListener("click",function(){
    computerPick = Math.ceil(Math.random() * 3);
    yourPick = f + 1;

    
    yourMove.textContent = e.getAttribute("data-choice");

    if(computerPick == yourPick){
      alert("That's tie! Try again!");
    }else{
      switch(yourPick){
        case 1 :
          if(computerPick == 2){
            computerPoint += 1;
            computer.textContent = computerPoint;
          }else{
            playerPoint += 1;
            player.textContent = playerPoint;
          }
        break;
        case 2 :
          if(computerPick == 3){
            computerPoint += 1;
            computer.textContent = computerPoint;
          }else{
            playerPoint += 1;
            player.textContent = playerPoint;
          }
        break;
        case 3 :
          if(computerPick == 1){
            computerPoint += 1;
            computer.textContent = computerPoint;
          }else{
            playerPoint += 1;
            player.textContent = playerPoint;
          }
        break;
      }
    }
    

    
    //console.log("yourpick is " + yourPick + "and computer pick is " + computerPick);
  })
})