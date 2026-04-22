'use strict';


var form = document.getElementById('joke-form');
var resultsDiv = document.getElementById('results');


form.addEventListener('submit', function(event) {


  event.preventDefault();


  var valueFromInput = document.getElementById('query').value;


  var url = 'https://api.chucknorris.io/jokes/search?query=' + valueFromInput;


  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {


      resultsDiv.innerHTML = '';


      var jokes = data.result;


      for (var i = 0; i < jokes.length; i++) {


        var article = document.createElement('article');


        var paragraph = document.createElement('p');

        paragraph.textContent = jokes[i].value;


        article.appendChild(paragraph);


        resultsDiv.appendChild(article);
      }

    });

});
