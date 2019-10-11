function toggleMenu() {
    var x = document.getElementsByClassName("navigation")[0].className
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
    if (x == "navigation") {
        document.getElementsByClassName("navigation.responsive")[0].innerHTML = "&#9748;";
    }
    else {
        document.getElementsByClassName("navigation")[0].innerHTML = ("&#9730; Menu");
    }
}