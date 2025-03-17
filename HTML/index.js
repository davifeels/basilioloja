// Adiciona um evento de clique em todos os produtos
document.querySelectorAll('.produto').forEach(function(produto) {
    produto.addEventListener('click', function() {
        // Obtém o nome do produto
        const nomeProduto = produto.querySelector('h3').textContent;
        
        // Define a URL da página de destino com base no nome do produto
        let urlDestino = '';
        if (nomeProduto === 'Anel de Ouro') {
            urlDestino = 'anel.html'; // Redireciona para index2.html
        }
        // Se você tiver mais produtos, pode adicionar mais condições aqui.
        
        // Redireciona para a página do produto
        window.location.href = urlDestino;
    });
});
