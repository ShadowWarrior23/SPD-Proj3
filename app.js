const preloader = document.querySelector("#preloader");

window.addEventListener("load", () => {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
})

const navbar = document.querySelector("nav");
const menuButton = document.querySelector("#menu-button")
menuButton.addEventListener("click", () => {
    navbar.classList.toggle("active");
})

const sr = ScrollReveal ({
    distance : '45px',
    duration : 2700,
    reset : true,
})

sr.reveal('.home-image',{delay:350, origin:'right'})
sr.reveal('.about-text-content',{delay:350, origin:'right'})
sr.reveal('#about-image',{delay:350, origin:'left'})