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

const sr = ScrollReveal({
  distance: '45px',
  duration: 2700,
  reset: true,
})

sr.reveal('.home-image', { delay: 300, origin: 'left' })
sr.reveal('.about-text-content', { delay: 300, origin: 'right' })
sr.reveal('#about-image', { delay: 300, origin: 'left' })
sr.reveal('.slide-container', { delay: 300, origin: 'left' })
sr.reveal('#review .row', {delay: 300, origin: 'right'})
sr.reveal('#blog .row', {delay: 300, origin: 'left'})


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

const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".shopping-cart");
const closeCart = document.querySelector("#cart-close");
const cartContent = document.querySelector(".cart-content");
const totalPriceElement = document.querySelector(".total-price");
const cartCountElement = document.querySelector("#quantity");
let itemsAdded = [];

cartIcon.addEventListener("click", (event) => {
  event.preventDefault();
  cart.classList.add("active")
});
closeCart.addEventListener("click", () => cart.classList.remove("active"));

document.querySelectorAll(".add-cart").forEach(button =>
  button.addEventListener("click", function () {
    const product = this.closest(".card");
    const title = product.querySelector("h4").textContent;
    const price = product.querySelector("span").textContent;
    const imgSrc = product.querySelector("img").src;

    const existingItem = itemsAdded.find(item => item.title === title);
    if (existingItem) {
      existingItem.quantity += 1;
    }
    else {
      itemsAdded.push({ title, price, imgSrc, quantity: 1 });
    }

    updateCart();
  })
);

cartContent.addEventListener("click", function (e) {
  if (e.target.classList.contains("cart-remove")) {
    const title = e.target.closest(".cart-box").querySelector(".cart-product-title").textContent;
    itemsAdded = itemsAdded.filter(item => item.title !== title);
    updateCart();
  }
});


cartContent.addEventListener("input", function (e) {
  if (e.target.classList.contains("cart-quantity")) {
    const cartBox = e.target.closest(".cart-box");
    const title = cartBox.querySelector(".cart-product-title").textContent;
    const newQuantity = parseInt(e.target.value);

    const item = itemsAdded.find(item => item.title === title);
    if (item) {
      item.quantity = newQuantity;
      updateCart();
    }
  }
});

function updateCart() {
  cartContent.innerHTML = itemsAdded
    .map(
      item => `
        <div class="cart-box">
          <img src="${item.imgSrc}" alt="" class="cart-img">
          <div class="detail-box">
            <div class="cart-product-title">${item.title}</div>
            <div class="cart-price">${item.price}</div>
            <input type="number" value="${item.quantity}" class="cart-quantity" min="1">
          </div>
          <i class="fa-solid fa-trash cart-remove"></i>
        </div>
      `
    )
    .join("");

  const total = itemsAdded.reduce((sum, item) => {
    const itemPrice = parseFloat(item.price.replace("$", ""));
    return sum + itemPrice * item.quantity;
  }, 0);

  totalPriceElement.textContent = `$${total.toFixed(2)}`;
  cartCountElement.textContent = itemsAdded.reduce((count, item) => count + item.quantity, 0);
}

const purchaseButton = document.querySelector("#btn-buy");
purchaseButton.addEventListener("click", () => {
  if (itemsAdded.length === 0) {
    alert("Your cart is empty!");
  }
  else {
    alert("Thank you for your purchase!")
  };

  itemsAdded = [];
  updateCart()
})


const sendButton = document.querySelector(".send-button");
sendButton.addEventListener("click", (event) => {
  event.preventDefault();
  alert("Thank you for getting in touch! We will look over your message and get back to you as soon as we can.")
  document.querySelector('textarea').textContent = '';
})

