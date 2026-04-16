'use strict';


var triggerElement = document.getElementById('trigger');


var imageElement = document.getElementById('target');


triggerElement.addEventListener('mouseover', function() {
  imageElement.src = 'picB.jpg';
});


triggerElement.addEventListener('mouseout', function() {
  imageElement.src = 'picA.jpg';
});
