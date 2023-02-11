var agora = new Date()
var diaSem = agora.getDay()

var comentário = "hoje é "

switch(diaSem){
    case 0:
        comentário += `Domingo`
        break
    
    case 1:
        comentário += `Segunda-Feira`
        break

    case 2:
        comentário += `Terça-Feira`
        break

    case 3:
        comentário += `Quarta-Feira`
        break

    case 4:
        comentário += `Quinta-Feira`
        break

    case 5:
        comentário += `Sexta-Feira`
        break

    case 6:
        comentário += `Sábado`
        break
}

console.log(comentário)