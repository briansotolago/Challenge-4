const themeIcon = document.getElementById('theme');

// Function to toggle between light and dark mode
themeIcon.addEventListener('click', () => {
    const currentTheme = themeIcon.getAttribute('data-status');

    if (currentTheme === 'sun') {
        document.body.classList.add('dark-mode');
        themeIcon.src = themeIcon.getAttribute('data-moon');
        themeIcon.setAttribute('data-status', 'moon');
    } else {
        document.body.classList.remove('dark-mode');
        themeIcon.src = themeIcon.getAttribute('data-sun');
        themeIcon.setAttribute('data-status', 'sun');
    }
});
