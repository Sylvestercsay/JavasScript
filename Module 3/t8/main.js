'use strict';


var calculateButton = document.getElementById('calculate');


calculateButton.addEventListener('click', function() {


  var number1 = Number(document.getElementById('num1').value);
  var number2 = Number(document.getElementById('num2').value);


  var operation = document.getElementById('operation').value;


  var result;


  if (operation === 'add') {
    result = number1 + number2;
  } else if (operation === 'subtract') {
    result = number1 - number2;
  } else if (operation === 'multiply') {
    result = number1 * number2;
  } else if (operation === 'divide') {
    // Avoid dividing by zero
    if (number2 === 0) {
      result = 'Cannot divide by zero';
    } else {
      result = number1 / number2;
    }
  }


  document.getElementById('result').textContent = 'Result: ' + result;
});
