document.addEventListener('DOMContentLoaded', function() {
    var slides = document.querySelectorAll('.slide');
    var indicators = document.querySelectorAll('.nav-indicator');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
                slide.querySelector('.background-video').play(); // Play the video for the active slide
            } else {
                slide.classList.remove('active');
                slide.querySelector('.background-video').pause(); // Pause the video for inactive slides
            }
        });
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Optional: Automatic slide change
    setInterval(() => {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        showSlide(currentSlide);
    }, 5000); // Change slide every 5 seconds

    // Initial display
    showSlide(currentSlide);
});
