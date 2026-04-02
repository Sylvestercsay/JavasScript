const num1 = Number(prompt("Enter first number:"));
const num2 = Number(prompt("Enter second number:"));
const num3 = Number(prompt("Enter third number:"));

const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = sum / 3;

document.write("<p>Sum: " + sum + "</p>");
document.write("<p>Product: " + product + "</p>");
document.write("<p>Average: " + average + "</p>");