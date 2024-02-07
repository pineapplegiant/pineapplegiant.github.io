document.addEventListener('DOMContentLoaded', function() {

    // JavaScript code for creating hamburger menu
    let previousWidth = window.innerWidth;
    const menuToggle = document.getElementById('menu-btn');
    const menu = document.querySelector('ul.menu');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        menu.classList.toggle('open');
    });

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

  // Function to handle window resize
    function handleResize() {
        let currentWidth = window.innerWidth;

        // Check if the window was resized to a larger screen size
        if (currentWidth > previousWidth && currentWidth >= 776) {
            closeMenu(); // Close the menu
        }
        // Update the previousWidth for the next comparison
        previousWidth = currentWidth;
    }

    // Function to close the menu
    function closeMenu() {
        menu.classList.remove('open');
        menuToggle.classList.remove('active');
    }
});

