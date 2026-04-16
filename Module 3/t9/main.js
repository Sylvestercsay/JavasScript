'use strict';


var calculateButton = document.getElementById('calculate');


calculateButton.addEventListener('click', function() {


  var inputText = document.getElementById('input').value;


  var number1;
  var number2;
  var result;



  if (inputText.includes('+')) {

    var parts = inputText.split('+');
    number1 = Number(parts[0]);
    number2 = Number(parts[1]);
    result = number1 + number2;

  } else if (inputText.includes('-')) {
    var parts = inputText.split('-');
    number1 = Number(parts[0]);
    number2 = Number(parts[1]);
    result = number1 - number2;

  } else if (inputText.includes('*')) {
    var parts = inputText.split('*');
    number1 = Number(parts[0]);
    number2 = Number(parts[1]);
    result = number1 * number2;

  } else if (inputText.includes('/')) {
    var parts = inputText.split('/');
    number1 = Number(parts[0]);
    number2 = Number(parts[1]);

    if (number2 === 0) {
      result = 'Cannot divide by zero';
    } else {
      result = number1 / number2;
    }

  } else {

    result = 'Invalid input. Use +, -, * or /';
  }


  document.getElementById('result').textContent = 'Result: ' + result;
});
