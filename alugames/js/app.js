let jogosAlugados = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`)
} 

function alterarStatus(item) {
    let id = `game-${item}`;
    let game = document.getElementById(id);

    let img = game.querySelector('div');
    let button = game.querySelector('a');
    let nomeJogo = game.querySelector('p');

    if (img.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            img.classList.remove('dashboard__item__img--rented');
            button.classList.remove('dashboard__item__button--return');
            button.textContent = 'Alugar';
            jogosAlugados--;
        }

    } else {
        if (confirm(`Você tem certeza que deseja alugar o jogo ${nomeJogo.textContent}?`)) {
            img.classList.add('dashboard__item__img--rented');
            button.classList.add('dashboard__item__button--return');
            button.innerHTML = 'Devolver';
            jogosAlugados++;
        }
            
    }

    contarEExibirJogosAlugados();

}

addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('dashboard__item__button--return').length + 1;
    contarEExibirJogosAlugados();
});
