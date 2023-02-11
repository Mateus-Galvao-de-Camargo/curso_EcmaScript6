let num = document.querySelector(`#txtNum`)
let list = document.querySelector(`#selLista`)
let res = document.querySelector(`#res`)
let numeros = []


function adicionar(){
    let n = Number(num.value)

    if (numeros.indexOf(n) != -1){
        alert(`Número ${n} já está registrado`)
    } else if (n >= 1 && n <= 100){
        numeros.push(n)
        let item = document.createElement(`option`)
        item.text = `Número ${n} cadastrado`
        item.value = `n${n}`
        list.appendChild(item)
    } else {
        alert(`número inválido`)
    }
    num.value = ''
    num.focus()
}

function mostrarResultado(){
    if(numeros.length == 0){
        alert(`Adicione números primero!`)
    } else {
        numeros.sort()
        let qntNumeros = numeros.length
        let maior = numeros[qntNumeros-1]
        let menor = numeros[0]
        let soma = 0
        for(let i = 0; i < qntNumeros; i++){
            soma += numeros[i]
        }
        let media = soma / qntNumeros

        let item = document.createElement(`p`)
        res.innerHTML = ''
        item.innerHTML = `Ao todo, temos ${qntNumeros} números registrados<br>
        O maior valor informado foi ${maior}<br>
        O menor valor informado foi ${menor}<br>
        Somando todos os valores, temos ${soma}<br>
        A média dos valores digitados é ${media}`

        res.appendChild(item)
    } 
}