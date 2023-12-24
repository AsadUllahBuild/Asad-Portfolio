var typed = new Typed(".text", {
    strings: ["frontend Developer", "web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


document.querySelector('.hamburger-menu').addEventListener('click', function() {
    this.classList.toggle('change');
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');

    const homeSection = document.querySelector('#home');

    // If nav-links is open
    if (navLinks.classList.contains('show')) {
        // Calculate the height of the nav-links element
        const navLinksHeight = navLinks.getBoundingClientRect().height;

        // Get the top position of the home section
        const homeSectionTop = homeSection.offsetTop;

        // Scroll to the top of the home section adjusted by the nav-links height
        window.scrollTo({ top: homeSectionTop - navLinksHeight, behavior: 'smooth' });
    } else {
        // Scroll back to the top when nav-links is closed
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});




