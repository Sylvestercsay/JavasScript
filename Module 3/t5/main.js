'use strict';


var picArray = [
  {
    title: 'Mountains',
    medium_image: 'https://picsum.photos/id/29/400/300',
    caption: 'A beautiful mountain view',
    description: 'This is a stunning landscape photo showing tall mountains covered in snow.',
  },
  {
    title: 'Forest',
    medium_image: 'https://picsum.photos/id/15/400/300',
    caption: 'Deep in the forest',
    description: 'Sunlight filters through the tall trees in this peaceful forest scene.',
  },
  {
    title: 'Ocean',
    medium_image: 'https://picsum.photos/id/43/400/300',
    caption: 'Waves on the shore',
    description: 'The ocean stretches endlessly toward the horizon on a calm sunny day.',
  },
];


var sectionElement = document.getElementById('target');


for (var i = 0; i < picArray.length; i++) {


  var article = document.createElement('article');
  article.classList.add('card');


  var heading = document.createElement('h2');
  heading.textContent = picArray[i].title;


  var figure = document.createElement('figure');


  var img = document.createElement('img');
  img.src = picArray[i].medium_image;
  img.alt = picArray[i].title;


  var figcaption = document.createElement('figcaption');
  figcaption.textContent = picArray[i].caption;


  figure.appendChild(img);
  figure.appendChild(figcaption);


  var paragraph = document.createElement('p');
  paragraph.textContent = picArray[i].description;


  article.appendChild(heading);
  article.appendChild(figure);
  article.appendChild(paragraph);


  sectionElement.appendChild(article);
}
