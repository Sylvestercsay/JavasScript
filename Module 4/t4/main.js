'use strict';

// Get the form and results container
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

      // Clear old results
      resultsDiv.innerHTML = '';

      // Loop through every result
      for (var i = 0; i < data.length; i++) {

        var tvShow = data[i].show;

        // --- Create article ---
        var article = document.createElement('article');

        // --- Heading with show name ---
        var heading = document.createElement('h2');
        heading.textContent = tvShow.name;

        // --- Link to show details ---
        var link = document.createElement('a');
        link.href = tvShow.url;
        link.textContent = tvShow.url;
        link.target = '_blank';

        // --- Image with fallback using ternary operator ---
        // Ternary operator works like this:
        //   condition ? valueIfTrue : valueIfFalse
        // If tvShow.image exists AND tvShow.image.medium exists, use it.
        // Otherwise, use a placeholder image URL instead.
        var img = document.createElement('img');
        img.src = tvShow.image ? tvShow.image.medium : 'https://placehold.co/210x295?text=Not%20Found';
        img.alt = tvShow.name;

        // --- Summary in a div (not p, because summary already has <p> tags inside) ---
        var summaryDiv = document.createElement('div');
        summaryDiv.innerHTML = tvShow.summary;

        // --- Assemble the article ---
        article.appendChild(heading);
        article.appendChild(link);
        article.appendChild(img);
        article.appendChild(summaryDiv);

        // --- Add to page ---
        resultsDiv.appendChild(article);
      }

    });

});
