const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Jogador: ${player}`;
    computerText.textContent = `CPU: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
      case 1:
        computer = "PEDRA";
        break;
      case 2:
        computer = "PAPEL";
        break;
      case 3:
        computer = "TESOURA";
        break;
    }
}
function checkWinner(){
    if(player == computer){
      return "EMPATE!";
    }
    else if(computer == "PEDRA"){
      return (player == "PAPEL") ? "Você venceu!" : "você perdeu!"
    }
    else if(computer == "PAPEL"){
      return (player == "TESOURA") ? "Você venceu!" : "você perdeu!"
    }
    else if(computer == "TESOURA"){
      return (player == "PEDRA") ? "Você venceu!" : "você perdeu!"
    }
}
