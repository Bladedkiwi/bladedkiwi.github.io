function toggleMenu() {
    var x = document.getElementsByClassName("navigation");
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
    if (x == x) {
        document.getElementsByClassName("active")[0].innerHTML = "&#9748; Menu";
    }
}