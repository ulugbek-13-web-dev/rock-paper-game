let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score"); 
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const smallWordUser = "user".fontsize(3).sub();
const smallWordComp = 'comp'.fontsize(3).sub();

// computer section : komputer tanlagan element
function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
// functioon for - result word
function convertToWord(letter){
    if(letter === 'r') return 'Rock';
    if(letter === 'p') return 'Paper';
    if(letter === 's') return 'Scissor';
}
// functions for result
function win(user,computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML =  computerScore;
    result_p.innerHTML = convertToWord(user) + smallWordUser + " beat " + convertToWord(computer) + smallWordComp +  ". You WIN !!! &#128526	"; 
    document.getElementById(user).classList.add("green-border");
    setTimeout(function(){ document.getElementById(user).classList.remove("green-border")},500);
}

function lose(user , computer){
    computerScore++;
    computerScore_span.innerHTML =  computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = convertToWord(user) + smallWordUser + " lost " +convertToWord(computer) + smallWordComp +" .You failed !!! &#128545  "; 
    document.getElementById(user).classList.add("red-border");
    setTimeout(function(){ document.getElementById(user).classList.remove("red-border")},500);
}
function draw(user,computer){
    computerScore_span.innerHTML =  computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = convertToWord(user) + smallWordUser + ' draw ' +convertToWord(computer) +smallWordComp +" .It is DRAW !!! &#128580 " ;
    document.getElementById(user).classList.add("gray-border");
    setTimeout(function(){ document.getElementById(user).classList.remove("gray-border")},500);
}
// game section : user va computer tanlagan elementlarni solishtiradi
function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case 'rs':
        case 'sp':
        case 'pr':
            win(userChoice , computerChoice);
            break;
    
        case 'rp':
        case 'sr':
        case 'ps':
            lose(userChoice , computerChoice);
            break;
    
        case 'rr':
        case 'ss':
        case 'pp':
            draw(userChoice , computerChoice);
            break;
    }
}

// user section : user tanlagan element
function main(){
    rock_div.addEventListener("click", ()=>{
         game("r");
             //console.log(Math.floor(Math.random() * 10)); // Math.random - (0;1) oraliqdagi sonlarni takrorlamasdan chiqaradi
            // Math.floor - eng yaqin va eng kichik sonni chiqaradi
    });

    paper_div.addEventListener("click",()=>{
        game("p")
    });

    scissors_div.addEventListener("click",()=>{
        game("s");
    })
}
main();
