/*
Flavio Cassini
Student Number: 0004664025
SDI
Assignment Functions
Instructor Lee Lewis
 */

//varaiables

var myRandom;// variablle myRandom to make the numbers random and round.
var tickets = prompt("How many Florida lottery tickets will you like to generate?"); //prompting for a number for how many to generate tickets


//function to generate florida lottery numbers
    function numberValidate(number) {  //validating prompt to make sure a number is entered.
        while (number === "") {
            number = prompt("Please enter a number");


    }

}
// I could not figure our how to join this while loop to tickets variable and call next function. Or make new function and have not interfere with the next.




function randomNumGen(max, min, num) { //generating the numbers and also rounding.
        var randomNum = [];
        for (var i = 0; i < num; i++) {
            randomNum[i] = Math.random() * (max - min) + min;
            randomNum[i] = Math.round(randomNum[i]);
        }
        return randomNum;

    }

//function calls
numberValidate(tickets); //function calling t validate the prompt
myRandom = randomNumGen(1,53,6); //assigning variable of reandomNumGen to myRandom


while (tickets > 0) {
    console.log( myRandom = randomNumGen(1,53,6) + " Florida lottery numbers"); //printing out the process as well as duplicating the amount of lotto tickets user asked for.
    tickets--

}

