function tabuada(){
    let num = document.querySelector(`#txtN`)
    let tab = document.querySelector(`#selTab`)

    if(num.value.length == 0){
         alert(`Digite um número, seja obediente, estou te vendo aí \u{1F440}`)
    } else {
        let n = Number(num.value)

        tab.innerHTML = ``
        for(let i = 0; i <= 10; i++){

            let item = document.createElement(`option`)
            item.value = `tab${i}`
            item.text += `${n} X ${i} = ${n * i}`
            tab.appendChild(item)
        }
    }
}