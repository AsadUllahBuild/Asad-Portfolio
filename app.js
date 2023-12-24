var typed = new Typed(".text", {
    strings: ["frontend Developer", "web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


document.querySelector('.hamburger-menu').addEventListener('click', function() {
    this.classList.toggle('change');
    document.querySelector('.nav-links').classList.toggle('show');
});


