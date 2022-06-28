'use strict'; //modo estrito, mostra os erros e as más práticas no JS

//JSON

const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
}

const criarDiv = (texto) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = texto;
    div.id = texto;
    document.getElementById('container').appendChild(div);//adicionar o filho no container, a DIV
}

const exibir = (sons) => Object.keys(sons).forEach(criarDiv); //cada elemento/chave (letras) que o forEach pegar do array dos sons, ele cria uma div

//se não tem retorno, e só uma linha, pode ficar sem as chaves

const tocarSom = (letra) => {
    const audio = new Audio(`./sounds/${sons[letra]}`); //pega o som de acordo com cada letra como criamos antes
    audio.play(); //metodo
}

const adicionarEfeito = (letra) => document.getElementById(letra)
                                           .classList.toggle('active');

const removerEfeito = (letra) => {
    const div = document.getElementById(letra);
    const removeActive = () => div.classList.remove('active');
    div.addEventListener('transitionend',removeActive);
};

const ativarDiv = (evento) => {

    const letra = evento.type == 'click' ? evento.target.id : evento.key.toUpperCase();
    

    const letraPermitida = sons.hasOwnProperty(letra); //true quando tiver a letra, e false = a letra não é permitida e o som não toca
    if (letraPermitida){
        adicionarEfeito(letra);
        tocarSom(letra);
        removerEfeito(letra);
    }
}

exibir(sons);
document.getElementById('container')
        .addEventListener('click', ativarDiv);//evento e callback

        window.addEventListener('keydown',ativarDiv);//letra digitada no teclado