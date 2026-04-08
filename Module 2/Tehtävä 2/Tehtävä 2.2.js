const count = Number(prompt("How many participants are there?"));

const names = [];

for (let i = 0; i < count; i++) {
  const name = prompt("Enter name of participant " + (i + 1) + ":");
  names.push(name);
}

names.sort();

let list = "<ol>";

for (let i = 0; i < names.length; i++) {
  list = list + "<li>" + names[i] + "</li>";
}

list = list + "</ol>";

document.write(list);