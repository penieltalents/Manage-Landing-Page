const sideNav = document.getElementById("menu")
const menu = document.querySelector(".menuBtn")

sideNav.style.display = "none";
menu.onclick = function () {
    if (sideNav.style.display == "none") {
        sideNav.style.display = "flex";
    }
    else {
        sideNav.style.display = "none";
    }
}

var scroll = new SmoothScroll('a[href*="#"]');