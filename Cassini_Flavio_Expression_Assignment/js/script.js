//Expression Assignment
//Flavio Cassini
//Student Number: 0004664025
//Instructor Lewis



var tShirtPrice = prompt("Price of t-shirt?"); //storing the input from user of the price of t-shirt
console.log("Price of T-shirt is $" + tShirtPrice); //printing out variable tShirtPrice
var tShirtQTY = prompt("How many do you want to buy?"); //storing the input from the user of the quantity of t-shirts
console.log(tShirtQTY + " T-shirts purchased"); //printing out variable tShirtQTY
var pantsPrice = prompt("Price Of Pants?"); //Storing the input from the user of the price of pants
console.log("Price of pants is $" + pantsPrice); //printing out variable pantsPrice
var pantsQTY = prompt ("How many do you want to buy?");//Storing the input from the user of the quantity of pants
console.log(pantsQTY + " Pants purchased"); //Printing out Varaible pantsQTY
var shoppingCart = [Number(tShirtPrice), Number(tShirtQTY), Number(pantsPrice), Number(pantsQTY)]; //using the variable shoppingCart to gather info on variables. I also set it up so the variables are converted to numbers.
console.log(shoppingCart); //Printing out variable shoppingCart
var totalPrice = shoppingCart[0] * shoppingCart[1] + shoppingCart[2] * shoppingCart[3]; //totaling all variables into array format
console.log("Total price of clothes bought is $" + totalPrice); //printing out total price
alert("Your total price is  $" + totalPrice); //printing out total to the user using alert box.


var shortsPrice = 20.00; //price of the shorts.
shortsPrice *= 4;  // quantity of shorts is 4 using the assignment format to shorten the code and times the price by quantity.

console.log("Price of 4 shorts * $20 = $" + shortsPrice); //Printing out total in console log.

var name = ("Flavio Cassini");
console.log(name);
var studentNumber = ("0004664025");
console.log(studentNumber);
var assignment = ("Expression");
console.log(assignment);
var program = ("Web Development & Design");
console.log(program)


/*Grade details:

Technical/Flowchart: Fair (4/10pts) You can put all the variable declarations together in a single internal storage symbol, and then include the prompts after that for the assignments. Your display symbols should be in line with everything else in the flowchart; you code is going from one statement to the next to the next, and this should be reflected in this flowchart as a single run from top to bottom (this will change when we start working with conditionals). Also, every logical flow should end at a terminator, not at a display symbol.
Technical/Calculation: Good (15/20pts) You've got a claculation in your code that uses hard-coded values, which is not what this assignment required.
Technical/Prompts: Excellent (15/15pts)
Technical/Output: Good (11/15pts) Your output should only include that which is required for the calculator, not your name and class information.
Technical/Data Types: Good (8/10pts) Missing the required string variable.
GitHub/Delivery: Excellent (10/10pts)
GitHub/Files: Good (8/10pts) All required files should be compressed into a single zip file.
Professionalism/Completeness: Excellent (5/5pts)
Professionalism/Investment: Excellent (5/5pts) */

