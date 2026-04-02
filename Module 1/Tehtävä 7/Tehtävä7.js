const rolls = Number(prompt("How many times do you want to roll the dice?"));

let sum = 0;

for (let i = 0; i < rolls; i++) {
  const diceResult = Math.floor(Math.random() * 6) + 1;
  sum = sum + diceResult;
}

document.write("<p>You rolled the dice " + rolls + " times.</p>");
document.write("<p>The sum of all rolls is: " + sum + "</p>");