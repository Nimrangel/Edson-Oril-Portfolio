document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    // Initially open the nav bar
    navLinks.classList.add('close');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
});
