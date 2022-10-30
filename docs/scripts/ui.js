window.onscroll = function () { navScrollFunction(); scrollTopFadeIn() };

function navScrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("navbar-desktop").style.padding = "0rem 1.5rem";
        document.getElementById("nav-title").style.fontSize = "15px";
    } else {
        document.getElementById("navbar-desktop").style.padding = "3rem 1.5rem ";
        document.getElementById("nav-title").style.fontSize = "20px";
    }
}

function scrollTopFadeIn() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("scroll-to-top").style.opacity = "90%";
        document.getElementById("scroll-to-top").style.display = "inline";
    } else {
        document.getElementById("scroll-to-top").style.opacity = "0%";
        document.getElementById("scroll-to-top").style.display = "none";
    }
}
