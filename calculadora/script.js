'use strict';

const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=tecla]');
//todos os botões  tem a mesma classe e estão no mesmo container, então usamos o QuerySelector, selecionando o elemento cujo ID tenha nele (*) a palavra 'tecla'
const operadores = document.querySelectorAll('[id*=operador]')

let novoNumero = true;
let operador;
let numeroAnterior;

const operacaoPendente = () => operador !== undefined;

const calcular = () => {
    if (operacaoPendente()){
        const numeroAtual = parseFloat(display.textContent);
        novoNumero = true;

        const resultado = eval (`${numeroAnterior}${operador}${numeroAtual}`);
        atualizarDisplay(resultado);
    }
}

        /* 
        if (operador == '+'){
            atualizarDisplay(numeroAnterior + numeroAtual);
        } else if (operador == '-'){
            atualizarDisplay(numeroAnterior - numeroAtual);
        } else if (operador == '*'){
            atualizarDisplay(numeroAnterior * numeroAtual);
        }else if (operador == '/'){
            atualizarDisplay(numeroAnterior / numeroAtual);
        }
    }
}
        */

const atualizarDisplay = (texto) => {
    if (novoNumero){
        display.textContent = texto;//substitui número
        novoNumero = false
    }else{
        display.textContent += texto; //concatenar com o que já tem, não substitui mais um número pelo outro
    }
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);//pra aparecer no display da calculadora, mandando pra o atualizarDdisplay o texto dentro de cada uma das teclas clicadas

numeros.forEach(numero => numero.addEventListener('click', inserirNumero)); //pega o número e adiciona o click


//aqui, quando clicamos no operador, os números que apareciam no display somem, e aparecem os que clicacamos depois
const selecionarOperador = (evento) =>{
    calcular();
    if(!novoNumero){//se não for um novo número, evita que ele guarde a operação antes de digitar algum número
    novoNumero = true;
    //armazenando as variaveis operador e número
    operador = evento.target.textContent;
    numeroAnterior = parseFloat(display.textContent);
    }
}

operadores.forEach(operador => operador.addEventListener('click', selecionarOperador));

const ativarIgual = () =>{
    calcular();
    operador = undefined; //chama o calcular e zera operador, para que não continue realizando calculos ao clicar no igual
}

document.getElementById('igual').addEventListener('click', ativarIgual);


//quando clicar no CE, limpar a tela e os dados
const limparDisplay = () => display.textContent = '';

document.getElementById('limparDisplay').addEventListener('click', limparDisplay);

const limparCalculo = () => {
    limparDisplay();
    operador = undefined;
    novoNumero = true;
    numeroAnterior = undefined;
}
document.getElementById('limparCalculo').addEventListener('click', limparCalculo);

const removerUltimoNumero = () =>
    (display.textContent = display.textContent.slice(0, -1));
document
    .getElementById('backspace')
    .addEventListener('click', removerUltimoNumero);

const inverterSinal = () => {
    novoNumero = true;
    atualizarDisplay(display.textContent * -1);
};
document.getElementById('inverter').addEventListener('click', inverterSinal);

const existeDecimal = () => display.textContent.indexOf(',') !== -1;
const existeValor = () => display.textContent.length > 0;
const inserirDecimal = () => {
    if (!existeDecimal()) {
        if (novoNumero) {
            atualizarDisplay('0,');
        } else {
            atualizarDisplay(',');
        }
    }
};
document.getElementById('decimal').addEventListener('click', inserirDecimal);

const mapaTeclado = {
    0: 'tecla0',
    1: 'tecla1',
    2: 'tecla2',
    3: 'tecla3',
    4: 'tecla4',
    5: 'tecla5',
    6: 'tecla6',
    7: 'tecla7',
    8: 'tecla8',
    9: 'tecla9',
    '/': 'operadorDividir',
    '*': 'operadorMultiplicar',
    '-': 'operadorSubtrair',
    '+': 'operadorAdicionar',
    '=': 'igual',
    Enter: 'igual',
    Backspace: 'backspace',
    c: 'limparDisplay',
    Escape: 'limparCalculo',
    ',': 'decimal',
};

const mapearTeclado = (evento) => {
    const tecla = evento.key;
    const teclaPermitida = () => Object.keys(mapaTeclado).indexOf(tecla) !== -1;
    if (teclaPermitida()) document.getElementById(mapaTeclado[tecla]).click();
};
document.addEventListener('keydown', mapearTeclado);