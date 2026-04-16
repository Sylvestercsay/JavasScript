'use strict';


var names = ['John', 'Paul', 'Jones'];


var targetElement = document.getElementById('target');


var htmlString = '';

for (var i = 0; i < names.length; i++) {

  htmlString = htmlString + '<li>' + names[i] + '</li>';
}


targetElement.innerHTML = htmlString;
