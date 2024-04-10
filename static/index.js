const NAV_OPEN_CLASS_NAME = 'nav-open';
const INPUT_VALID_CLASS_NAME = 'contact__input_valid';

function toggleNavbar() {
    const navbar = document.getElementById('nav');

    if (navbar.classList.contains(NAV_OPEN_CLASS_NAME)) {
        navbar.classList.remove(NAV_OPEN_CLASS_NAME);
        return;
    }
    navbar.classList.add(NAV_OPEN_CLASS_NAME);
}

function toggleValid({ target }) {
    if (target.value) {
        target.classList.add(INPUT_VALID_CLASS_NAME);
        return;
    }
    target.classList.remove(INPUT_VALID_CLASS_NAME);
}

for (const input of document.getElementsByClassName('contact__input'))
    input.addEventListener('blur', toggleValid);
