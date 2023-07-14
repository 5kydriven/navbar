const navBtn = document.querySelector('.nav-toggle');

navBtn.addEventListener('click', () => {
    document.querySelector('.links').classList.toggle('show-links')
})