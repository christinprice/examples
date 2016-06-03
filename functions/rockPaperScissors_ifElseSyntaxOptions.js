var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

//syntax option 1
function compare(choice1,choice2){
    if (choice1===choice2){
        return "The result is a tie!";
    } else if (choice1==="rock"){
        if (choice2 === "scissors"){
            return "rock wins";
        } else {
            return "paper wins";
        }
    } else if (choice1==="paper"){
        if (choice2 === "rock"){
            return "paper wins";
        } else {
            return "scissors wins";
        }
    } else {
        if (choice2 === "rock"){
            return "rock wins";
        } else {
            return "scissors wins";
        }
    }
};

//syntax option 2 using SWITCH
function compare(choice1,choice2){
    if (choice1===choice2){
        return "The result is a tie!";
    }

    switch (choice1) {
        case 'rock':
            return choice2 === 'scissors' ? "rock wins" : "paper wins";

         case 'paper':
            return choice2 === 'rock' ? "paper wins" : "scissors wins";

         case 'scissors':
            return choice2 === 'paper' ? "scissors wins" : "rock wins";

    }

};


compare(userChoice,computerChoice);
