function carregar(){
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    var corpo = document.body.style
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora <= 12){
        img.src = 'fotoManha.jpg'
        img.alt = 'Foto da manhã'
        corpo.background = `#e2cd9f`
    } else if(hora >= 12 && hora <= 18){
        img.src = 'fotoTarde.jpg'
        img.alt = 'Foto da tarde'
        corpo.background = `#b9846f`
    } else {
        img.src = 'fotoNoite.jgp'
        img.alt = 'Foto da noite'
        corpo.background = `#515154`
    }
}