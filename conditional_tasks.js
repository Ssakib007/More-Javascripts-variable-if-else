/*** TASK 1

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

var Burger = 600;
if (Burger > 500) {
  console.log("free coke");
} else {
  console.log("coke: 30tk");
}

/*** TASK 2

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

var height = 1.7;
var weight = 66;
var bmi = weight / (height * height);

if (bmi >= 30) {
  console.log("Obese");
} else if (bmi >= 25) {
  console.log("Overweight");
} else if (bmi >= 18.5) {
  console.log("normal");
} else {
  console.log("underweight");
}

/*** TASK 3

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

var score = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}

/*** TASK 4

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

var score = 82;
var friendScore = 82;

if (score > 80) {
  console.log("go inside");
  if (friendScore > 80) {
    console.log("lets go for a lunch");
  } else if (friendScore >= 60) {
    console.log("good luck next time");
  } else if (friendScore >= 40) {
    console.log("message not seen");
  } else if (friendScore < 40) {
    console.log("block your friend");
  }
} else {
  console.log("go to home, sleep, and act sad");
}

/***  TASK 5

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

var num1 = 77;
var num2 = 66;
var result;
num1 > num2 ? (result = num1 * 2) : (result = num1 + num2);
console.log(result);

/*** TASK 6

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

var age = 11;
var isStudent = false;
var fare;
if (age < 10) {
  fare = 0;
} else if (isStudent) {
  fare = 800 * 0.5;
} else if (age >= 60) {
  fare = 800 * 0.85;
} else {
  fare = 800;
}
console.log("Ticket fare :" + fare + "tk");
