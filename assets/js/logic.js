// Select the theme icon element for toggling themes
const themeIcon = document.getElementById('theme');

// Check localStorage for the saved theme preference when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'sun'; // Default to 'sun' if no saved theme
    applyTheme(savedTheme); // Apply the saved theme
});

// Function to toggle between light and dark mode
themeIcon.addEventListener('click', () => {
    const currentTheme = themeIcon.getAttribute('data-status'); // Get current theme status
    const newTheme = currentTheme === 'sun' ? 'moon' : 'sun'; // Toggle theme
    applyTheme(newTheme); // Apply the new theme
    localStorage.setItem('theme', newTheme); // Save the new theme to localStorage
});

// Function to apply the theme based on the status ('sun' or 'moon')
function applyTheme(status) {
    if (status === 'moon') {
        // Apply dark mode styles
        document.body.classList.add('dark-mode');
        themeIcon.src = themeIcon.getAttribute('data-moon'); // Change icon to moon
        themeIcon.setAttribute('data-status', 'moon'); // Update theme status
    } else {
        // Apply light mode styles
        document.body.classList.remove('dark-mode');
        themeIcon.src = themeIcon.getAttribute('data-sun'); // Change icon to sun
        themeIcon.setAttribute('data-status', 'sun'); // Update theme status
    }
}
