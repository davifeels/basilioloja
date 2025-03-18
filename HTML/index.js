document.addEventListener('DOMContentLoaded', function() {
    // Adiciona um evento de clique em todos os produtos
    document.querySelectorAll('.produto').forEach(function(produto) {
        produto.addEventListener('click', function() {
            // Obtém o nome do produto
            const nomeProduto = produto.querySelector('h3').textContent;
            console.log('Produto clicado: ' + nomeProduto);  // Logando o nome do produto para verificar

            // Define a URL da página de destino com base no nome do produto
            let urlDestino = '';

            if (nomeProduto === 'Brinco de Ouro') {
                urlDestino = 'brinco.html'; // Redireciona para brinco.html
            }

            if (nomeProduto === 'Brinco de Prata') {
                urlDestino = 'brinco.html'; // Redireciona para brinco.html
            }

            if (nomeProduto === 'Brinco de Diamante') {
                urlDestino = 'brinco.html'; // Redireciona para brinco.html
            }

            if (nomeProduto === 'Brinco de Esmeralda') {
                urlDestino = 'brinco.html'; // Redireciona para brinco.html
            }

            // Logando a URL de destino para verificar
            console.log('Redirecionando para: ' + urlDestino);

            // Se a URL de destino for definida, redireciona para a página do produto
            if (urlDestino) {
                window.location.href = urlDestino;
            } else {
                console.log('Nenhuma página de destino definida para esse produto.');
            }
        });
    });
});
