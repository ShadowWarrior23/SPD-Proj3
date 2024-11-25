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

//Keresés:

const mGlass = document.getElementById('mGlass');
const sBar = document.querySelector('.hidden2');
mGlass.addEventListener('click', event => {
    sBar.classList.toggle('active');
    sBar.classList.toggle('hidden');
})

const sRes = document.querySelector('.form-control');
sRes.addEventListener('input', event => {
    const sVal = sRes.value;
    const foodNames = document.querySelectorAll('main h3');
    const cards = document.querySelectorAll('.cardCust');
    for (let i = 0; i < cards.length; i++) {
        if (sVal == '') {
            cards[i].style.display = 'flex'
        }
        if (sVal in cards[i].querySelector('h3')) {
            cards[i].style.display = 'none'
        }
    }
})