document.addEventListener('DOMContentLoaded', () => {
    // Gerencia o fechamento do menu mobile ao clicar em um link
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const menuToggle = document.getElementById('navbarNav');
    
    if (menuToggle) {
        const bsCollapse = new bootstrap.Collapse(menuToggle, {
            toggle: false
        });
        
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (menuToggle.classList.contains('show')) {
                    bsCollapse.toggle();
                }
            });
        });
    }

    // Previne o envio real do formulário para demonstração visual
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simula um envio com alerta
            alert('Mensagem enviada com sucesso! A equipe da Grão & Prosa entrará em contato em breve.');
            contactForm.reset();
        });
    }
});