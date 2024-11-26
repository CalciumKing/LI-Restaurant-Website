let navOpen = false;
let slideIndex = 1;
let timeoutID;
const slideWait = 2000;

!function () {
    window.addEventListener("scroll", () => document.getElementById("toTopButton").style.display = (window.scrollY > 0) ? "block" : "none");
    for (const image of document.getElementsByClassName("slideImage")) {
        image.addEventListener("mouseover", () => clearTimeout(timeoutID));
        image.addEventListener("mouseout", () => {
            clearTimeout(timeoutID);
            timeoutID = setTimeout(() => {
                slideIndex++;
                showSlides(slideIndex);
            }, slideWait);
        });
    }
    
    scrollProgressBar();
    showSlides(slideIndex);
}();

function scrollProgressBar() {
    const getTabHeight = () => document.documentElement.scrollHeight - window.innerHeight;
    const getWidth = () => {
        let totalHeight = getTabHeight();
        if (totalHeight === 0) return "100%";
        return `${(window.scrollY / totalHeight) * 100}%`;
    };
    document.addEventListener("scroll", () => document.getElementById("progressBar").style.width = getWidth());
}

function toggleNav() {
    let sidebar = document.getElementById("sidebar");
    if (!navOpen) {
        sidebar.style.width = "15vw";
        navOpen = true;
    } else {
        sidebar.style.width = "0";
        navOpen = false;
    }
}

function plusSlides(n) {
    clearTimeout(timeoutID);
    showSlides(slideIndex += n);
}

function setSlide(n) {
    clearTimeout(timeoutID);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    timeoutID = setTimeout(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, slideWait);
}