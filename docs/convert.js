/*
Make the conversion tool within the page's Settings work.
*/

// Set showdown options.
showdown.setOption('noHeaderId', true);

// Create the showdown converter (only once, given that it is dynamic memory).
let converter = new showdown.Converter();

// Convert from input pane to output pane.
function convert() {
    // Set default values.
    let author = "";
    let callout = "";
    let name = "";
    let tags = "";
    let id = "";
    let date = "";
    let genres = "";
    let text = "";

    author  = document.getElementById('author').value;
    callout = document.getElementById('callout').value;
    name    = document.getElementById('name').value;
    tags    = document.getElementById('tags').value;

    // Convert name to lowercase, remove all bad characters, and then replace spaces with hyphens.
    id = name.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/( )/g,'-');

    // Set the date.
    dates = document.getElementsByClassName('date');
    date =  dates[0].value + '/' +
            dates[1].value + '/' +
            dates[2].value;

    // Collect all genres selected.
    for (button of document.getElementsByClassName('genre-button')) {
        // If the button is enabled.
        if (button.style.backgroundColor == "var(--hover-button-color)") {
            genres += ( '"' + button.innerHTML.toLowerCase() + '",\n\t\t' );
        }
    }
    genres = genres.slice(0, -4); // Remove trailing comma.

    // Convert text.
    text = document.getElementById('text').value; // Get inputted text.
    text = converter.makeHtml(text); // Convert it into HTML.
    text = text.replace(/([\n])/g,''); // Remove all of the newlines.


    // Get output field.
    let output = document.getElementsByClassName('output')[0];
    // Set output field.
    output.value =
        '"'              + id      + '": {\n' +
        '\t"author": "'  + author  + '",\n'   +
        '\t"callout": "' + callout + '",\n'   +
        '\t"date": "'    + date    + '",\n'   +
        '\t"genres": [\n'+
            '\t\t' + genres + '\n' +
        '\t],\n'         +
        '\t"name": "'    + name    + '",\n'   +
        '\t"tags": "'    + tags    + '",\n'   +
        '\t"text": "'    + text    + '"\n}';
}

function select(buttonNumber) {
    button = document.getElementsByClassName('genre-button')[buttonNumber];
    // If the button is unselected.
    if (button.style.backgroundColor == "var(--button-color)") {
        button.style.backgroundColor = "var(--hover-button-color)";
    } else {
        button.style.backgroundColor = "var(--button-color)";
    }
}

// When the settings page loads, give each button an onclick event listener that passes itself into the select() function.
function onSettingsLoad() {
    let buttons = document.getElementsByClassName('genre-button');
    for (let i=0; i < buttons.length; i+=1) {
        buttons[i].onclick = function() {
            select(i);
        }
    }

    setInterval(function() { convert(); }, 10)
}



