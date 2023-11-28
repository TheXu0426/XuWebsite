document.addEventListener('DOMContentLoaded', function () {
    const mainImage = document.getElementById('main-image');
    const overlay = document.getElementById('overlay');

    mainImage.addEventListener('mouseenter', function () {
        overlay.style.opacity = 1;
    });

    overlay.addEventListener('mouseleave', function () {
        overlay.style.opacity = 0;
    });
});
