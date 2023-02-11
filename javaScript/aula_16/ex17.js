function parImpar(num){
    if(num % 2 == 0){
        return `par`
    } else {
        return `ímpar`
    }
}

let res = parImpar(45)

console.log(res)