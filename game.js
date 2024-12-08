const preloader = document.querySelector("#preloader");

window.addEventListener("load", () => {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
})


const navbar = document.querySelector("nav");
const menuButton = document.querySelector("#menu-button")
menuButton.addEventListener("click", () => {
    navbar.classList.toggle("slide");
})

