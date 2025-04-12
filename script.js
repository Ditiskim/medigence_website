// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Add scroll event listener for navbar transparency
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        document.querySelector('.nav-link').style.color = '#004aad';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.1)';
        document.querySelector('.nav-link').style.color = 'white';
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}); 