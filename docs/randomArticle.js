/*
This generates the random articles for the homepage's random article boxes.
*/

function randomArticle() {

  const keys = Object.keys(articles); // Create array of key names (article ids).

  const slots = document.getElementsByClassName("random-article"); // Get all the random article slot elements.

  // For each slot, select a random article and then put it in the slot element.
  for (slot of slots) {
    let randomKey = keys[ Math.floor(Math.random() * keys.length) ]; // Select a random id from the array of key names.
    let randomArticle = articles[randomKey];
    let innerHTMLToSet = '<div class="random-div"><h1>Random Article</h1><div class="random-text"><i class="fas fa-quote-left"></i><a href=article.html?article-id=' + randomKey + '>' + randomArticle.callout + '</a></div>'; // Set some HTML to a variable.
    //Add the image HTML to that variable.
     if (randomArticle.image != undefined) {
          innerHTMLToSet += '<img class="random-article-image" src=images/articles/' + randomArticle .image+ '>'; // Set the image as the background.
        } else {
          innerHTMLToSet += '<img class="random-article-image" src=images/genres/' + 'genre' + '.png>'; // Set the default genre image as the background.
        }
    innerHTMLToSet += '</div>'; // Close the div on that variable.
    slot.innerHTML = innerHTMLToSet;

    // Add an onclick link to the random article box.
    slot.setAttribute('onClick', 'location.href="article.html?article-id=' + randomKey + '";');
  }

}