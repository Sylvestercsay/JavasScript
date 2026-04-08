const numbers = [];
let duplicate = false;

while (duplicate === false) {
  const input = Number(prompt("Enter a number:"));

  if (numbers.includes(input)) {
    console.log("Number " + input + " has already been entered!");
    duplicate = true;
  } else {
    numbers.push(input);
  }
}

numbers.sort(function(a, b) {
  return a - b;
});

console.log("All entered numbers in ascending order:");

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
