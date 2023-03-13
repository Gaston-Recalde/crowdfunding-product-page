const open = document.querySelector('.nav__toggle-open');
const close = document.querySelector('.nav__toggle-close');
const menu = document.querySelector('.navbar');

const bookmark = document.querySelector('.button');
const bookmarkText = document.querySelector('.button-text');
const project = document.querySelector('.project');

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



// project.addEventListener('click', () => {

// });

bookmark.addEventListener('click', () => {
    if(bookmark.className === 'button'){
        bookmark.className = 'button-2';
        bookmarkText.className = 'button-text-2'
    } else {
        bookmark.className = 'button';
        bookmarkText.className = 'button-text'
    }
});