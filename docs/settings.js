/*
All of the functions included in the theme part of the settings page.  See convert.js to view the converter code.
*/

let optionsDiv;
let buttonsDiv;

// Highlight the correct buttons.
function highlightButton() {
    let buttons = document.getElementsByTagName('button'); // Collect all buttons into a list.
    // Loop through buttons, see which is the current theme, and highlight that one.
    for (let button of buttons) {
        if (localStorage.getItem('theme') == (button.textContent || button.innerText)) {
            button.style.backgroundColor = 'var(--hover-button-color)';
        } else {
            button.style.backgroundColor = 'var(--button-color)';
        }
    }

    // Check options:
    if (localStorage.getItem('bg-image') !== null) {
        if (localStorage.getItem('bg-image') == 'none') {
            document.getElementById('toggle-background-image').innerHTML = "Enable Background Image";
        } else {
            document.getElementById('toggle-background-image').innerHTML = "Disable Background Image";
        }
    }

    if (localStorage.getItem('text-font') !== null) {
        if (localStorage.getItem('text-font') == 'hyperlegible-atkinson') {
            document.getElementById('toggle-distinct-zeros').innerHTML = "Disable Distinct Zeros (0)";
        } else {
            document.getElementById('toggle-distinct-zeros').innerHTML = "Enable Distinct Zeros (0)";
        }
    }
    
}

function showOptions() {
    if (localStorage.getItem('theme') != 'Custom') {
        for (option of document.getElementsByClassName('custom')) {
            option.style.display = 'none';
        }
    } else {
        for (option of document.getElementsByClassName('custom')) {
            option.style.display = 'flex';
        }
    }
}

function toDefaultTheme() {
    localStorage.setItem('theme', 'Default');

    localStorage.setItem('bg-color', '#58A5D9');
    if (localStorage.getItem('bg-image') != 'none') localStorage.setItem('bg-image', "url('images/bg.png')");

    localStorage.setItem('fg-color', '#004785');
    localStorage.setItem('fg-backdrop-filter', 'none');

    localStorage.setItem('text-color', 'white');
    // localStorage.setItem('text-font', 'hyperlegible-atkinson');

    localStorage.setItem('menubar-color',        '#333333');
    localStorage.setItem('hover-menubar-color',  '#696969');
    localStorage.setItem('select-menubar-color', '#3366DD');
    localStorage.setItem('hover-text-color',     'black');

    localStorage.setItem('button-color',       '#00325E');
    localStorage.setItem('hover-button-color', '#001D37');

    showOptions();
    highlightButton();
}

function toDarkTheme() {
    localStorage.setItem('theme', 'Dark');

    localStorage.setItem('bg-color', '#373737');
    if (localStorage.getItem('bg-image') != 'none') localStorage.setItem('bg-image', "url('images/bg_dark.png')");

    localStorage.setItem('fg-color', 'black');
    localStorage.setItem('fg-backdrop-filter', 'none');

    localStorage.setItem('text-color', 'white');
    // localStorage.setItem('text-font', 'hyperlegible-atkinson');

    localStorage.setItem('menubar-color',        'black');
    localStorage.setItem('hover-menubar-color',  '#333333');
    localStorage.setItem('select-menubar-color', '#696969');
    localStorage.setItem('hover-text-color',     'black');

    localStorage.setItem('button-color',       '#333333');
    localStorage.setItem('hover-button-color', '#696969');

    showOptions();
    highlightButton();
}

function toGlassTheme() {
    localStorage.setItem('theme', 'Glass');

    localStorage.setItem('bg-color', '#58A5D9');
    if (localStorage.getItem('bg-image') != 'none') localStorage.setItem('bg-image', "url('images/bg.png')");

    localStorage.setItem('fg-color', '#BBFFFF22');
    localStorage.setItem('fg-backdrop-filter', 'blur(1.5vw)');

    localStorage.setItem('text-color', 'white');
    // localStorage.setItem('text-font', 'hyperlegible-atkinson');

    localStorage.setItem('menubar-color',        '#BBFFFF22');
    localStorage.setItem('hover-menubar-color',  '#BBFFFF44');
    localStorage.setItem('select-menubar-color', '#BBFFFF66');
    localStorage.setItem('hover-text-color',     'black');

    localStorage.setItem('button-color',       '#BBFFFF44');
    localStorage.setItem('hover-button-color', '#BBFFFF66');

    showOptions();
    highlightButton();
}

function toWednesdayTheme() {
    localStorage.setItem('theme', 'Wednesday');

    localStorage.setItem('bg-color', '#F83F3F');
    if (localStorage.getItem('bg-image') != 'none') localStorage.setItem('bg-image', "url('images/bg_red.png')");

    localStorage.setItem('fg-color', '#CC0000');
    localStorage.setItem('fg-backdrop-filter', 'none');

    localStorage.setItem('text-color', 'white');
    // localStorage.setItem('text-font', 'hyperlegible-atkinson');

    localStorage.setItem('menubar-color',        '#333333');
    localStorage.setItem('hover-menubar-color',  '#696969');
    localStorage.setItem('select-menubar-color', '#FF0000');
    localStorage.setItem('hover-text-color',     'black');

    localStorage.setItem('button-color',       '#A50000');
    localStorage.setItem('hover-button-color', '#7E0000');

    showOptions();
    highlightButton();
}

function toAutumnalTheme() {
    localStorage.setItem('theme', 'Autumnal');

    showOptions();
    highlightButton();
}

function toHolidayTheme() {
    localStorage.setItem('theme', 'Holiday');

    showOptions();
    highlightButton();
}

function toCustomTheme() {
    localStorage.setItem('theme', 'Custom');

    localStorage.setItem('bg-color', document.getElementById("background-color").value);
    if (localStorage.getItem('bg-image') != 'none') localStorage.setItem('bg-image', "url('images/bg_dark.png')");

    localStorage.setItem('fg-color', document.getElementById("foreground-color").value);
    localStorage.setItem('fg-backdrop-filter', 'none');

    localStorage.setItem('text-color', document.getElementById("default-text-color").value);
    // localStorage.setItem('text-font', 'hyperlegible-atkinson');

    localStorage.setItem('menubar-color',        document.getElementById("menubar-color").value);
    localStorage.setItem('hover-menubar-color',  document.getElementById("hover-menubar-color").value);
    localStorage.setItem('select-menubar-color', document.getElementById("selected-menubar-color").value);
    localStorage.setItem('hover-text-color',     document.getElementById("hover-menubar-text-color").value);

    localStorage.setItem('button-color',       document.getElementById("hover-menubar-color").value);
    localStorage.setItem('hover-button-color', document.getElementById("selected-menubar-color").value);

    showOptions();
    highlightButton();
}

function toggleBackgroundImage() {
    if (localStorage.getItem('bg-image') == 'none') {
        if (localStorage.getItem('theme') == 'Default') { localStorage.setItem('bg-image', "url('images/bg.png')"); }
        else if (localStorage.getItem('theme') == 'Dark') { localStorage.setItem('bg-image', "url('images/bg_dark.png')"); }
        else if (localStorage.getItem('theme') == 'Wednesday') { localStorage.setItem('bg-image', "url('images/bg_red.png')");  }
        else { localStorage.setItem('bg-image', "url('images/bg.png')"); } // This is for the Glass theme.
        
    } else {
        localStorage.setItem('bg-image', 'none');
    }

    theme(); // This runs the code from theme.js that reloads all of the css variables.

    highlightButton();
}

function toggleDistinctZeros() {
    if (localStorage.getItem('text-font') == 'illegible-atkinson') {
        localStorage.setItem('text-font', 'hyperlegible-atkinson')
    } else {
        localStorage.setItem('text-font', 'illegible-atkinson')
    }

    theme(); // This runs the code from theme.js that reloads all of the css variables.

    highlightButton();
}

// Make sure people without themes get the default theme when they visit settings.
function noThemeToDefaultTheme() {
    if (localStorage.getItem('theme') == null) {
        localStorage.setItem('theme', 'Default');
        document.getElementById('toggle-background-image').innerHTML = "Disable Background Image";
        document.getElementById('toggle-distinct-zeros').innerHTML = "Disable Distinct Zeros (0)";
    }
}