$(document).ready(function () {
    $('.parallax').parallax();
});

$(document).ready(function () {
    $('.sidenav').sidenav();
});

const checkbox = document.querySelector('#toggle');
const body = document.querySelector('body');

if (localStorage.getItem('theme') == 'dark') {    
    setDarkMode();   
}

function setDarkMode() {    
    checkbox.setAttribute('checked', 'checked');
    if (checkbox.checked) {
        body.classList.add('dark');         
        localStorage.setItem('theme', 'dark');
    }else{
        body.classList.remove('dark');
        localStorage.removeItem('theme');
    }
    
}

checkbox.addEventListener('click', setDarkMode);

