/*
All of the code regarding changing the page to reflect what theme is currently applied.
*/

function theme() {
    if (localStorage.getItem('theme') === null) {
        // Do nothing if there is no theme saved.
    } else {
        document.documentElement.style.setProperty('--bg-color', localStorage.getItem('bg-color') );
        document.documentElement.style.setProperty('--bg-image', localStorage.getItem('bg-image') );

        document.documentElement.style.setProperty('--fg-color', localStorage.getItem('fg-color') );
        document.documentElement.style.setProperty('--fg-filter', localStorage.getItem('fg-filter') );
        document.documentElement.style.setProperty('--fg-backdrop-filter', localStorage.getItem('fg-backdrop-filter') );

        document.documentElement.style.setProperty('--text-color', localStorage.getItem('text-color') );
        document.documentElement.style.setProperty('--text-font', localStorage.getItem('text-font') );

        document.documentElement.style.setProperty('--menubar-color', localStorage.getItem('menubar-color') );
        document.documentElement.style.setProperty('--hover-menubar-color', localStorage.getItem('hover-menubar-color') );
        document.documentElement.style.setProperty('--select-menubar-color', localStorage.getItem('select-menubar-color') );
        document.documentElement.style.setProperty('--hover-text-color', localStorage.getItem('hover-text-color') );

        document.documentElement.style.setProperty('--button-color', localStorage.getItem('button-color') );
        document.documentElement.style.setProperty('--hover-button-color', localStorage.getItem('hover-button-color') );
    }
}