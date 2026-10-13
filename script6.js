// Aguarda o HTML carregar completamente antes de executar o script
document.addEventListener("DOMContentLoaded", () => {
    
    // Pega todos os botões redondos de "+"[cite: 4]
    const botoesAdicionar = document.querySelectorAll('.btn-add');

    // Adiciona o evento de clique para cada um deles
    botoesAdicionar.forEach(botao => {
        botao.addEventListener('click', function() {
            // Busca o card do doce mais próximo do botão clicado
            const card = this.closest('.card-doce');
            
            // Extrai o nome e o preço do doce
            const nomeDoce = card.querySelector('.nome-produto').innerText;
            const precoDoce = card.querySelector('.preco-produto').innerText;
            
            // Exibe um alerta de confirmação pro usuário
            alert(`${nomeDoce} por ${precoDoce} foi adicionado à sua bandeja!`);
        });
    });

    // Evento de clique para o botão grande "EXPERIMENTE NOSSAS DELÍCIAS"[cite: 4]
    const botaoAcaoPrincipal = document.querySelector('.btn-action');
    if(botaoAcaoPrincipal) {
        botaoAcaoPrincipal.addEventListener('click', () => {
            alert("Iniciando o processo de pedido. Redirecionando...");
            // Exemplo de redirecionamento futuro: window.location.href = "/carrinho";
        });
    }
});