document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add event listener for scroll to animate profile image on page scroll
window.addEventListener('scroll', function() {
    const profileImage = document.querySelector('.profile-img');
    const windowHeight = window.innerHeight;
    const imagePosition = profileImage.getBoundingClientRect().top;

    if (imagePosition < windowHeight - 100) {
        profileImage.style.opacity = 1;
        profileImage.style.transform = 'scale(1)';
    } else {
        profileImage.style.opacity = 0;
        profileImage.style.transform = 'scale(0.8)';
    }
});
