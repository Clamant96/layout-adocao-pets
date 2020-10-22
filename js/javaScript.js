document.getElementById('menu').ondblclick = function() {openMenu()};
document.getElementById('backgroundPage').onclick = function() {closeMenu()};

var menu = document.getElementById('container');

function openMenu() {
    menu.style.marginLeft = '20%';
    menu.style.height = '80%';

    menu.style.borderRadius = '25px';

}

function closeMenu() {
    menu.style.marginLeft = '0%';
    menu.style.height = '100%';

    menu.style.borderRadius = '0px';

}


