const themeIcon = document.getElementById('theme');

// Check localStorage for the saved theme preference when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'sun';
    applyTheme(savedTheme);
});

// Function to toggle between light and dark mode
themeIcon.addEventListener('click', () => {
    const currentTheme = themeIcon.getAttribute('data-status');
    const newTheme = currentTheme === 'sun' ? 'moon' : 'sun';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});

// Function to apply the theme based on the status ('sun' or 'moon')
function applyTheme(status) {
    if (status === 'moon') {
        document.body.classList.add('dark-mode');
        themeIcon.src = themeIcon.getAttribute('data-moon');
        themeIcon.setAttribute('data-status', 'moon');
    } else {
        document.body.classList.remove('dark-mode');
        themeIcon.src = themeIcon.getAttribute('data-sun');
        themeIcon.setAttribute('data-status', 'sun');
    }
}
