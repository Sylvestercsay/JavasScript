'use strict';


var form = document.getElementById('search-form');


var resultsDiv = document.getElementById('results');


form.addEventListener('submit', function(event) {


  event.preventDefault();


  var valueFromInput = document.getElementById('query').value;


  var url = 'https://api.tvmaze.com/search/shows?q=' + valueFromInput;


  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {


      resultsDiv.innerHTML = '';


      for (var i = 0; i < data.length; i++) {


        var tvShow = data[i].show;


        var article = document.createElement('article');


        var heading = document.createElement('h2');
        heading.textContent = tvShow.name;


        var link = document.createElement('a');
        link.href = tvShow.url;
        link.textContent = tvShow.url;
        link.target = '_blank'; // open in a new tab


        var img = document.createElement('img');


        img.src = tvShow.image?.medium;
        img.alt = tvShow.name;


        var summaryDiv = document.createElement('div');
        summaryDiv.innerHTML = tvShow.summary;


        article.appendChild(heading);
        article.appendChild(link);
        article.appendChild(img);
        article.appendChild(summaryDiv);


        resultsDiv.appendChild(article);
      }

    });

});
