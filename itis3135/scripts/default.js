

var name_of_user = prompt("Before continuing on this website, please input your name. ");
var feelings_for_today = prompt("How are you currently doing?");
var company_name = "Hoang Kong Coffee Enteprises";

var date = new Date();
var months = ["January ", "Febuary ", "March ", "April ", "May ", "June ", "July", "August ", "September ", "October ", "November ", "December "];/*
var intro1 = ("Today is " + months[date.getMonth()] + " " +  date.getDate() + ", " + date.getFullYear() + ", and the time is : " + date.getHours() + ":" + date.getminutes());
*/
var intro1 = ("Today is " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear() + ". The current time is: " + date.getHours() + ":" + date.getMinutes()+ ". " );
var intro2= ("The " + company_name + " welcomes you, " + name_of_user + "! ");
var intro3 = ("We're glad you're doing " + feelings_for_today + "!");


document.write(intro1);
document.write(intro2);
document.write(intro3);


function pick_Random_Bakery_Item() {
    var bakeryItems = ["Cheese Danish", "Ham and Cheese Croissant", "Almond Croissant", "Chocolate Croissant", "Donut Croissant", 
    "Egg Tarts", "BBQ Pork Buns", "Vietnamese Sausage Pork Buns", "Matcha Sponge Cake"];
    var randomNumber = Math.floor(Math.random()* bakeryItems.length);

    alert("Your random Bakery Item is "+ bakeryItems[randomNumber] + ". ");

    
}
function pick_Random_Caffinated_Drink() {
    var caffinatedDrinks = ["Iced Caramel Machiatto", "Iced Vanilla Latte", "Iced Coffee with Cold Cream Sweet Foam", "Iced Coffee",
    "Iced White Chocolate Mocha", "Oolong Milk Tea", "Americano", "Black Milk Tea", "Peach Iced Tea"]; 
    var randomNumber = Math.floor(Math.random()*caffinatedDrinks.length);

    alert("Your random Caffinated Drink is  " + caffinatedDrinks[randomNumber] + ". ");

}
function pick_Random_NonCaffinated_Drink() {
    var nonCaffinatedDrinks = ["Guava Soda", "Rice Flour Latte", "Cookies and Creme Frap", "Grapefruit Soda", "Lemonade", "Mint Choco Frap",
    "Strawberry Soda", "BlueBerry Yogurt Smoothie", "Mango Yogurt Smoothie", "Strawberry Yogurt Smoothie" ];
    var randomNumber = Math.floor(Math.random()*nonCaffinatedDrinks.length);
    alert("Your random Non-caffinated Drink is  " + nonCaffinatedDrinks[randomNumber] + ". ");

}
function email_Newsletter_SignUp() {
    var email = prompt("Please enter your email address below, to sign up for our NewsLetter ");
    alert("Thank you for signing up! " + email + " will now recieve emails from Hoang Kong Coffee Enterprises regarding coupons and special deals.");

}
function textMessage_Newsletter_SignUp() {
    var phone = prompt("Please enter your phone number below, to sign up for our NewsLetter ");
    alert("Thank you for signing up! " + phone + " will now recieve text-messages from Hoang Kong Coffee Enterprises regarding coupons and special deals.");

}

