
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    body.classList.toggle('dark_mode');

    if (body.classList.contains('dark_mode')) {
        themeIcon.src = '../images/moon.jpg';
        themeIcon.alt = 'Dark Mode';
        document.getElementById('stats_theme').innerHTML = "Current Page Theme: Dark";
    } else {
        themeIcon.src = '../images/sun.jpg';
        themeIcon.alt = 'Light Mode';
        document.getElementById('stats_theme').innerHTML = "Current Page Theme: Default";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    if (body.classList.contains('dark_mode')) {
        themeIcon.src = '../images/moon.jpg';
        themeIcon.alt = 'Dark Mode';
    } else {
        themeIcon.src = '../images/sun.jpg';
        themeIcon.alt = 'Light Mode';
    }
});