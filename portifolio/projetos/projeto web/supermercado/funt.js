document.getElementById("produtoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Captura os valores de descrição e preço do produto
    const descricao = document.getElementById("descricao").value;
    const preco = parseFloat(document.getElementById("preco").value);

    // Calcula o desconto (50% de um item na compra de 3 unidades)
    const desconto = preco / 2;
    const totalComDesconto = (preco * 3) - desconto;

    // Monta a mensagem promocional
    const mensagem = `
        <h2>Promoção Ativa!</h2>
        <p>Produto: <strong>${descricao}</strong></p>
        <p>Preço Unitário: R$ ${preco.toFixed(2)}</p>
        <p>Compre 3 unidades e pague apenas R$ ${totalComDesconto.toFixed(2)} 
        (50% de desconto em 1 item).</p>
    `;

    // Exibe a mensagem
    const mensagemPromocional = document.getElementById("mensagemPromocional");
    mensagemPromocional.innerHTML = mensagem;
    mensagemPromocional.style.display = "block";
});