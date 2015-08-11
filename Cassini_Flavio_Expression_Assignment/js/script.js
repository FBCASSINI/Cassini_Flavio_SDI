//Expression Assignment



var tShirtPrice = prompt("Price of t-shirt?"); //storing the input from user of the price of t-shirt
console.log(tShirtPrice); //printing out variable tShirtPrice
var tShirtQTY = prompt("How many do you want to buy?"); //storing the input from the user of the quantity of t-shirts
console.log(tShirtQTY); //printing out variable tShirtQTY
var pantsPrice = prompt("Price Of Pants?"); //Storing the input from the user of the price of pants
console.log(pantsPrice); //printing out variable pantsPrice
var pantsQTY = prompt ("How many do you want to buy?");//Storing the input from the user of the quantity of pants
console.log(pantsQTY); //Printing out Varaible pantsQTY
var shoppingCart = [Number(tShirtPrice), Number(tShirtQTY), Number(pantsPrice), Number(pantsQTY)]; //using the variable shoppingCart to gather info on variables. I also set it up so the variables are converted to numbers.
console.log(shoppingCart); //Printing out variable shoppingCart
var totalPrice = shoppingCart[0] * shoppingCart[1] + shoppingCart[2] * shoppingCart[3]; //totaling all variables into array format
console.log(totalPrice); //printing out total price
alert("Your total price is  $" + totalPrice); //printing out total to the user using alert box.


var shortsPrice = 20.00; //price of the shorts.
shortsPrice *= 4;  // quantity of shorts is 4 using the assignment format to shorten the code and times the price by quantity.

console.log(shortsPrice); //Printing out total in console log.

var name = ("Flavio Cassini");
console.log(name);
var studentNumber = ("0004664025");
console.log(studentNumber);
var assignment = ("Expression");
console.log(assignment);
var program = ("Web Development & Design");
console.log(program)




