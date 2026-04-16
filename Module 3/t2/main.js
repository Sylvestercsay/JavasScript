'use strict';

var targetElement = document.getElementById('target');

var firstItem = document.createElement('li');
firstItem.textContent = 'First item';
targetElement.appendChild(firstItem);

var secondItem = document.createElement('li');
secondItem.textContent = 'Second item';

secondItem.classList.add('my-item');
targetElement.appendChild(secondItem);

var thirdItem = document.createElement('li');
thirdItem.textContent = 'Third item';
targetElement.appendChild(thirdItem);
