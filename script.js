const slideWait = 2000;
const sidebar = document.getElementById("sidebar");
const progressBar = document.getElementById("progressBar");
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");
const topButton = document.getElementById("toTopButton");

let navOpen = false;
let slideIndex = 1;
let timeoutID;

!function () {
    window.addEventListener("scroll", () => {
        topButton.style.display = (window.scrollY > 0) ? "block" : "none";
        const getTabHeight = () => document.documentElement.scrollHeight - window.innerHeight;
        progressBar.style.width = `${(window.scrollY / getTabHeight()) * 100}%`;
    });

    topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

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

    showSlides(slideIndex);
}();

function toggleNav() {
    sidebar.style.width = (navOpen) ? 0 : "15vw";
    navOpen = !navOpen;
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
    if (n > slides.length) slideIndex = 1;
    else if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
    for (let i = 0; i < dots.length; i++) dots[i].className = dots[i].className.replace(" active", "");

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    timeoutID = setTimeout(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, slideWait);
}