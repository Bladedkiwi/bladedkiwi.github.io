function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
    if (document.getElementsByClassName("navigation")[0].classList.contains("responsive")) {
        document.getElementsByClassName("navigation")[0].children[0].children[0].innerHTML = "&#9748; Menu";
    }
    else {
        document.getElementsByClassName("navigation")[0].children[0].children[0].innerHTML = "&#9730; Menu";
    }
}