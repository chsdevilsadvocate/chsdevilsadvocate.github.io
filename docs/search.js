/*
███████╗███████╗ █████╗ ██████╗  ██████╗██╗  ██╗
██╔════╝██╔════╝██╔══██╗██╔══██╗██╔════╝██║  ██║
███████╗█████╗  ███████║██████╔╝██║     ███████║
╚════██║██╔══╝  ██╔══██║██╔══██╗██║     ██╔══██║
███████║███████╗██║  ██║██║  ██║╚██████╗██║  ██║
╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝

Create the search feature in the menubar.
*/

let searchOpen = false; // The user has not opened the search feature yet.

function openSearch() {
  searchButton = document.getElementById('search');
  searchbar = (document.getElementsByClassName('searchbar'))[0];

  searchButton.style.transition = 'transform 1s';
  searchbar.style.transition = 'transform 1s';

  if (searchOpen == false) {
    searchOpen = true;

    searchButton.style.transform = 'translateX(-24vw)';
    searchButton.style.WebkitTransform = 'translateX(-24vw)'; // This is for opera.  It needs webkit.

    searchbar.style.transform = 'translate(26vw, 0vw)';
    searchbar.style.WebkitTransform = 'translate(26vw, 0vw)'; // This is for opera.  It needs webkit.

  } else {
    searchOpen = false;

    searchButton.style.transform = 'translateX(0vw)';
    searchButton.style.WebkitTransform = 'translateX(0vw)'; // This is for opera.  It needs webkit.

    searchbar.style.transform = 'translate(50vw, 0vw)';
    searchbar.style.WebkitTransform = 'translate(50vw, 0vw)'; // This is for opera.  It needs webkit.
    
  }
}

// Wait for the search function to be completed.
function search(element) {
  // If the user hits the enter key and they have actually typed something.
  if ( ((event.key == 'Enter') && (element.value != '')) )  {
    doSearch(element.value);
  }
}

// Actually conver the searched-for thing into a list of articles.
function doSearch(searchKey) {
  // Compile a dictionary of keywords (the title and tags) for each article.
  let articleDict = {};
  const keys = Object.keys(articles);
  for (let key of keys) {
    let value = []
    for (let word in (articles[key].name).split(' ')) {
      value.push(((articles[key].name).split(' ')[word]).toLowerCase());
    }
    for (let tag in (articles[key].tags).split(' ')) {
      value.push(((articles[key].tags).split(' ')[tag]).toLowerCase());
    }
    for (let word in (articles[key].author).split(' ')) {
      value.push(((articles[key].author).split(' ')[word]).toLowerCase());
    }
    articleDict[key] = value;
  }

  let searchTerm = (searchKey).toLowerCase();

  let searchResults = {};
  for (let key of keys) {
    for (let term in searchTerm.split(' ')) {
      // If the article name+tags includes the word.
      if (articleDict[key].includes((searchTerm.split(' '))[term])) {
        // If the results list already includes the word.
        if (key in searchResults) {
          searchResults[key] += 1;
        } else {
          searchResults[key] = 1;
        }
      }
    }
  }

  let finalSearch = [];
  for (let element in searchResults) {
    finalSearch.push([element, searchResults[element]]);
  }

  finalSearch.sort( function(x, y) { return x[1] - y[1]; } );
  finalSearch.reverse();

  sessionStorage.setItem('searchResults', finalSearch);

  // Redirect to the search page.
  window.location.href = "search.html";
}


function loadSearch() {

  let searchResults = (sessionStorage.getItem('searchResults')).split(',');

  if (searchResults == '') {
    let resultsDiv = document.getElementsByClassName('search-results')[0]; // Get the div for the articles.
    resultsDiv.innerHTML = '<div class="article" style="width: 91vw; height: 4vw; font-size: 1.2vw; margin-top: -4vw;"><h1>Sorry, we couldn\'t find any results for your search query.</h1></div>';
  } else {
    // The list is parsed as a list of each article, followed by the number of search hits, so we have to get rid of the numbers.  Those are every even index.
    for (let i=0; i<searchResults.length; i+=1) {
      searchResults.splice(i+1, 1);
    }

    const keys = Object.keys(articles);

    let resultsDiv = document.getElementsByClassName('search-results')[0]; // Get the div for the articles.
    let innerHTMLToSet = ''; // Initialize an empty innerHTML thing, so that the for loop can add to it with +=.  The reason we don't just automatically set everything to the actual innerHTML is that divs will automatically be closed.

    resultsDiv.innerHTML = '';

    for (let article in searchResults) {
      innerHTMLToSet = '';
      innerHTMLToSet += ('<div class="article"><h1><a href="article.html?article-id=' + searchResults[article[0]] + '">' + articles[searchResults[article[0]]].name + '</a></h1><a href="article.html?article-id=' + searchResults[article[0]] + '">' + articles[searchResults[article[0]]].author + '</a>');
      if (articles[searchResults[article[0]]].image != undefined) {
        innerHTMLToSet += '<img src=images/articles/' + articles[searchResults[article[0]]].image + '>'; // Set the image as the background.
      } else {
        innerHTMLToSet += '<img src=images/genres/' + 'genre' + '.png>'; // Set the default genre image as the background.
      }
      innerHTMLToSet += '</div>'; // We didn't close the div before in order to add in images.  Here we close the '<div class="article">'.

      resultsDiv.innerHTML += innerHTMLToSet;
    }

  }
  
}
