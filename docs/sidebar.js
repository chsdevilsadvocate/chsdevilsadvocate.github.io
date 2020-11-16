/*
███████╗██╗██████╗ ███████╗██████╗  █████╗ ██████╗ 
██╔════╝██║██╔══██╗██╔════╝██╔══██╗██╔══██╗██╔══██╗
███████╗██║██║  ██║█████╗  ██████╔╝███████║██████╔╝
╚════██║██║██║  ██║██╔══╝  ██╔══██╗██╔══██║██╔══██╗
███████║██║██████╔╝███████╗██████╔╝██║  ██║██║  ██║
╚══════╝╚═╝╚═════╝ ╚══════╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝

Do sidebar stuff.
*/

// Make the sidebar the same height as the article's height.
function sidebarHeight() {
  let textDiv = (document.getElementsByClassName("text"))[0];
  let sidebarDiv = (document.getElementsByClassName('sidebar'))[0];
  //  This is the article's height divided by the total screen width, to get a vw value.  It is multiplied by 100 because vws are measured out of 100, not out of 1.
  let sidebarHeight = (textDiv.getBoundingClientRect().height / window.innerWidth)*100;
  sidebarHeight += 24; // Add the image height.
  sidebarDiv.style.height = sidebarHeight + 'vw';
}

// Load everything in the sidebar.
function sidebar() {
  // Get the sidebar and text div elements.
  let textDiv = (document.getElementsByClassName("text"))[0];
  let sidebarDiv = (document.getElementsByClassName('sidebar'))[0];
  //  This is the article's height divided by the total screen width, to get a vw value.  It is multiplied by 100 because vws are measured out of 100, not out of 1.
  let sidebarHeight = (textDiv.getBoundingClientRect().height / window.innerWidth)*100;
  sidebarHeight += 24; // Add the image height.

  let numberOfObjects = Math.floor(sidebarHeight / 25); // The sidebar height divided by the height of each object is the number of objects.

  let margin = (sidebarHeight % (numberOfObjects*25)) / (numberOfObjects + 1); // Calculate the top margin of a sidebar object.
  // If the margins are too small, remove an object to allow them to be bigger.
  if (margin < 2) {
    numberOfObjects -= 1;
    margin = (sidebarHeight % (numberOfObjects*25)) / (numberOfObjects + 1); // Recalculate the margin.
  }
  
  // Add the right number of sidebar objects.

  const keys = Object.keys(articles);

  sidebarDiv.innerHTML = '';
  for (let i = 0; i<numberOfObjects; i+=1) {
    let randomKey = keys[ Math.floor(Math.random() * keys.length) ]; // Select a random id from the array of key names.
    let randomArticle = articles[randomKey];
    let randomImage;
    if (randomArticle.image != undefined) { randomImage = randomArticle.image; }
    else { randomImage = 'genres/genre.png' }

    sidebarDiv.innerHTML += `<div class="random-article">
  <div class="random-div" onclick="location.href='article.html?article-id=` + randomKey + `'">
    <div class="random-text">
      <h1>Random Article</h1>
      <i class="fas fa-quote-left"></i>
      <a href="article.html?article-id=` + randomKey + `">` + randomArticle.callout +`</a>
    </div>
    <img class="random-article-image" src="images/` + randomImage +`">
  </div>
</div>`;

  }

  // Get all of the object divs.
  let objectDivs = (document.getElementsByClassName('random-article'));

  for (object of objectDivs) {
    // Set the margin of the object to be the right amount (the remainder area not taken up by the objects divided by the number of objects).
    object.style.marginTop = margin + 'vw';
  }
}