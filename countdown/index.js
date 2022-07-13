'use strict';

const formatarDigito = (digito) =>`0${digito}`.slice(-2); //cortar dois digitos da direita pra esquerda, pra ficar 05, 04, etc.

//colocando a função dentro da div 
const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');

    const qtdSegundos = tempo % 60;   //tirando tudo que for minuto, pega o resto da divisão por 60 e armazena nos segundos
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtdDias = Math.floor(tempo / (60 * 60 * 24));

    segundos.textContent = formatarDigito(qtdSegundos);
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qtdHoras);
    dias.textContent = formatarDigito(qtdDias);
}


const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id);
    const contar = () => {
        if (tempo == 0){
            pararContagem();
        }
        atualizar (tempo);
        tempo --; //tirando 1 do tempo
    }
    const id = setInterval(contar, 1000);//a cada segundo executa o callback
    //colocamos em um id para guardar a informação e usar para pararContagem
}

const tempoRestante = () => {
    const dataEvento = new Date ('2022-07-14 20:00:00');
    const hoje = Date.now();
    return Math.floor((dataEvento - hoje) / 1000);
}

contagemRegressiva(tempoRestante());
