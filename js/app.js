const open = document.querySelector('.nav__toggle-open');
const close = document.querySelector('.nav__toggle-close');
const menu = document.querySelector('.navbar');

open.addEventListener('click', () => {
    open.style.display = 'none';
    close.style.display = 'inline-block';
    menu.style.display = 'inline-block';
});

close.addEventListener('click', () => {
    open.style.display = 'inline-block';
    close.style.display = 'none';
    menu.style.display = 'none';
});