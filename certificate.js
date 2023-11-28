document.addEventListener('DOMContentLoaded', function () {
    const mainImage = document.getElementById('main-image');
    const overlay = document.getElementById('overlay');

    function showOverlay() {
        overlay.style.opacity = 1;
    }

    function hideOverlay() {
        overlay.style.opacity = 0;
    }

    // Mouse events
    mainImage.addEventListener('mouseenter', showOverlay);
    overlay.addEventListener('mouseleave', hideOverlay);

    // Touch events
    mainImage.addEventListener('touchstart', showOverlay);
    overlay.addEventListener('touchend', hideOverlay);
});
