const toggler = document.querySelector('.toggler');
const list = document.querySelector('.nav_list');

toggler.addEventListener('click', () => {
    list.classList.toggle('show_links');
})