
const btn = document.querySelector('.menu-icon');
const menu = document.querySelector('#global-container')

btn.addEventListener('click', () => {
    menu.classList.toggle('menu-open')
});
