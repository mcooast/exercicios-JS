const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken (){
    return lamp.scr.indexOf ('quebrada') > -1 //indexOf procura algo na string, e quando não encontra retorna -1
}


// !isLampBroken - se a lâmpada não estiver quebrada, ela pode ligar ou desligar

function isLampBroken (){
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn (){
    if (!isLampBroken ()){
    lamp.src = './img/ligada.jpg';
    }
}

turnOn.addEventListener('click', lampOn);

function lampOff (){
    if (!isLampBroken ()){
    lamp.src = './img/desligada.jpg';
    }
}
turnOff.addEventListener ('click', lampOff);

lamp.addEventListener ('mouseover', lampOn);

lamp.addEventListener ('mouseleave', lampOff);

function lampBroken (){
    lamp.src = './img/quebrada.jpg';
}

lamp.addEventListener ('dblclick', lampBroken);