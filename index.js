let count = 0;
let response;
let working = true;

while (working) {
       response = prompt(
              "What task would you like to run? (sum, convert, low, wordCounter, random, randomRange, capitalize, quit)"
            );

       if (response === "sum") {sum();}
              else if (response === "convert") {convert();}
       
            count = count +1;
}

function sum() {
       let firstNumber = +prompt("Enter the first number:");
       let secondNumber = +prompt("Enter the second number:");
       let answer = firstNumber * secondNumber;
       alert(`${firstNumber} + ${secondNumber} = ${answer}`)
}

function convert() {
       let number = +prompt("Enter the number of minutes:");
       alert(`There are ${number * 60} seconds in ${number} minutes.`);
}