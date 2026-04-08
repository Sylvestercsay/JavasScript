function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

const sides = Number(prompt("How many sides does the dice have?"));

let result = 0;
let list = "<ul>";

while (result !== sides) {
  result = rollDice(sides);
  list = list + "<li>Rolled: " + result + "</li>";
}

list = list + "</ul>";

document.write("<p>Rolling a " + sides + "-sided dice until we get " + sides + "!</p>");
document.write(list);