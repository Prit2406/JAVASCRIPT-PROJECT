let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["Rock" , "Paper" , "Scissors"];
    const ranIdx =  Math.floor(Math.random() * 3);
    return options[ranIdx];
};


const drawGame = () => {
    msg.innerText = "Game was Draw.Play again!";
     msg.style.backgroundColor = "blue";
};
const showWinner = (userWin , userchoice , compChoice) => {
   if(userWin === true){
    userscore++;
    userScorepara.innerText = userscore;
    msg.innerText = `You Win! Your ${userchoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
   }
   else{
    compscore++;
    compScorepara.innerText = compscore;
    msg.innerText = `You lose! ${compChoice} beats Your ${userchoice}`;
     msg.style.backgroundColor = "red";
   }
};
const playGame = (userchoice) => {
     const compChoice = genCompChoice();
      if( userchoice === compChoice){
        drawGame();
      }
      else{
        let userWin = true ;
        if(userchoice === "Rock"){
             userWin = compChoice === "Paper" ? false : true;
        }
        else if(userchoice === "Paper"){
             userWin = compChoice === "Rock" ? true : false;
        }
        else{
             userWin = compChoice === "Rock" ? false : true;
        }
          showWinner(userWin , userchoice , compChoice);
      }
    

};


choices.forEach((choice) => {
    
     choice.addEventListener("click" , () => {
          const userchoice = choice.getAttribute("id");
          playGame(userchoice);
     });
});
