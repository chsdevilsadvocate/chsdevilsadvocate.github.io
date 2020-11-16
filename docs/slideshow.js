/*
███████╗██╗     ██╗██████╗ ███████╗███████╗██╗  ██╗ ██████╗ ██╗    ██╗
██╔════╝██║     ██║██╔══██╗██╔════╝██╔════╝██║  ██║██╔═══██╗██║    ██║
███████╗██║     ██║██║  ██║█████╗  ███████╗███████║██║   ██║██║ █╗ ██║
╚════██║██║     ██║██║  ██║██╔══╝  ╚════██║██╔══██║██║   ██║██║███╗██║
███████║███████╗██║██████╔╝███████╗███████║██║  ██║╚██████╔╝╚███╔███╔╝
╚══════╝╚══════╝╚═╝╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝ ╚═════╝  ╚══╝╚══╝ 

This makes sure the homepage's slideshow works perfectly.
*/

// Variable declarations.
let i;
let index = 0;
const slides = document.getElementsByClassName("slide"); // Get the actual slide divs.
const captions = document.getElementsByClassName("slide-caption"); // Get the divs for the slide captions.
let hover = false // Is the user hovering over the slideshow at first?  No.  

// Move to the next slide.
function next(x) {
  index += x;
  if (index >= slides.length) { index = 0; } // If the index exceeds the number of slides, go back to the first slide.
  if (index < 0) { index = slides.length-1; } // If the index is before the first slide, jump to the last slide.
  show(index); // Show the next slide by running our custom 'show()' function.
  if (hover == true) { captionOn(); } // If the user hovers, run the custom 'captionOn()' function to add the caption...
  else { captionOff(); } // ...otherwise, turn off the caption with 'captionOff()'.
  
}

// Actually show the slide on the screen.
function show(x) {
  // Make all of the slides hidden.
  for (i=0; i<slides.length; i+=1) {
    slides[i].style.opacity = 0;
    slides[i].style.visibility = 'hidden';
  }
  // Show only the correct slide.
  slides[x].style.opacity = 1;
  slides[x].style.visibility = 'visible';
}

// Show the caption.
function captionOn(x) {
  // Make all of the caption hidden.
  for (i=0; i<captions.length; i+=1) {
    captions[i].style.opacity = 0;
    captions[i].style.visibility = 'hidden';
  }
  // Show only the correct caption.
  captions[index].style.opacity = 1;
  captions[index].style.visibility = 'visible';
}

// Hide the caption.
function captionOff(x) {
  // Hide every caption.
  for (i=0; i<captions.length; i+=1) {
    captions[i].style.opacity = 0;
    captions[i].style.visibility = 'hidden';
  }
}

// This is tied to an event listener.  When the user hovers, this function is run and the 'hover' variable is set to true.
function hoverOn() {
  hover = true;
}

// This is tied to an event listener.  When the user does not hover, this function is run and the 'hover' variable is set to false.
function hoverOff() {
  hover = false;
}

// This loops the function, so that the slideshow always works.
const interval = setInterval(function() {
  if (hover == false) { next(1); }
}, 5000);
