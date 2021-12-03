var menu = document.getElementById("menu");
var menuIcon = document.getElementById("menu-icon");
var aside = document.getElementsByTagName("ASIDE")[0];

menu.addEventListener("click", function() {
    if (aside.style.display == "block") {
        aside.style.display = "none";
        menuIcon.src = "images/menu.png";
    } else {
        aside.style.display = "block";
        menuIcon.src = "images/cancel.png";
    }
});