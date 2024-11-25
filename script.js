let navOpen = false;
let slideIndex = 1;

!function () {
    showSlides(slideIndex);
}();

function toggleNav() {
    let sidebar = document.getElementById("sidebar");
    if (!navOpen) {
        sidebar.style.width = "250px";
        navOpen = true;
    } else {
        sidebar.style.width = "0";
        navOpen = false;
    }
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function setSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1
    } else if (n < 1) {
        slideIndex = slides.length
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}