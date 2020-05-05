let btnStart = document.querySelector(".btn-start");
let h1_heading = document.querySelectorAll("h1")[0];
let winner;

let playerOne; 
let PlayerOneDiceImage;
let playerOneDiceLocation;
let setPlayerOneDice = document.querySelector(".player-one");

let playerTwo; 
let playerTwoDiceImage;
let setPlayerTwoDice = document.querySelector(".player-two");

// console.log(h1_heading);

// console.log(btnStart);



function rollDice(){
    playerOne = Math.floor((Math.random() * 6) + 1);
    PlayerOneDiceImage = "dice" + playerOne + ".png";
    // console.log(PlayerOneDiceImage);
    playerOneDiceLocation = 'images/' + PlayerOneDiceImage;
    // console.log(playerOneDiceLocation);
    setPlayerOneDice.setAttribute("src",playerOneDiceLocation);
    playerTwo = Math.floor((Math.random() * 6) + 1);
    playerTwoDiceImage = "dice" + playerTwo + ".png";
    setPlayerTwoDice.setAttribute("src","images/"+ playerTwoDiceImage);

    verdict(playerOne,playerTwo);
    
}

function verdict(playerOne, playerTwo){
    if (playerOne > playerTwo){
        winner = "Player 1 Wins !";
    }else if(playerOne < playerTwo){
        winner = "Player 2 Wins !";
    }else{
        winner = "Draw";
    }
}


btnStart.addEventListener("click",function(event){
    rollDice();
    h1_heading.innerHTML = winner;
});


