function setDark() {
    document.body.classList.remove('light_mode');
    document.body.classList.add('dark_mode');
    document.getElementsByClassName('stats_theme').innerHTML = "Current Page Theme: Light";
}

function setLight() {
    document.body.classList.remove('dark_mode');
    document.body.classList.add('light_mode');
    document.getElementsByClassName('stats_theme').innerHTML = "Current Page Theme: Dark";
}

function setDefault() {
    document.body.classList.remove('dark_mode');
    document.body.classList.remove('light_mode');
    document.getElementsByClassName('stats_theme').innerHTML = "Current Page Theme: Default";
}