function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    img.src = './img/dia.png'
    document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora <= 18) {
    img.src = './img/tarde.png'
    document.body.style.background = '#743b1c'
} else {
    img.src = './img/noite.png'
    document.body.style.background = '#42566e'
}
}