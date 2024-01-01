let amigos = [];
let listaSorteio = document.getElementById('lista-sorteio');
let listaAmigos = document.getElementById('lista-amigos');

//adicionar função de excluir amigo

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');
    let nomeAmigoUpper = nomeAmigo.value.toUpperCase();
    let amigosUpper = amigos.map(amigo => amigo.toUpperCase());

    if (nomeAmigo.value == '') {
        alert('Você digitou um nome vazio, por favor digite um nome válido.');
        
        return;
    } 
    
    if (amigosUpper.includes(nomeAmigoUpper)){
        alert('Você já digitou esse nome, por favor digite um diferente.');
        nomeAmigo.value = '';

        return;
    }

    amigos.push(nomeAmigo.value);
    listaAmigos.textContent = amigos.join(', ');
    nomeAmigo.value = '';
}

function sortear() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos para sortear!');
        
        return;
    }

    embaralhar(amigos);

    for (i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            listaSorteio.innerHTML += amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            listaSorteio.innerHTML += amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }

}

function embaralhar(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }
}

function reiniciar() {
    amigos = [];
    listaAmigos.textContent = '';
    listaSorteio.textContent = '';
}

document.addEventListener('keydown', function(event){
    if (event.key == 'Enter'){
        adicionar();
    }
});