function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
    if (document.getElementsByClassName("navigation")[0].classList.contains("responsive")) {
        document.getElementsByClassName("navigation")[0].children[0].children[0].innerHTML = "&#9830; ";
    }
    else {
        document.getElementsByClassName("navigation")[0].children[0].children[0].innerHTML = "&#9826; Menu";
    }
}

var oldPosition = window.pageYOffset;
window.onscroll = function() {
    var newPosition = window.pageYOffset;
        if (oldPosition < newPosition) {
            document.getElementById('sliding-nav').style.display = 'flex';
            document.getElementById('sliding-nav').style.top = "-0";
        } else {
            document.getElementById('sliding-nav').style.top = "-65px";
        }
        oldPosition = newPosition;

        }
