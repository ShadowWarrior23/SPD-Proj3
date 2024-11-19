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

sr.reveal('.home-image',{delay:350, origin:'left'})
sr.reveal('.about-text-content',{delay:350, origin:'right'})
sr.reveal('#about-image',{delay:350, origin:'left'})
sr.reveal('.slide-container', {delay:350, origin:'left'})


new Swiper(".slide-container", {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    spaceBetween: 20, 
    slidesPerView: 1, 
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
