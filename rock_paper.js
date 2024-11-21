let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const message=document.querySelector("#msg");
const user_Score=document.querySelector("#user-score");
const comp_Score=document.querySelector("#comp-score");


const showWinner=(userWinner,choiceId,comp)=>{
    if(userWinner){
        userScore++;
        console.log("You win!");
        message.innerText=`You win! Your ${choiceId} beats ${comp}`;
        user_Score.innerText=userScore;
        message.style.background="green";
    }
    else{
        compScore++;
        console.log("You lost.");
        message.innerText=`You lost ${comp} beats your ${choiceId}`;
        message.style.background="red";
    }
}
const compChoice=()=>{
    let arr=["rock","paper","scissors"];
    const indx=Math.floor(Math.random()*3);
    return arr[indx];
}
const game=(choiceId)=>{
    const comp=compChoice();
    console.log("user choice is ",choiceId);
    console.log("comp choice is ",comp);

    if(comp===choiceId){
        console.log("Game is draw");
        message.innerText="Game is Draw";
    }
    else{
        let userWin=true;
        if(comp=='rock'){
            userWin=choiceId=='paper'?true:false;
        }
        else if(comp=='paper'){
            userWin=choiceId=='scissors'?true:false;
        }
        else{
            userWin=choiceId=='rock'?true:false;
        }
        showWinner(userWin,choiceId,comp);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const choiceId=choice.getAttribute("id");
        game(choiceId);
    }
    );

});
