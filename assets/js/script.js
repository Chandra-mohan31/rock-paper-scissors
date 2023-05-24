// javascript file

const toolArr = ["paper","rock","scissor"];

//generate a random rock,paper or scissor
const generatRandomValueByComputer = () => {
    const randomIndex = Math.floor(Math.random() * toolArr.length);
    console.log(randomIndex);
    const imgElement = document.getElementById("computer_output");
    imgElement.src = `assets/images/${toolArr[randomIndex]}.png`;
    return toolArr[randomIndex];
}

const resetCards = () => {
    toolArr.map(ele => {
        
            const selectedDiv = document.getElementById(ele);
            selectedDiv.style.opacity = 1;
        
    });
    const imgElement = document.getElementById("computer_output");
    imgElement.src = `assets/images/ready.png`;


}

let userScore = 0;
let computerScore = 0;


const userChoice = (userChoice) => {

    let computerChoice = generatRandomValueByComputer();
    toolArr.map(ele => {
        if(userChoice != ele){
            const selectedDiv = document.getElementById(ele);
            selectedDiv.style.opacity = 0;
        }
    });
  
    const compScore = document.getElementById("computer_score");
    const uScore = document.getElementById("user_score");
    if (userChoice === "rock" && computerChoice === "paper") {
        computerScore += 1;
        compScore.innerHTML = computerScore;
      } else if (userChoice === "rock" && computerChoice === "scissor") {
        userScore += 1;
        uScore.innerHTML = userScore;
      } else if (userChoice === "paper" && computerChoice === "rock") {
        userScore += 1;
        uScore.innerHTML = userScore;

      } else if (userChoice === "paper" && computerChoice === "scissor") {
        computerScore += 1;
        compScore.innerHTML = computerScore;

      } else if (userChoice === "scissor" && computerChoice === "rock") {
        computerScore += 1;
        compScore.innerHTML = computerScore;

      } else if (userChoice === "scissor" && computerChoice === "paper") {
        userScore += 1;
        uScore.innerHTML = userScore;

      }
      const resCont = document.getElementById("result_container");
      if(userScore == 3){
        // alert('You won!');
        const successDIV = document.createElement("div");
        successDIV.textContent = "You won!";
        const restartBtn = document.createElement("button");
        restartBtn.textContent = "NEW GAME";
        restartBtn.addEventListener('click',()=>{
            window.location.reload();
        });
        successDIV.appendChild(restartBtn);
        document.getElementById("short_game_desc").remove();
        resCont.appendChild(successDIV);
        const gameCont = document.getElementsByClassName("game_container");
        gameCont[0].style.visibility = 'hidden';
        // window.location.reload();
    }else if(computerScore == 3){
        // alert("Computer won!");
        const computerWinDIV = document.createElement("div");
        computerWinDIV.textContent = "Computer won!";
        
        const restartBtn = document.createElement("button");
        restartBtn.textContent = "NEW GAME";
        restartBtn.addEventListener('click',()=>{
            window.location.reload();
        })
        computerWinDIV.appendChild(restartBtn);
        document.getElementById("short_game_desc").remove();

        resCont.appendChild(computerWinDIV);
        const gameCont = document.getElementsByClassName("game_container");

        gameCont[0].style.visibility = 'hidden';

        // window.location.reload();

        
    }
    setTimeout(resetCards,1500);
    


}
