/*
This makes sure that the menubar settings object on the homescreen are colored correctly.
*/

function settingsMenubar() {
  let selectedMenubarItem = (document.querySelectorAll("a[href='settings.html']"))[0]; // Get the selected menubar item.
  selectedMenubarItem.style.backgroundColor = 'var(--select-menubar-color)';
  selectedMenubarItem.style.color = 'var(--text-color)';
}
