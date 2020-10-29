document.getElementById('menu').onclick = function() {opcaoMenu()};

var menu = document.getElementById('container');

var contador = 0;

function opcaoMenu(){
    switch(contador % 2) {
        case 1:
            console.log("Impar - Fecha SideBar");

            menu.style.marginLeft = '0%';
            menu.style.height = '100%';

            menu.style.borderRadius = '0px';

            console.log('Contador', contador % 2);

            contador = 0;

        break;

        case 0:
            console.log("Par - Abre SideBar");

            menu.style.marginLeft = '30%';
            menu.style.height = '80%';

            menu.style.borderRadius = '25px';

            console.log('Contador', contador % 2);

            contador = 1;

        break;

        default:
            console.log('Erro na aplicacao!');
        break;

    }

    console.log('Contador', contador);

}