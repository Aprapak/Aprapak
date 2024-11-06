// Variables for menu button, sidebar menu, and pages
const menuButton = document.getElementById('menuButton');
const sidebarMenu = document.getElementById('sidebarMenu');
const pages = document.querySelectorAll('.page');

// Toggle Sidebar Menu Visibility
menuButton.addEventListener('click', () => {
    // Toggle the 'visible' class to show or hide the sidebar
    sidebarMenu.classList.toggle('visible');
});

// Navigation: Show the selected page and hide others
document.querySelectorAll('#sidebarMenu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default anchor behavior

        // Get the target page from the clicked link's data attribute
        const targetPage = this.getAttribute('data-page');

        // Hide all pages and show only the selected one
        pages.forEach(page => {
            page.classList.remove('active'); // Remove the active class from all pages
            if (page.id === targetPage) {
                page.classList.add('active'); // Add the active class to the target page
            }
        });

        // Hide the sidebar menu after selecting a page
        sidebarMenu.classList.remove('visible');
    });
});

// Smooth Scrolling for Page Transitions
// Applies smooth scrolling effect when navigating between sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default jump to anchor behavior

        // Smoothly scroll to the section specified in the href attribute
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
