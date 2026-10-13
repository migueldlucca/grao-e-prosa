// Arquivo de scripts customizados
document.addEventListener('DOMContentLoaded', () => {
    // O Bootstrap 5 já gerencia o menu hambúrguer automaticamente.
    // Aqui você pode adicionar animações de scroll ou outras interatividades.

    // Exemplo: Fechar o menu mobile ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuToggle.classList.contains('show')) {
                bsCollapse.toggle();
            }
        });
    });
});