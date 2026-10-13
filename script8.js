// Variável de controle para o valor total
let valorTotal = 0.00;

/**
 * Função para atualizar o valor subtotal e total no HTML
 */
function atualizarValores() {
    // Formata os números para moeda BRL (ex: R$ 10,00)
    const formatado = valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    document.getElementById('subtotalValue').innerText = formatado;
    document.getElementById('totalValue').innerText = formatado;
}

/**
 * Função chamada quando um botão de "+" é clicado
 * @param {number} preco - O preço numérico do item
 */
function adicionarItem(preco) {
    valorTotal += preco;
    atualizarValores();
}

/**
 * Lógica para destacar o card de método de entrega selecionado
 */
document.addEventListener('DOMContentLoaded', () => {
    const deliveryCards = document.querySelectorAll('.delivery-card');
    
    deliveryCards.forEach(card => {
        const input = card.querySelector('input[type="radio"]');
        
        // Adiciona evento de mudança ao input radio
        input.addEventListener('change', () => {
            // Remove a classe 'active' de todos os cards
            deliveryCards.forEach(c => c.classList.remove('active'));
            
            // Adiciona a classe 'active' apenas no card selecionado
            if(input.checked) {
                card.classList.add('active');
            }
        });
    });
});