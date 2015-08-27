/*
Flavio Cassini
Student Number: 0004664025
SDI
Assignment Functions
Instructor Lee Lewis
 */

//varaiables
var lotteryPower = confirm("press ok for lottery press cancel for powerball.");
var myRandom;// variablle myRandom to make the numbers random and round.
var myRandom2;
var tickets = prompt("How many Florida lottery tickets will you like to generate?"); //prompting for a number for how many to generate tickets




// I could not figure our how to join this while loop to tickets variable and call next function. Or make new function and have not interfere with the next.

if(lotteryPower == true) {


    function randomNumGen(max, min, num) { //generating the numbers and also rounding.
        var randomNum = [];
        for (var i = 0; i < num; i++) {
            randomNum[i] = Math.random() * (max - min) + min;
            randomNum[i] = Math.round(randomNum[i]);
        }
        return randomNum;
    }
    myRandom = randomNumGen(1, 53, 6); //assigning variable of reandomNumGen to myRandom
    while (tickets > 0) {
        console.log( myRandom = randomNumGen(1,53,6) + " Florida lottery numbers"); //printing out the process as well as duplicating the amount of lotto tickets user asked for.
        tickets--

    }
}else{
    function randomNumGen2(max, min, num) { //generating the numbers and also rounding.
        var randomNum2 = [];
        for (var b = 0; b < num; b++) {
            randomNum2[b] = Math.random() * (max - min) + min;
            randomNum2[b] = Math.round(randomNum2[b]);
        }
        return randomNum2;

    }
    myRandom2 = randomNumGen2(1, 59, 5, 1, 35, 1);
    while (tickets > 0) {
        console.log(myRandom2 = randomNumGen2(1,59,5) + " lottery numbers "  + randomNumGen2(1,35,1) + " powerball number "); //printing out the process as well as duplicating the amount of lotto tickets user asked for.
        tickets--
    }
}

