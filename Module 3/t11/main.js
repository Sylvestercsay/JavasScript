'use strict';


var picArray = [
  {
    title: 'Mountains',
    medium_image: 'https://picsum.photos/id/29/400/300',
    large_image: 'https://picsum.photos/id/29/1200/900',
    caption: 'A beautiful mountain view',
    description: 'This is a stunning landscape photo showing tall mountains covered in snow.',
  },
  {
    title: 'Forest',
    medium_image: 'https://picsum.photos/id/15/400/300',
    large_image: 'https://picsum.photos/id/15/1200/900',
    caption: 'Deep in the forest',
    description: 'Sunlight filters through the tall trees in this peaceful forest scene.',
  },
  {
    title: 'Ocean',
    medium_image: 'https://picsum.photos/id/43/400/300',
    large_image: 'https://picsum.photos/id/43/1200/900',
    caption: 'Waves on the shore',
    description: 'The ocean stretches endlessly toward the horizon on a calm sunny day.',
  },
];


var sectionElement = document.getElementById('target');


var modal = document.getElementById('modal');


var modalImage = document.querySelector('dialog img');


var closeButton = document.querySelector('dialog span');


closeButton.addEventListener('click', function() {
  modal.close();
});


for (var i = 0; i < picArray.length; i++) {


  (function(currentItem) {


    var article = document.createElement('article');
    article.classList.add('card');


    var heading = document.createElement('h2');
    heading.textContent = currentItem.title;


    var figure = document.createElement('figure');


    var img = document.createElement('img');
    img.src = currentItem.medium_image;
    img.alt = currentItem.title;


    var figcaption = document.createElement('figcaption');
    figcaption.textContent = currentItem.caption;


    figure.appendChild(img);
    figure.appendChild(figcaption);


    var paragraph = document.createElement('p');
    paragraph.textContent = currentItem.description;


    article.appendChild(heading);
    article.appendChild(figure);
    article.appendChild(paragraph);


    article.addEventListener('click', function() {

      modalImage.src = currentItem.large_image;

      modalImage.alt = currentItem.title;

      modal.showModal();
    });


    sectionElement.appendChild(article);

  })(picArray[i]);

}
