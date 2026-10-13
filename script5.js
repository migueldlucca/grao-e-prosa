// Aguarda o documento estar pronto
document.addEventListener("DOMContentLoaded", () => {
    
    // Configuração dos botões de adicionar produto[cite: 3]
    const addButtons = document.querySelectorAll('.btn-add');

    addButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Previne o comportamento padrão e localiza o card correspondente
            const card = this.closest('.card-cafe');
            const nomeProduto = card.querySelector('.nome-produto').innerText;
            const precoProduto = card.querySelector('.preco-produto').innerText;
            
            // Exibe mensagem de feedback para o usuário
            alert(`${nomeProduto} (${precoProduto}) foi adicionado ao seu pedido!`);
        });
    });

    // Configuração do botão principal CTA[cite: 3]
    const btnCTA = document.querySelector('.btn-action');
    if(btnCTA) {
        btnCTA.addEventListener('click', () => {
            alert("Redirecionando para a etapa de seleção e compra...");
        });
    }
});