document.addEventListener('DOMContentLoaded', () => {
    // Variables
    const $nav = document.querySelector('.nav');
    const $nav__toggle = document.querySelector('.nav__toggle');
    const $nav__links = document.querySelector('.nav__links');
    const $backdrop = document.querySelector('.backdrop');
    const screenWidth = screen.width;
    const $main = document.querySelector('.main');
    const heigthNav = $nav.offsetHeight;

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
    $main.style.setProperty('padding-top', `${heigthNav}px`);

    $nav__toggle.addEventListener('click', toggleMenu);

    $nav__links.addEventListener('click', ()=> {
        if (screenWidth < 1200) {
            closeMenu();
        }
    })

    window.addEventListener('scroll', ()=> {
        let windowPosition = window.scrollY > 0;
        if (windowPosition) {
            $nav.classList.add('box-shadow');
            if (screenWidth < 1200) {
                closeMenu();
            }
        } else {
            $nav.classList.remove('box-shadow');
        }
    })
});