let count = 0;
let response;
let working = true;

while (working) {
       response = prompt(
              "What task would you like to run? (sum, convert, low, wordCounter, random)"
            );

       if (response === "sum") {sum();}
              else if (response === "convert") {convert();}
              else if (response === "low") {low();}
              else if (response === "random") {random();}
              else if (response === "wordCounter") {wordCounter();}
              

       
            count = count +1;
}

// sum: The app will prompt the users for two numbers and return the sum.
function sum() {
       let firstNumber = +prompt("Enter the first number:");
       let secondNumber = +prompt("Enter the second number:");
       let answer = firstNumber * secondNumber;
       alert(`${firstNumber} + ${secondNumber} = ${answer}`)
}

// convert: The app will convert minutes into seconds.
function convert() {
       let number = +prompt("Enter the number of minutes:");
       alert(`There are ${number * 60} seconds in ${number} minutes.`);
}

// low: The app will state if the first number is lower than the second number.
function low() {

}

// andom: The app will give a random number between 0 and the user's specified number.
function random() {

}

// wordCounter: The app will state how many words are in a sentence.
function wordCounter() {

}