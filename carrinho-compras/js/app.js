let total = 0;

function adicionar(){

    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

    if (adicaoValida(produto, quantidade)) {
        let textoValorTotal = document.getElementById('valor-total');
        let listaProdutos = document.getElementById('lista-produtos');

        let nomeProduto = produto.split('-')[0];
        let valorProduto = produto.split('$')[1];

        let subtotal = valorProduto * quantidade;
        total += subtotal;

        listaProdutos.innerHTML += `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span></section>`;
        textoValorTotal.textContent = `R$${total}`;
        document.getElementById('quantidade').value = '';
    }

}

function adicaoValida(produto, quantidade) {

    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;

    } else if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;

    } else {
        return true;
        
    }

}

function limpar() {
    document.getElementById('lista-produtos').textContent = '';
    document.getElementById('valor-total').textContent = 'R$0';
    total = 0;
}