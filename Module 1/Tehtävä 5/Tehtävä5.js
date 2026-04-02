const year = Number(prompt("Enter a year:"));

if (year % 400 === 0) {
  document.write("<p>" + year + " is a leap year.</p>");
} else if (year % 100 === 0) {
  document.write("<p>" + year + " is not a leap year.</p>");
} else if (year % 4 === 0) {
  document.write("<p>" + year + " is a leap year.</p>");
} else {
  document.write("<p>" + year + " is not a leap year.</p>");
}