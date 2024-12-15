function initializePreloader() {
    const preloader = document.querySelector("#preloader");
    window.addEventListener("load", () => {
        preloader.classList.add("loaded");
        document.body.classList.add("loaded");
    });
}


function initializeMenuButton() {
    const navbar = document.querySelector("nav");
    const menuButton = document.querySelector("#menu-button");
    menuButton.addEventListener("click", (event) => {
        event.preventDefault();
        navbar.classList.toggle("active");
    });
}

function initializeCart() {
    const cartIcon = document.querySelector("#cart-icon");
    const cart = document.querySelector(".shopping-cart");
    const closeCart = document.querySelector("#cart-close");
    const cartContent = document.querySelector(".cart-content");
    const totalPriceElement = document.querySelector(".total-price");
    const cartCountElement = document.querySelector("#quantity");
    const purchaseButton = document.querySelector("#btn-buy");
    let itemsAdded = [];

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

    cartIcon.addEventListener("click", (event) => {
        event.preventDefault();
        cart.classList.add("active");
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
            } else {
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
            const newQuantity = e.target.value === "" ? 0 : parseInt(e.target.value);

            const item = itemsAdded.find(item => item.title === title);
            if (item) {
                item.quantity = newQuantity;
                updateCart();
            }
        }
    });

    purchaseButton.addEventListener("click", () => {
        if (itemsAdded.length === 0) {
            alert("Your cart is empty!");
        } else {
            alert("Thank you for your purchase!");
        }
        itemsAdded = [];
        updateCart();
    });
}


function initializeBigCards() {
    const bigCardsDivs = document.querySelectorAll(".big-cards");
    const bigCards = [
        document.querySelector(".big-cards1"),
        document.querySelector(".big-cards2"),
        document.querySelector(".big-cards3"),
        document.querySelector(".big-cards4"),
        document.querySelector(".big-cards5"),
        document.querySelector(".big-cards6"),
        document.querySelector(".big-cards7"),
        document.querySelector(".big-cards8")
    ];

    for (let i = 1; i <= 40; i++) {
        const div = document.createElement("div");
        div.classList.add("big-card", `big-card${i}`, "hidden");
        const box = document.createElement("div");
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
            bigCards[0].appendChild(div);
        } else if (i <= 8) {
            bigCards[1].appendChild(div);
        } else if (i <= 12) {
            bigCards[2].appendChild(div);
        } else if (i <= 20) {
            bigCards[3].appendChild(div);
        } else if (i <= 24) {
            bigCards[4].appendChild(div);
        } else if (i <= 28) {
            bigCards[5].appendChild(div);
        } else if (i <= 36) {
            bigCards[6].appendChild(div);
        } else {
            bigCards[7].appendChild(div);
        }

        const overlay = document.createElement("div");
        overlay.id = `overlay${i}`;
        overlay.classList.add("overlay", "hidden");
        bigCardsDivs.forEach(card => {
            card.appendChild(overlay);
        });
    }

    const details = document.querySelectorAll(".details");
    const bigCardElements = document.querySelectorAll(".big-card");
    const xBtns = document.querySelectorAll(".big-card button");
    const overlays = document.querySelectorAll(".overlay");

    for (let i = 0; i <= 39; i++) {
        details[i].addEventListener("click", () => {
            bigCardElements[i].classList.toggle("hidden");
            overlays[i].classList.toggle("hidden");
            document.body.style.overflow = 'hidden';
        });
        xBtns[i].addEventListener("click", () => {
            bigCardElements[i].classList.toggle("hidden");
            overlays[i].classList.toggle("hidden");
            document.body.style.overflow = '';
        });
        overlays[i].addEventListener("click", () => {
            bigCardElements[i].classList.toggle("hidden");
            overlays[i].classList.toggle("hidden");
            document.body.style.overflow = '';
        });
    }
}

function initializeSearch() {
    const searchB = document.querySelector('#searchB');
    searchB.addEventListener('input', searchDish)

    function searchDish() {
        const searchTerm = searchB.value.toLowerCase();
        const cards = document.querySelectorAll('.cardCust');

        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                card.style.display = '';
            } else if (searchTerm === '') {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }
}


function initializeApp() {
    initializePreloader();
    initializeMenuButton();
    initializeCart();
    initializeSearch();
}


document.addEventListener("DOMContentLoaded", () => {
    initializeApp();
})