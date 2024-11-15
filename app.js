const filter = document.querySelector('.bi-funnel');
const types = document.querySelector('#types');
const menuLine = document.querySelector('#menuline');
filter.addEventListener('click', event => {
    types.classList.toggle('hidden');
    menuLine.classList.toggle('hidden');
    filter.classList.toggle('bi-funnel-fill');
    filter.classList.toggle('bi-funnel');
})