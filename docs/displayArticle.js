/*
██████╗ ██╗███████╗██████╗ ██╗      █████╗ ██╗   ██╗      █████╗ ██████╗ ████████╗██╗ ██████╗██╗     ███████╗
██╔══██╗██║██╔════╝██╔══██╗██║     ██╔══██╗╚██╗ ██╔╝     ██╔══██╗██╔══██╗╚══██╔══╝██║██╔════╝██║     ██╔════╝
██║  ██║██║███████╗██████╔╝██║     ███████║ ╚████╔╝      ███████║██████╔╝   ██║   ██║██║     ██║     █████╗  
██║  ██║██║╚════██║██╔═══╝ ██║     ██╔══██║  ╚██╔╝       ██╔══██║██╔══██╗   ██║   ██║██║     ██║     ██╔══╝  
██████╔╝██║███████║██║     ███████╗██║  ██║   ██║        ██║  ██║██║  ██║   ██║   ██║╚██████╗███████╗███████╗
╚═════╝ ╚═╝╚══════╝╚═╝     ╚══════╝╚═╝  ╚═╝   ╚═╝        ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝ ╚═════╝╚══════╝╚══════╝

This is all the javascript required for 'article.html'.
*/

// Display all the article stuff.
function displayArticle() {
  const urlString = window.location.href; // The variable 'urlString' is the string of the url.
  const url = new URL(urlString); // Create a new URL object from that string.
  const articleParameter = url.searchParams.get('article-id'); // Get the parameter for 'article-id='.


  const article = articles[articleParameter]; // The articles with that article parameter is set to the variable 'article'.

  let textDiv = (document.getElementsByClassName("text"))[0]; // Get the div to put the body text in.
  textDiv.innerHTML = '<p>' + article.text + '</p>'; // Set the text for the body text div.
  let headerDiv = (document.getElementsByClassName("header"))[0]; // Get the div to put the title in.
  // Put the title in the title div.  If there's an image, ad that, otherwise, put the genre-specific image in.
  if (article.image != undefined) {
    headerDiv.innerHTML = '<img src=images/articles/' + article.image + '>' + '<div class="title"><h1>' + article.name + '</h1></div><div class="author-date"><div class="author"><h2>' + article.author + '</h2></div><div class="date"><h2>' + article.date + '</h2></div></div>';
  } else {
    headerDiv.innerHTML = '<img src=images/genres/' + 'genre' + '.png>' + '<div class="title"><h1>' + article.name + '</h1></div><div class="author-date"><div class="author"><h2>' + article.author + '</h2></div><div class="date"><h2>' + article.date + '</h2></div></div>';
  }

}