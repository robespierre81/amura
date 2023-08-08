// toggle.js

document.getElementById('theme-toggle').addEventListener('click', function() {
  var root = document.documentElement;
  var lightThemeIcon = document.getElementById('light-theme-icon');
  var darkThemeIcon = document.getElementById('dark-theme-icon');
  var logoImg = document.getElementById('logo-img');
  var menuItems = document.getElementsByClassName('item');
  var body = document.body;
  var isDarkTheme = body.classList.contains('dark-theme');
  if (isDarkTheme) {
    root.style.setProperty('--text-color', '#000000');
    root.style.setProperty('--background-color', '#ffffff');
    root.style.setProperty('--background-color-header', '#FFFFFF');
    root.style.setProperty('--link-color', '#000000');
    root.style.setProperty('--box-outline-color', '#c6c6c6');
    root.style.setProperty('--box-bg-color-light', '#c1c1c1');
    root.style.setProperty('--button-bg-normal-color', '#242a2f');
    root.style.setProperty('--button-bg-hover-color', '#1e4a7f');
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    lightThemeIcon.style.display = 'none';
    darkThemeIcon.style.display = 'block';
    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].style.color = '#000000';
    }
    logoImg.src = "/images/amura_logo_b_trionly.svg";
  } else {
    root.style.setProperty('--text-color', '#ffffff');
    root.style.setProperty('--background-color', '#0d1116');
    root.style.setProperty('--background-color-header', '#000000');
    root.style.setProperty('--link-color', '#ffc400');
    root.style.setProperty('--box-outline-color', '#2f363c');
    root.style.setProperty('--box-bg-color-dark', '#000000');
    root.style.setProperty('--button-bg-normal-color', '#121d2d');
    root.style.setProperty('--button-bg-hover-color', '#1e4a7f');
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    lightThemeIcon.style.display = 'block';
    darkThemeIcon.style.display = 'none';
    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].style.color = '#ffffff';
    }
    logoImg.src = "/images/amura_logo_w_trionly.svg";
  }
});
