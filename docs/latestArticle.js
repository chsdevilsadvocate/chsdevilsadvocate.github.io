/*
██╗      █████╗ ████████╗███████╗███████╗████████╗      █████╗ ██████╗ ████████╗██╗ ██████╗██╗     ███████╗
██║     ██╔══██╗╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝     ██╔══██╗██╔══██╗╚══██╔══╝██║██╔════╝██║     ██╔════╝
██║     ███████║   ██║   █████╗  ███████╗   ██║        ███████║██████╔╝   ██║   ██║██║     ██║     █████╗  
██║     ██╔══██║   ██║   ██╔══╝  ╚════██║   ██║        ██╔══██║██╔══██╗   ██║   ██║██║     ██║     ██╔══╝  
███████╗██║  ██║   ██║   ███████╗███████║   ██║        ██║  ██║██║  ██║   ██║   ██║╚██████╗███████╗███████╗
╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚══════╝   ╚═╝        ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝ ╚═════╝╚══════╝╚══════╝

This makes the slideshow display the latest articles.
*/

function latestArticle() {

  const keys = Object.keys(articles); // Create array of key names (article ids).

  let slides = document.getElementsByClassName("slide"); // Get the slide divs.

  let i = 0;

  // For each slide, as long as it isn't the first slide (the home slide), set the innerHTML to a nice display of the latest articles.
  for (slide of slides) {
    if (slide.id != 'home-slide') {
      if (articles[keys[i]].image != undefined) {
        slide.innerHTML = '<img src=images/' + articles[keys[i]].image + '>' + '<div class="slide-caption"><a href=article.html?article-id=' + keys[i] + '>' + articles[keys[i]].name + '</a></div>';
      } else {
        slide.innerHTML = '<img src=images/genres/' + 'genre' + '.png>' + '<div class="slide-caption"><a href=article.html?article-id=' + keys[i] + '>' + articles[keys[i]].name + '</a></div>';
      }
      
      i += 1;
    }
  }
}