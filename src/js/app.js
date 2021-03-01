document.addEventListener('DOMContentLoaded', () => {
    // Variables
    const $nav = document.querySelector('.nav');
    const $nav__toggle = document.querySelector('.nav__toggle');
    const $nav__links = document.querySelector('.nav__links');
    const $backdrop = document.querySelector('.backdrop');

    // Functions
    const showMenu = () => {
        $backdrop.classList.remove('hidden');
        $nav__links.style.setProperty('display', 'flex');
        $nav__toggle.setAttribute('src', 'build/images/icon-close.svg');
    }

    const closeMenu = () => {
        $backdrop.classList.add('hidden');
        $nav__links.style.setProperty('display', 'none');
        $nav__toggle.setAttribute('src', 'build/images/icon-hamburger.svg');
    }

    const toggleMenu = () => {
        if ($backdrop.classList.contains('hidden')) {
            showMenu();
        } else {
            closeMenu();
        }
    }

    // App
    $nav__toggle.addEventListener('click', toggleMenu);

    window.addEventListener('scroll', ()=> {
        let windowPosition = window.scrollY > 0;
        if (windowPosition) {
            $nav.style.setProperty('position', 'fixed');
            $nav.classList.add('box-shadow');
            closeMenu();
        } else {
            $nav.style.setProperty('position', 'relative');
            $nav.classList.remove('box-shadow');
        }
    })
});