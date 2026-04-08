const dogs = [];

for (let i = 0; i < 6; i++) {
  const name = prompt("Enter name of dog " + (i + 1) + ":");
  dogs.push(name);
}

dogs.sort();
dogs.reverse();

let list = "<ul>";

for (let i = 0; i < dogs.length; i++) {
  list = list + "<li>" + dogs[i] + "</li>";
}

list = list + "</ul>";

document.write(list);
