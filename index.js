// first acces userScore,compScore and the choices ,to know which option is got selected by user 
// 
//







let userscr=0;
let compscr=0;





const choices=document.querySelectorAll(".choice");     // accessed the rock,paper,scissor from user side
const msg = document.querySelector("#msg");             // accessed the msg paragraph.
const yourScore = document.querySelector("#yourScore");
const compScore = document.querySelector("#compScore");     // accessed compScore & userScore

choices.forEach((choice)=>{                           // forEach function to acces all choice of choices
  choice.addEventListener("click",()=>{
     const userChoice =choice.getAttribute("id");
     playGame(userChoice);
  })
})


          
                                                                 
 // now computer should also select a random choice            
// Math.random() is used here for generate any random choice.

 const genCompChoice = () =>{                               //New object for generate compChoice
  let options=["rock","paper","scissor"];
  const randomIdx= Math.floor(Math.random()*3);
  return options[randomIdx]; // randomIdx returned to options
 }


const drawGame=()=>{                                      // new object for draw game
  console.log("Game was draw");
  msg.innerText="Game was Draw, Play Again";
  msg.style.backgroundColor="yellow";

}


const showWinner = (userWin,userChoice,compChoice) => {                         // New object for showCase of winner
  if(userWin){
   userscr++ ;
   yourScore.innerText= userscr;
     console.log("You Win !!!");
    msg.innerText=`You win! your ${userChoice} beats ${compChoice}.` ;
    msg.style.backgroundColor="green";

    
  } else {
    compscr++ ;
    compScore.innerText= compscr;
    console.log("You Lost");
    msg.innerText=`You Lost , ${compChoice} beats your ${userChoice}.` ;
    msg.style.backgroundColor="red";
    msg.style.color=" #0c0937";
  }
}




const playGame = (userChoice)=>{                              
  console.log("user choice =",userChoice);                // accessed user choice

  // call the compChoice
  const compChoice=genCompChoice();
  console.log("comp choice = ",compChoice);              // accessed comp choice



 // now compare userChoice & compChoice
 if(userChoice === compChoice){
  drawGame();
 } else {
  let userWin = true;
  if(userChoice === "rock")  {   
    userWin = compChoice === "scissor" ? true : false ;
  } else 
  if(userChoice === "paper") {
    userWin = compChoice === "rock" ? true : false ;
  } else {
    userWin = compChoice === "paper" ? true : false ;
  }
   showWinner(userWin,userChoice,compChoice);
 }
}

