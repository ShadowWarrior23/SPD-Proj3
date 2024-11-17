//Hero image, preload:

const preloader = document.querySelector("#preloader");

window.addEventListener("load", () => {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
})

const sr = ScrollReveal ({
    distance : '45px',
    duration : 2700,
    reset : true,
})

sr.reveal('.home-image',{delay:350, origin:'right'})
sr.reveal('.about-text-content',{delay:350, origin:'right'})
sr.reveal('#about-image',{delay:350, origin:'left'})

//Szűrés:

const filter = document.querySelector('.bi-funnel');
const filter0 = document.querySelector('#funnel');
const types = document.querySelector('#types');
const menuLine = document.querySelector('#menuline');
filter0.addEventListener('click', event => {
    types.classList.toggle('hidden');
    menuLine.classList.toggle('hidden');
    filter.classList.toggle('bi-funnel-fill');
    filter.classList.toggle('bi-funnel');
})


//Kosár:

const cart0 = document.querySelector('#cartOpen0');
const cart = document.querySelector('#cartOpen');
cart0.addEventListener('click', event => {
    cart.classList.toggle('bi-cart-fill');
    cart.classList.toggle('bi-cart4');
})

//Kártyahívás:

const app1 = document.querySelector("#app1");
const bigCard1 = document.querySelector(".big-card1");
const x = document.querySelector(".big-card1 button");
const overlay = document.querySelector("#overlay");
app1.addEventListener("click", () => {
    bigCard1.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
    document.body.style.overflow = 'hidden';
})

x.addEventListener("click", () => {
    bigCard1.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
    document.body.style.overflow = '';
})