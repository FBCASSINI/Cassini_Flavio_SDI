/*
Flavio Cassini
Student Number: 0004664025
SDI
Assignment Functions
Instructor Lee Lewis
 */

//varaiables
var tickets = prompt("How many Florida lottery tickets will you like to generate?"); //prompting for a number for how many to generate tickets

var myRandom;// variablle myRandom to make the numbers raandom and round.



//function to generate florida lottery numbers

function numberValidate(number) {  //validating prompt to make sure a number is entered.
    while (number === "") {
        number = prompt("Please enter a number");
    }
    alert("Thank You");
}


function randomNumGen(max, min, num){ //generating the numbers and also rounding.
    var randomNum = [];
    for (var i = 0; i < num; i++) {
        randomNum[i] = Math.random() * (max - min) + min;
        randomNum[i] = Math.round(randomNum[i]);


    }
    return randomNum;

}

//function calls
numberValidate(tickets); //function calling t validate the prompt
myRandom = randomNumGen(1,53,5); //assigning variable of reandomNumGen to myRandom


while (tickets > 0) {
    console.log(myRandom = randomNumGen(1,53,5)); //printing out the process as well as duplicating the amount of lotto tickets user asked for.
    tickets--

}
