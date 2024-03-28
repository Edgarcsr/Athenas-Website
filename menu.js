document.addEventListener('DOMContentLoaded', function() {
    const botaoMenu = document.querySelector('.btnHeaderMenu');
    const iconMenu = document.querySelector('.iconMenu');
    const menuSuspenso = document.getElementById('menuSuspenso');

    botaoMenu.addEventListener('click', function(e) {
        e.stopPropagation(); // Impede que o evento de clique se propague
        iconMenu.classList.toggle('opened');
        iconMenu.setAttribute('aria-expanded', iconMenu.classList.contains('opened'));

        // Controla a exibição do menu suspenso
        const isMenuOpened = iconMenu.classList.contains('opened');
        menuSuspenso.style.maxHeight = isMenuOpened ? '300px' : '0px';
        menuSuspenso.style.opacity = isMenuOpened ? '1' : '0';
    });

    // Função para fechar o menu quando clicar fora
    document.addEventListener('click', function(e) {
        if (!botaoMenu.contains(e.target) && iconMenu.classList.contains('opened')) {
            iconMenu.classList.remove('opened');
            iconMenu.setAttribute('aria-expanded', 'false');
            menuSuspenso.style.maxHeight = '0px';
            menuSuspenso.style.opacity = '0';
        }
    });
});
