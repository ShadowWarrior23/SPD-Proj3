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

const cartIcon = document.querySelector("#cart-icon");
const shoppingCart = document.querySelector(".shopping-cart");
const closeCart = document.querySelector("#cart-close");
const cartContent = document.querySelector(".cart-content");
const totalPriceElement = document.querySelector(".total-price");
const cartCountElement = document.querySelector("#quantity");
let itemsAdded = [];

cartIcon.addEventListener("click", (event) => {
    event.preventDefault();
    shoppingCart.classList.add("open")
});
closeCart.addEventListener("click", () => shoppingCart.classList.remove("open"));

document.querySelectorAll(".addCart").forEach(button =>
    button.addEventListener("click", function (event) {
        event.preventDefault();
        const product = this.closest(".card");
        const title = product.querySelector("h3").textContent;
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
        const itemPrice = parseFloat(item.price.replace("£", ""));
        return sum + itemPrice * item.quantity;
    }, 0);

    totalPriceElement.textContent = `£${total.toFixed(2)}`;
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


const bigCardsDivs = document.querySelectorAll(".big-cards");
const bigCardsDiv1 = document.querySelector(".big-cards1");
const bigCardsDiv2 = document.querySelector(".big-cards2");
const bigCardsDiv3 = document.querySelector(".big-cards3");
const bigCardsDiv4 = document.querySelector(".big-cards4");
const bigCardsDiv5 = document.querySelector(".big-cards5");
const bigCardsDiv6 = document.querySelector(".big-cards6");
const bigCardsDiv7 = document.querySelector(".big-cards7");
for (let i = 1; i <= 36; i++) {
    const div = document.createElement("div");
    div.classList.add("big-card", `big-card${i}`, "hidden");
    const box =  document.createElement("div");
    box.classList.add("big-card-content");
    const img = document.createElement("img");
    img.src = `img/img${i}.png`;
    box.appendChild(img);
    const p = document.createElement("p");
    p.id = `p${i}`;
    box.appendChild(p);
    const btn = document.createElement("button");
    btn.innerText = "x";
    box.appendChild(btn);
    div.appendChild(box);
    if (i <= 4) {
        bigCardsDiv1.appendChild(div);
    }
    else if (i <= 8) {
        bigCardsDiv2.appendChild(div);
    }
    else if (i <= 12) {
        bigCardsDiv3.appendChild(div);
    }
    else if (i <= 20) {
        bigCardsDiv4.appendChild(div);
    }
    else if (i <= 24) {
        bigCardsDiv5.appendChild(div);
    }
    else if (i <= 28) {
        bigCardsDiv6.appendChild(div);
    } 
    else {
        bigCardsDiv7.appendChild(div);
    }

    const overlay = document.createElement("div");
    overlay.id = `overlay${i}`
    overlay.classList.add("overlay", "hidden");
    bigCardsDivs.forEach(card => {
        card.appendChild(overlay)
    })
}

const details = document.querySelectorAll(".details");
const bigCards = document.querySelectorAll(".big-card");
const xBtns = document.querySelectorAll(".big-card button");
const overlays = document.querySelectorAll(".overlay");

for (let i = 0; i <= 35; i++) {
    details[i].addEventListener("click", () => {
        bigCards[i].classList.toggle("hidden");
        overlays[i].classList.toggle("hidden");
        document.body.style.overflow = 'hidden';
    })
    xBtns[i].addEventListener("click", () => {
        bigCards[i].classList.toggle("hidden");
        overlays[i].classList.toggle("hidden");
        document.body.style.overflow = '';
    })
    overlays[i].addEventListener("click", () => {
        bigCards[i].classList.toggle("hidden");
        overlays[i].classList.toggle("hidden");
        document.body.style.overflow = '';
    })
}