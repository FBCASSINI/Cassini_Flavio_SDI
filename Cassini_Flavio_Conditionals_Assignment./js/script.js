/*Flavio Cassini
Student# 0004664025
Instructor Lee Lewis
Web Development & Design
Assignment: Conditionals*/


var cookiePrice = prompt("Price of Cookie?"); //storing the input from user of the price of cookie
console.log("Price of Cookie is $" + cookiePrice); //printing out variable cookie
var cookieQTY = prompt("How many do you want to buy?"); //storing the input from the user of the quantity of cookie
console.log(cookieQTY + " Cookies purchased"); //printing out variable cookieQTY
var candyPrice = prompt("Price Of Candy?"); //Storing the input from the user of the price of Candy
console.log("Price of candy is $" + candyPrice); //printing out variable candyPrice
var candyQTY = prompt ("How many do you want to buy?");//Storing the input from the user of the quantity of candy
console.log(candyQTY + " Candies purchased"); //Printing out Varaible pantsQTY
var donation = confirm("Would you like to donate $10 to St. Jude Medical Research?"); //confirming to get boolean
console.log("Would you like to donate $10 to St. Jude Medical Research " + donation); //console log print
var donation5 = confirm("would you also like to donate $5 to UNICEF"); // confirm to get boolean
console.log("Would you like to donate to UNICEF?"); //console log print
if(donation && donation5) { // logical operator compairing if both are true
    var tenDonation = [10]; // storing donation input
    var fiveDonation = [5]; // storing donation input

    var shoppingCart = [Number(cookiePrice), Number(cookieQTY), Number(candyPrice), Number(candyQTY), Number(tenDonation), Number(fiveDonation)]; //using the variable shoppingCart to gather info on variables. I also set it up so the variables are converted to numbers.
    console.log(shoppingCart); //Printing out variable shoppingCart

    var totalPrice = shoppingCart[0] * shoppingCart[1] + shoppingCart[2] * shoppingCart[3] + shoppingCart[4] + shoppingCart[5]; //totaling all variables into array format
    console.log("Total price of food bought is $" + totalPrice); //printing out total price
    alert("Your total price of food bought + $15 Donation to St. Jude Medical Research & UNICEF total is $" + totalPrice); //printing out total to the user using alert box.

}else if(donation > donation5) { // uising relational operator to see if true or false
    var tenDonation2 = [10]; // storing input for donations
    var shoppingCart2 = [Number(cookiePrice), Number(cookieQTY), Number(candyPrice), Number(candyQTY), Number(tenDonation2)]; //using the variable shoppingCart to gather info on variables. I also set it up so the variables are converted to numbers.
    var totalPrice2 = shoppingCart2[0] * shoppingCart2[1] + shoppingCart2[2] * shoppingCart2[3] + shoppingCart2[4]; //totaling all variables into array format
    console.log("Total price of food bought + $10 St. Jude Medical Research = $" + totalPrice2); //printing out total price
    alert("Your total price is  $" + totalPrice2);
} else if(!(donation == donation5)) { //using the not logical operator to flip values of true & false
    var fiveDonation3 = [5]; //storing variable.
    var shoppingCart3 = [Number(cookiePrice), Number(cookieQTY), Number(candyPrice), Number(candyQTY), Number(fiveDonation3)]; //using the variable shoppingCart to gather info on variables. I also set it up so the variables are converted to numbers.
    var totalPrice3 = shoppingCart3[0] * shoppingCart3[1] + shoppingCart3[2] * shoppingCart3[3] + shoppingCart3[4]; //totaling all variables into array format
    console.log("Total price of food bought + $5 To UNICEF = $" + totalPrice3); //printing out total price
    alert("Your total price is  $" + totalPrice3); //alert boxing total price
}else {
    var shoppingCart4 = [Number(cookiePrice), Number(cookieQTY), Number(candyPrice), Number(candyQTY)]; //using the variable shoppingCart to gather info on variables. I also set it up so the variables are converted to numbers.
    var totalPrice4 = shoppingCart4[0] * shoppingCart4[1] + shoppingCart4[2] * shoppingCart4[3]; //totaling all variables into array format
    console.log("total price of food is $" + totalPrice4); //printing out consol.log with total price
    alert("Your total price is with no donations $" + totalPrice4); //printing out total to the user using alert box.
}

//tearnaney
var childsAge = 9;
(childsAge > 13) ? console.log("You can watch the movie.") : console.log("Come back in 4 more years, kid."); //using the ternary operators to shorten conditional expression.

/*Grade details:

Technical/Flowchart: Fair (4/10pts) Your variable declarations should be in the internal storage symbol as you have them, but the prompt assignments should be in a separate data symbol. Your support details for the conditionals should include information on what's being compared, not what operator you're using. You don't need a process symbol for the "else", you only need to indicate that this is the "false" side of the condition with a label. The data symbols inside each conditional should be process symbols because they are not asking the user for data. You're also missing much of the logic within each of the conditional code blocks. Remember that everything in the code must be reflected in the flowchart.
Technical/Calculation: Good (4/5pts) You're assigning values to tenDonation and fiveDonation incorrectly; you don't surround the numbers with square brackets.
Technical/Conditionals: Good (11/15pts) Your comparison of donation > donation5 is an incorrect setup as you would never ask if true is greater than false. It would be more likely that you would ask if donation && !donation5 to compare Boolean values.
Technical/Else If Statement: Excellent (5/5pts)
Technical/Logical Operator: Excellent (5/5pts)
Technical/Ternary Statement: Excellent (5/5pts)
Technical/User Prompts: Good (4/5pts)  You're not casting the prompted values to number data types before using it in a calculation.
Technical/Validation: Zero (0/10pts) You're not validatiing any of the inputs as required by the assignment.
Technical/Comments: Excellent (10/10pts)
GitHub/Delivery: Excellent (10/10pts)
GitHub/Files: Excellent (10/10pts)
Professionalism/Completeness: Good (4/5pts) You sohuld be outputting to either alerts or the console (preferably, the console), but not both. You also want to be sure your outputs are meaningful. Outputting an array without context would be meaningless to a user.
Professionalism/Investment: Excellent (5/5pts)*/
