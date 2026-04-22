'use strict';

var form = document.getElementById('search-form');


form.addEventListener('submit', function(event) {


  event.preventDefault();


  var valueFromInput = document.getElementById('query').value;

  var url = 'https://api.tvmaze.com/search/shows?q=' + valueFromInput;


  fetch(url)

    .then(function(response) {
      return response.json();
    })

    .then(function(data) {
      console.log(data);
    });

});
