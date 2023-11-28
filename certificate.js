document.addEventListener('DOMContentLoaded', function () {
    const mainImage = document.getElementById('main-image');
    const overlay = document.getElementById('overlay');

    function toggleOverlay() {
        overlay.style.opacity = (overlay.style.opacity === '0') ? '1' : '0';
    }

    // Mouse events
    mainImage.addEventListener('click', toggleOverlay);

    // Touch events
    mainImage.addEventListener('touchstart', toggleOverlay);

    // Prevent scrolling on touch devices while interacting with the overlay
    overlay.addEventListener('touchmove', function (e) {
        e.preventDefault();
    });
});
