var headerJ = document.getElementById("header");
console.log(headerJ);

var sticky = headerJ.offsetTop;

window.onscroll = function() {stickyHeader()};

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        headerJ.classList.add("sticky");
    } else {
        headerJ.classList.remove("sticky");
    }
}