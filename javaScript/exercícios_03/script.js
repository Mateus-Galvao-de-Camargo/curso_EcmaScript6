function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.querySelector('#txtano')
    var res = document.querySelector(`#res`)
    if(fAno.value.length == 0){
        alert(`Digite o ano!`)
    } else {
        var fsex = document.getElementsByName(`radsex`)
        var idade = ano - Number(fAno.value)
    
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    
        var genero = ``
        if (fsex[0].checked){
            genero = `Homem`
    
            if (idade >= 0 && idade <= 10){
                img.setAttribute('src', 'criancaM.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'jovemM.jpg')
            } else if (idade< 50){
                img.setAttribute('src', 'adulto.jpg')
            } else {
                img.setAttribute('src', 'idoso.jpg')
            }
    
        } else if(fsex[1].checked){
            genero = `Mulher`
    
            if (idade >= 0 && idade <= 10){
                img.setAttribute('src', 'criancaF.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'jovemF.jpg')
            } else if (idade< 50){
                img.setAttribute('src', 'adulta.jpg')
            } else {
                img.setAttribute('src', 'idosa.jpg')
            }
        }
    
        res.style.textAlign = 'center'
        if(idade == 1){
            res.innerHTML = `Detectamos ${genero} com até ${idade} ano.`
        } else {
            res.innerHTML = `Detectamos ${genero} com até ${idade} anos.`
        }
        res.appendChild(img)
    }
}