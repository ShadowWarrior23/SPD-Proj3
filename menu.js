const cartIcon = document.querySelector("#cart-icon");
const shoppingCart = document.querySelector(".shopping-cart");
const closeCart = document.querySelector("#cart-close");

cartIcon.addEventListener("click", (event) => {
    event.preventDefault();
    shoppingCart.classList.add("active")
  });
  closeCart.addEventListener("click", () => shoppingCart.classList.remove("active"));



const bigCardsDivs = document.querySelectorAll(".big-cards");
const bigCardsDiv1 = document.querySelector(".big-cards1");
const bigCardsDiv2 = document.querySelector(".big-cards2");
const bigCardsDiv3 = document.querySelector(".big-cards3");
const bigCardsDiv4 = document.querySelector(".big-cards4");
const bigCardsDiv5 = document.querySelector(".big-cards5");
const bigCardsDiv6 = document.querySelector(".big-cards6");
for (let i = 1; i <= 28; i++) {
    const div = document.createElement("div");
    div.classList.add("big-card", `big-card${i}`, "hidden");
    const btn = document.createElement("button");
    btn.innerText = "x";
    div.appendChild(btn);
    const img = document.createElement("img");
    img.src = `img/img${i}.png`;
    div.appendChild(img);
    const p = document.createElement("p");
    p.id = `p${i}`;
    div.appendChild(p);
    const a = document.createElement("a");
    a.href = "#";
    a.innerHTML = `<i class="bi bi-cart4 addCart"></i>`;
    div.appendChild(a);
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
    else {
        bigCardsDiv6.appendChild(div);
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

for (let i = 0; i <= 27; i++) {
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
}