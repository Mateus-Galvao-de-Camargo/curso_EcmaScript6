function contar(){
    let inicio = document.querySelector(`#txtInicio`)
    let fim = document.querySelector(`#txtFim`)
    let passo = document.querySelector(`#txtPasso`)
    let conta = document.querySelector(`#res`)

    if(inicio.value.length == 0){
        alert(`Início inválido, forneça um número`)
    } else if(fim.value.length == 0){
        alert(`Fim inválido, forneça um número válido`)
    } else if(passo.value.length == 0){
        alert(`Passo inválido, forneça um número`)
    } else {

        if(Number(passo.value) <= 0){
            alert(`Passo inválido, considerando passo 1`)
            passo.value = 1
        }

        conta.innerHTML = 'Contando \u{1F914}: '

        let init = Number(inicio.value)
        let limit = Number(fim.value)
        let add = Number(passo.value)
        
        if(init < limit){
            // Contagem crescente
            for(var c = init; c <= limit; c += add){
                conta.innerHTML += `${c} \u{1F449} `
            }
        } else {
            // Contagem decrescente
            for(var c = init; c >= limit; c -= add){
                conta.innerHTML += `${c} \u{1F449} `
            }
        }

        conta.innerHTML += `fim \u{1F633}`
    }
}