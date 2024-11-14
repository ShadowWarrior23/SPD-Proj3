const filter = document.querySelector('.bi-funnel');
const types = document.querySelector('.types');
filter.addEventListener('click', event => {
    types.classList.toggle('active');
    types.classList.toggle('hidden');
})