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
console.log("Price of pants is $" + candyPrice); //printing out variable candyPrice
var candyQTY = prompt ("How many do you want to buy?");//Storing the input from the user of the quantity of candy
console.log(candyQTY + " Candies purchased"); //Printing out Varaible pantsQTY
var donation = confirm("Woukd you like to donate $10 to chairty?");
console.log("Would you like to donate $10 to chairty " + donation);
var donation5 = confirm("would you also like to donate $5")
if(donation && donation5) {
    var tenDonation = [10]
    var fiveDonation = [5];

    var shoppingCart = [Number(cookiePrice), Number(cookieQTY), Number(candyPrice), Number(candyQTY), Number(tenDonation), Number(fiveDonation)]; //using the variable shoppingCart to gather info on variables. I also set it up so the variables are converted to numbers.

    console.log(shoppingCart); //Printing out variable shoppingCart
    var totalPrice = shoppingCart[0] * shoppingCart[1] + shoppingCart[2] * shoppingCart[3] + shoppingCart[4] + shoppingCart[5]; //totaling all variables into array format

    console.log("Total price of food bought is $" + totalPrice); //printing out total price
    alert("Your total price is  $" + totalPrice); //printing out total to the user using alert box.

}else if(donation < donation5) {
    var tenDonation2 = [10]
    var fiveDonation2 = [5]
    var shoppingCart2 = [Number(cookiePrice), Number(cookieQTY), Number(candyPrice), Number(candyQTY), Number(tenDonation2)];
    var totalPrice2 = shoppingCart2[0] * shoppingCart2[1] + shoppingCart2[2] * shoppingCart2[3] + shoppingCart2[4];
    console.log("Total price of food bought is $" + totalPrice2); //printing out total price
    alert("Your total price is  $" + totalPrice2);
} else if(!(donation == donation5)) {
    var tenDonation2 = [10]
    var fiveDonation2 = [5]
    var shoppingCart2 = [Number(cookiePrice), Number(cookieQTY), Number(candyPrice), Number(candyQTY), Number(fiveDonation2)];
    var totalPrice2 = shoppingCart2[0] * shoppingCart2[1] + shoppingCart2[2] * shoppingCart2[3] + shoppingCart2[4];
    console.log("Total price of food bought is $" + totalPrice2); //printing out total price
    alert("Your total price is  $" + totalPrice2);
}else {
    var shoppingCart4 = [Number(cookiePrice), Number(cookieQTY), Number(candyPrice), Number(candyQTY)];
    var totalPrice4 = shoppingCart4[0] * shoppingCart4[1] + shoppingCart4[2] * shoppingCart4[3];
    console.log("total price of food is $" + totalPrice4)
    alert("Your total price is  $" + totalPrice4); //printing out total to the user using alert box.
}