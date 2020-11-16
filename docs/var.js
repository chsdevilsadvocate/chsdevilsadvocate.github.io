/*
██╗   ██╗ █████╗ ██████╗ ███████╗
██║   ██║██╔══██╗██╔══██╗██╔════╝
██║   ██║███████║██████╔╝███████╗
╚██╗ ██╔╝██╔══██║██╔══██╗╚════██║
 ╚████╔╝ ██║  ██║██║  ██║███████║
  ╚═══╝  ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝

***************************************** WARNING *****************************************
* This is not ever used!  It used to be a screensize variable, but vw units work better!  *
***************************************** WARNING *****************************************
*/

function defVars() {
    // Set up a variable for the screen size.  This is no longer used, because vw units exist.
    document.body.style.setProperty("--screen-size", window.innerWidth + "px");
}
