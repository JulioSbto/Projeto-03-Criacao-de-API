$(document).ready(function(){
    $.ajax({
        url: "http://127.0.0.1:3000/produtos",
        type: "GET",
        dataType: "json",
        success: function(dados){
            console.log("Dados recebidos da API:", dados);

            let html = ''; // Inicializando a variável que irá armazenar o conteúdo

            // Iterando sobre os dados e criando o HTML para cada produto
            dados.forEach(function(produto){
                html += `
                    <div class="cartoes">
                        <h3>${produto.nome_produto}</h3>
                        <p class="precos">R$ ${produto.preco.toFixed(2)}</p>
                        <p>Estoque: ${produto.estoque}</p>
                        <p><strong>Categoria:</strong> ${produto.fk_categoria}</p>
                    </div>
                `;
            });

            // Preenche a div com o ID "caixa_conteudo" com os produtos
            $("#caixa_conteudo").html(html);
        },
        error: function(erro){
            console.error("Erro na requisição:", erro);
        }
    });
});
