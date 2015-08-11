//Expression Assignment



var tShirtPrice = prompt("Price of t-shirt");
var tShirtQTY = prompt("How many do you want to buy");
var pantsPrice = prompt("Price Of Pants")
var pantsQTY = prompt ("How many do you want to buy")
var shoppingCart = [Number(tShirtPrice), Number(tShirtQTY), Number(pantsPrice), Number(pantsQTY)]
var totalPrice = shoppingCart[0] * shoppingCart[1] + shoppingCart[2] * shoppingCart[3]
console.log(totalPrice)

alert("Your total price is  $" + totalPrice);