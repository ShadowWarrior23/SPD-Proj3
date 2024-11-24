const bigCardsDiv = document.querySelector(".big-cards");
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
    bigCardsDiv.appendChild(div);
    const overlay = document.createElement("div");
    overlay.id = `overlay${i}`
    overlay.classList.add("overlay", "hidden");
    bigCardsDiv.appendChild(overlay);
}

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

const cart0 = document.querySelector('#cartOpen0');
const cart = document.querySelector('#cartOpen');
cart0.addEventListener('click', event => {
    cart.classList.toggle('bi-cart-fill');
    cart.classList.toggle('bi-cart4');
})

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