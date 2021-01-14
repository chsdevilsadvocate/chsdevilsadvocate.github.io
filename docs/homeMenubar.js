/*
This makes sure that the menubar home object on the homescreen are colored correctly.
*/

function homeMenubar() {
  let selectedMenubarItem = (document.querySelectorAll("a[href='home.html']"))[0]; // Get the selected menubar item.
  selectedMenubarItem.style.backgroundColor = 'var(--select-menubar-color)';
  selectedMenubarItem.style.color = 'var(--text-color)';
}
