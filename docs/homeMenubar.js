/*
██╗  ██╗ ██████╗ ███╗   ███╗███████╗     ███╗   ███╗███████╗███╗   ██╗██╗   ██╗██████╗  █████╗ ██████╗ 
██║  ██║██╔═══██╗████╗ ████║██╔════╝     ████╗ ████║██╔════╝████╗  ██║██║   ██║██╔══██╗██╔══██╗██╔══██╗
███████║██║   ██║██╔████╔██║█████╗       ██╔████╔██║█████╗  ██╔██╗ ██║██║   ██║██████╔╝███████║██████╔╝
██╔══██║██║   ██║██║╚██╔╝██║██╔══╝       ██║╚██╔╝██║██╔══╝  ██║╚██╗██║██║   ██║██╔══██╗██╔══██║██╔══██╗
██║  ██║╚██████╔╝██║ ╚═╝ ██║███████╗     ██║ ╚═╝ ██║███████╗██║ ╚████║╚██████╔╝██████╔╝██║  ██║██║  ██║
╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝     ╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝

This makes sure that the menubar home object on the homescreen are colored correctly.
*/

function homeMenubar() {
  let selectedMenubarItem = (document.querySelectorAll("a[href='home.html']"))[0]; // Get the selected menubar item.
  selectedMenubarItem.style.backgroundColor = '#4169e1';
  selectedMenubarItem.style.color = '#000000';
}
