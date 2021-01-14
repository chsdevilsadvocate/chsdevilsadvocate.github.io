/*
This gets all the data set up in order to load an archive in 'archive.html'.
*/

function loadArchive() {
  
  const urlString = window.location.href; // The variable 'urlString' is the string of the url.
  const url = new URL(urlString); // Create a new URL object from that string.
  let genreParameter = url.searchParams.get('genre'); // Get the parameter for 'genre='.

  // If the genre parameter doesn't exist, just make it all so the page doesn't break when loading.
  if (genreParameter == null) { genreParameter = 'all' }

  const keys = Object.keys(articles); // Create array of key names (article ids).

  let titleDiv = document.getElementsByClassName('title')[0]; // Get the div for the title and subtitle stuff.
  // Change what the subtitle says the genre is.
  if (genreParameter == 'all') {
    titleDiv.innerHTML = '<h1>Archive of Articles</h1><p>Every article is listed below:</p>';
  } else {
    titleDiv.innerHTML = '<h1>Archive of Articles</h1><p>Every article of the ' + genreParameter + ' genre is listed below:</p>';
  }
  
  let articlesDiv = document.getElementsByClassName('articles')[0]; // Get the div for the articles.
  let innerHTMLToSet = ''; // Initialize an empty innerHTML thing, so that the for loop can add to it with +=.  The reason we don't just automatically set everything to the actual innerHTML is that divs will automatically be closed.

  // Depending on the genre, give different articles.
  if (genreParameter == 'all') {
    // If the genre is all, just use every article.
    for (let key of keys) {
      innerHTMLToSet += ('<div class="article" onclick="location.href=' + "'article.html?article-id=" + key + "'" + '"><h1><a href="article.html?article-id=' + key + '">' + articles[key].name + '</a></h1><a href="article.html?article-id=' + key + '">' + articles[key].author + '</a>');
      if (articles[key].image != undefined) {
        innerHTMLToSet += '<img src=images/articles/' + articles[key].image + '>'; // Set the image as the background.
      } else {
        innerHTMLToSet += '<img src=images/genres/' + 'genre' + '.png>'; // Set the default genre image as the background.
      }
      innerHTMLToSet += '</div>'; // We didn't close the div before in order to add in images.  Here we close the '<div class="article">'.
    }
  } else {
    // If the genre is not all, test if the genre is in the articles genres list before using it.
    for (let key of keys) {
      // If the articles genre array includes the genre parameter.
      if ((articles[key].genres).includes(genreParameter)) {
        innerHTMLToSet += ('<div class="article" onclick="location.href=' + "'article.html?article-id=" + key + "'" + '"><h1><a href="article.html?article-id=' + key + '">' + articles[key].name + '</a></h1><a href="article.html?article-id=' + key + '">' + articles[key].author + '</a>');
        // Do checks for an image and see whether it should have the image as a background or the genre.
        if (articles[key].image != undefined) {
          innerHTMLToSet += '<img src=images/articles/' + articles[key].image + '>'; // Set the image as the background.
        } else {
          innerHTMLToSet += '<img src=images/genres/' + 'genre' + '.png>'; // Set the default genre image as the background.
        }
        innerHTMLToSet += '</div>'; // We didn't close the div before in order to add in images.  Here we close the '<div class="article">'.
      }
    }
  }
  articlesDiv.innerHTML = innerHTMLToSet

  // Set the menubar colors correctly.
  let selectedMenubarItem = (document.querySelectorAll("a[href='archive.html?genre=" + genreParameter + "']"))[0]; // Get the selected menubar item.
  selectedMenubarItem.style.backgroundColor = 'var(--select-menubar-color)';
  selectedMenubarItem.style.color = 'var(--text-color)';
}
