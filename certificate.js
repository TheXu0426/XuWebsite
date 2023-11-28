document.addEventListener('DOMContentLoaded', function () {
    const mainImage = document.getElementById('main-image');
    const overlay = document.getElementById('overlay');
    let isOverlayVisible = false;

    function toggleOverlay() {
        isOverlayVisible = !isOverlayVisible;
        overlay.style.opacity = isOverlayVisible ? 1 : 0;
    }

    // Mouse events
    mainImage.addEventListener('mouseenter', showOverlay);
    overlay.addEventListener('mouseleave', hideOverlay);

    // Touch events
    mainImage.addEventListener('touchstart', function (event) {
        event.preventDefault(); // Prevent the default touch behavior
        toggleOverlay();
    });

    overlay.addEventListener('touchend', function (event) {
        event.preventDefault(); // Prevent the default touch behavior
        hideOverlay();
    });

    // Prevent scrolling on touch devices while interacting with the overlay
    overlay.addEventListener('touchmove', function (event) {
        event.preventDefault();
    });
});
