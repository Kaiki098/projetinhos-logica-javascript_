function comprar() {
    let ingressos = {
        'pista': Number(document.getElementById('qtd-pista').textContent),
        'superior': Number(document.getElementById('qtd-superior').textContent),
        'inferior': Number(document.getElementById('qtd-inferior').textContent)
    }
    
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;

    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    if (quantidade <= ingressos[tipoIngresso]) {
        ingressos[tipoIngresso] -= quantidade;
        let campoQuantidadeIngressos = document.getElementById(`qtd-${tipoIngresso}`);
        campoQuantidadeIngressos.textContent = ingressos[tipoIngresso];
        alert(`${quantidade} ingressos comprados!`);
        
    } else {
        let mensagem = tipoIngresso == 'pista' ? 'Número de ingressos indisponíveis para pista' : `Número de ingressos indisponíveis para cadeira ${tipoIngresso}`;
        alert(mensagem);
    }

}