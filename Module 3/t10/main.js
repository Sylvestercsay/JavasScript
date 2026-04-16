'use strict';


var form = document.getElementById('name-form');


form.addEventListener('submit', function(event) {


  event.preventDefault();


  var firstNameInput = document.querySelector('input[name="firstname"]');


  var lastNameInput = document.querySelector('input[name="lastname"]');


  var firstName = firstNameInput.value;
  var lastName = lastNameInput.value;


  document.getElementById('target').textContent = 'Your name is ' + firstName + ' ' + lastName;
});
