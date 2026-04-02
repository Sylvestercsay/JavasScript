const name = prompt("Enter student's name:");
const random = Math.floor(Math.random() * 4) + 1;

let house;

switch (random) {
  case 1:
    house = "Gryffindor";
    break;
  case 2:
    house = "Slytherin";
    break;
  case 3:
    house = "Hufflepuff";
    break;
  case 4:
    house = "Ravenclaw";
    break;
}

document.write("<p>" + name + ", you are " + house + ".</p>");