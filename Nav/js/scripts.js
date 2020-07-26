var navMenu = document.getElementById('nav-menu-container');

function openNavMenu() {

    if ( $('#nav-menu-container').css('display') == "flex") {
        navMenu.style.display = "none";
    }

    else {
        navMenu.style.display = "flex";
    }
}

var showNavMenu = function() {

    if (window.innerWidth > 768) {
        navMenu.style.display = "flex";
    }
    
    if (window.innerWidth < 768) {
        navMenu.style.display = "none";
    }

};

window.addEventListener("resize", showNavMenu);
window.addEventListener("onload", showNavMenu);