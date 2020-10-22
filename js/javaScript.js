document.getElementById('menu').onclick = function() {openMenu()};
document.getElementById('backgroundPage').ondblclick = function() {closeMenu()};

var menu = document.getElementById('container');
var posicao;

function openMenu() {
    posicao = true;
    ativar();

}

function closeMenu() {
    posicao = false;
    ativar();

}

function ativar() {
    if(posicao == true){
        menu.style.marginLeft = '30%';
        menu.style.height = '80%';

        menu.style.borderRadius = '25px';
    
    }else{
        menu.style.marginLeft = '0%';
        menu.style.height = '100%';

        menu.style.borderRadius = '0px';
    
    }

}