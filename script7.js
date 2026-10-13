// Aguarda o HTML carregar completamente antes de executar o script
document.addEventListener("DOMContentLoaded", () => {
    
    // Pega todos os botões redondos de "+"[cite: 5]
    const botoesAdicionar = document.querySelectorAll('.btn-add');

    // Adiciona o evento de clique para cada um deles
    botoesAdicionar.forEach(botao => {
        botao.addEventListener('click', function() {
            // Busca o card do salgado mais próximo do botão clicado
            const card = this.closest('.card-salgado');
            
            // Extrai o nome e o preço do salgado
            const nomeSalgado = card.querySelector('.nome-produto').innerText;
            const precoSalgado = card.querySelector('.preco-produto').innerText;
            
            // Exibe um alerta de confirmação pro usuário
            alert(`${nomeSalgado} por ${precoSalgado} foi adicionado ao seu pedido!`);
        });
    });

    // Evento de clique para o botão grande "EXPERIMENTE NOSSAS DELÍCIAS"[cite: 5]
    const botaoAcaoPrincipal = document.querySelector('.btn-action');
    if(botaoAcaoPrincipal) {
        botaoAcaoPrincipal.addEventListener('click', () => {
            alert("Iniciando o processo de pedido. Redirecionando...");
        });
    }
});