// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    
    // O Bootstrap já gerencia o toggle do menu mobile e das abas (tabs)
    // através dos atributos data-bs-toggle nos elementos HTML.

    // Comportamento opcional: fechar o menu mobile ao clicar em um link interno
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const menuToggle = document.getElementById('navbarNav');
    
    // Inicializa o Collapse do Bootstrap para controle manual
    if (menuToggle) {
        const bsCollapse = new bootstrap.Collapse(menuToggle, {
            toggle: false
        });
        
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Se o menu estiver aberto (classe 'show'), ele fecha ao clicar no link
                if (menuToggle.classList.contains('show')) {
                    bsCollapse.toggle();
                }
            });
        });
    }

    // Interatividade opcional: Feedback ao clicar no botão "+" de adicionar item
    const addButtons = document.querySelectorAll('.btn-add');
    addButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            // Efeito visual rápido de "adicionado"
            const originalIcon = this.innerHTML;
            this.innerHTML = '<i class="bi bi-check2"></i>';
            this.style.backgroundColor = '#2d381f';
            
            setTimeout(() => {
                this.innerHTML = originalIcon;
                this.style.backgroundColor = '';
            }, 1000);
        });
    });
});