/*
Flavio Cassini
Student Number: 0004664025
SDI
Assignment Functions
 */

//varaiables
var tickets = prompt("How many Florida lottery tickets will you like to generate?");

var myRandom;



//function to generate florida lottery numbers

function numberValidate(number) {
    while (number === "") {
        number = prompt("Please enter a number");
    }
    alert("Thank You");
}



function randomNumGen(max, min, num){
    var randomNum = [];
    for (var i = 0; i < num; i++) {
        randomNum[i] = Math.random() * (max - min) + min;
        randomNum[i] = Math.round(randomNum[i]);;


    }
    return randomNum;

}



//function calls
numberValidate(tickets);
myRandom = randomNumGen(1,53,5);



while (tickets > 0) {
    console.log(myRandom = randomNumGen(1,53,5));
    tickets--

}
