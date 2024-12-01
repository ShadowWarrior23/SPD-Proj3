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

const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".shopping-cart");
const closeCart = document.querySelector("#cart-close");

cartIcon.addEventListener("click", (event) => {
  event.preventDefault();
  cart.classList.add("active")
});
closeCart.addEventListener("click", () => cart.classList.remove("active"));

