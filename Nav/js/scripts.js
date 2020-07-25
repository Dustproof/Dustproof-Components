function openNavMenu() {
    var navMenu = document.getElementById('nav-menu-container');

    if ( $('#nav-menu-container').css('display') == "none") {
        navMenu.style.display = "flex";
    }

    else {
        navMenu.style.display = "none";
    }
}