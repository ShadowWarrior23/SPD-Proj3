//Kosár:

const cart0 = document.querySelector('#cartOpen0');
const cart = document.querySelector('#cartOpen');
cart0.addEventListener('click', event => {
    cart.classList.toggle('bi-cart-fill');
    cart.classList.toggle('bi-cart4');
})
