/*
This checks whether the user is running internet explorer, which the website is not compatible with.
*/

function checkBrowser() {
    if (document.documentMode) {
        alert("Internet Explorer is not compatible with this website!");
    }
}