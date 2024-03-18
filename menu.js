document.addEventListener('DOMContentLoaded', function() {
    const botaoMenu = document.querySelector('.btnHeaderMenu');
    const menuSuspenso = document.getElementById('menuSuspenso');
    const iconeMenu = botaoMenu.querySelector('.fa-bars'); // Ícone do menu
    const iconeX = botaoMenu.querySelector('.fa-times'); // Ícone "X"

    botaoMenu.addEventListener('click', function(event) {
        event.preventDefault(); // Impede a rolagem para o topo
        
        // Controla a exibição do menu
        if (menuSuspenso.style.maxHeight === '0px' || menuSuspenso.style.maxHeight === '') {
            menuSuspenso.style.maxHeight = '300px'; // Ajuste conforme necessário para acomodar o conteúdo do menu
            menuSuspenso.style.opacity = '1';
            iconeMenu.style.display = 'none'; // Esconde o ícone do menu
            iconeX.style.display = 'inline-block'; // Mostra o ícone "X"
        } else {
            menuSuspenso.style.maxHeight = '0px';
            menuSuspenso.style.opacity = '0';
            iconeMenu.style.display = 'inline-block'; // Mostra o ícone do menu
            iconeX.style.display = 'none'; // Esconde o ícone "X"
        }
    });

    document.addEventListener('click', function(event) {
        let targetElement = event.target; // Obtém o elemento clicado

        do {
            if (targetElement == menuSuspenso || targetElement == botaoMenu) {
                // Clica dentro do menu ou no botão, não faz nada
                return;
            }
            targetElement = targetElement.parentNode;
        } while (targetElement);

        // Clicou fora do menu e do botão, fecha o menu
        menuSuspenso.style.maxHeight = '0px';
        menuSuspenso.style.opacity = '0';
        iconeMenu.style.display = 'inline-block'; // Mostra o ícone do menu
        iconeX.style.display = 'none'; // Esconde o ícone "X"
    });
});
