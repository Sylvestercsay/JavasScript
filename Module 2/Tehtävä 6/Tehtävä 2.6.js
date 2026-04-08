function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

let result = 0;
let list = "<ul>";

while (result !== 6) {
  result = rollDice();
  list = list + "<li>Rolled: " + result + "</li>";
}

list = list + "</ul>";

document.write(list);