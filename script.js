// Smooth scrolling effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Button hover animation
const buttons = document.querySelectorAll('.cta-buttons button');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

// Floating animation for images
const images = document.querySelectorAll('.image-cards img');
images.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'translateY(-15px)';
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = 'translateY(0)';
    });
});
