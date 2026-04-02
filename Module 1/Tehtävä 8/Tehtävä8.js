const startYear = Number(prompt("Enter start year:"));
const endYear = Number(prompt("Enter end year:"));

let list = "<ul>";

for (let year = startYear; year <= endYear; year++) {
  if (year % 400 === 0) {
    list = list + "<li>" + year + "</li>";
  } else if (year % 100 === 0) {

  } else if (year % 4 === 0) {
    list = list + "<li>" + year + "</li>";
  }
}

list = list + "</ul>";
document.write(list);