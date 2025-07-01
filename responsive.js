document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navButtons = document.querySelector('.navigation_buttons');
    if (menuToggle && navButtons) {
        menuToggle.addEventListener('click', function() {
            navButtons.classList.toggle('show');
        });
        // Optional: close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (
                navButtons.classList.contains('show') &&
                !navButtons.contains(e.target) &&
                !menuToggle.contains(e.target)
            ) {
                navButtons.classList.remove('show');
            }
        });
    }
});