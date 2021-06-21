const btnOpenGift = window.document.querySelector('.btn-open-gift');
const btnClose = window.document.querySelector('.btn-close');
const modal = window.document.querySelector('.modal');

btnOpenGift.addEventListener('click', (event) => {
    modal.classList.toggle('modal--active');
});

btnClose.addEventListener('click', (event) => {
    modal.classList.remove('modal--active');
});