window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop < 20 || document.documentElement.scrollTop < 0) {
        document.getElementById("navbar").style.top = "0px";
    } else {
        document.getElementById("navbar").style.top = "-70px";
    }
}