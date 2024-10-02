document.addEventListener('scroll', () => {
    if (window.scrollY < 1) {
        document.querySelector('.js-header').classList.remove('header--scrolled');
    }
    else {
        document.querySelector('.js-header').classList.add('header--scrolled');
    }
});