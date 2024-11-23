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

sr.reveal('.home-image',{delay:100, origin:'left'})
sr.reveal('.about-text-content',{delay:100, origin:'right'})
sr.reveal('#about-image',{delay:100, origin:'left'})
sr.reveal('.slide-container', {delay:100, origin:'left'})


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


const cartIcon = document.querySelector(".cart-icon");
const cart = document.querySelector(".shopping-cart");
const closeCart = document.querySelector("#cart-close");


cartIcon.addEventListener('click', () => {
  cart.classList.add('active');
})

closeCart.addEventListener('click', () => {
  cart.classList.remove('active');
});

if (document.readyState == "loading") {
  document.addEventListener('DOMContentLoaded', start);
}
else {
  start();
}


function start() {
  addEvents();
  updateCartCount();
  updateTotal();

}

function update() {
  addEvents();
  updateTotal();

}

function addEvents() {
  const cartRemove_btns = document.querySelectorAll(".cart-remove");
  cartRemove_btns.forEach((btn) => {
    btn.addEventListener("click", handle_removeCartItem);
  });


  const cartQuantity_inputs = document.querySelectorAll('.cart-quantity');
  cartQuantity_inputs.forEach(input => {
    input.addEventListener("change", handle_changeItemQuantity);
  });

  const addCart_btns = document.querySelectorAll(".add-cart");
  addCart_btns.forEach(btn => {
    btn.addEventListener("click", handle_addCartItem);
  });

  const buy_btn = document.querySelector(".btn-buy")
  buy_btn.addEventListener("click", handle_buyOrder);

}

let itemsAdded = []

function handle_addCartItem() {
  const product = this.parentElement;
  const title = product.querySelector(".product-title").innerHTML;
  const price = product.querySelector(".product-price").innerHTML;
  const imgSrc = product.querySelector(".product-img").src;


  const newtoAdd = {
    title,
    price,
    imgSrc,
  };

  if (itemsAdded.find((el) => el.title == newtoAdd.title)) {
    alert("Már benne van a kosárba");
    return;
  }
  else {
    itemsAdded.push(newtoAdd)
  }


  const cartBoxElement = cartBoxComponent(title, price, imgSrc);
  const newNode = document.createElement("div");
  newNode.innerHTML = cartBoxElement;
  const cartContent = cart.querySelector(".cart-content");
  cartContent.appendChild(newNode);


  update()
  updateCartCount();
}




function handle_removeCartItem() {
  this.parentElement.remove();
  itemsAdded = itemsAdded.filter(el => el.title != this.parentElement.querySelector('.cart-product-title').innerHTML)

  update();
  updateCartCount();
}

function handle_changeItemQuantity() {
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1;
  }
  this.value = Math.floor(this.value);

  update()
}

function handle_buyOrder(){
  if(itemsAdded.length <= 0) {
    alert("Nincs semmi a kosárba");
    return;
  }
  const cartContent = cart.querySelector(".cart-content");
  cartContent.innerHTML = "";
  alert("Köszönjük a rendelését.");
  itemsAdded = [];

  update();
  updateCartCount();
}


function updateTotal() {
  const cartBoxes = document.querySelectorAll(".cart-box");
  const totalElement = cart.querySelector(".total-price");
  let total = 0;
  cartBoxes.forEach(cartBox => {
    let priceElement = cartBox.querySelector(".cart-price");
    let price = parseFloat(priceElement.innerHTML.replace("Ft", ""));
    let quantity = cartBox.querySelector(".cart-quantity").value;
    total += price * quantity;
  });

  total = total.toFixed(2);

  totalElement.innerHTML = total + " Ft";
}

function updateCartCount() {
  const cartCountElement = document.querySelector('.cart-count');
  cartCountElement.textContent = itemsAdded.length;
}


function cartBoxComponent(title, price, imgSrc) {
  return `<div class="cart-box">
              <img src=${imgSrc} alt="" class="cart-img">
              <div class="detail-box">
                <div class="cart-product-title">${title}</div>
                <div class="cart-price">${price}</div>
                <input type="number" value="1" class="cart-quantity">
              </div>
              <i class="fa-solid fa-trash cart-remove"></i>
          </div>`
}
