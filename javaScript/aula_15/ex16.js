let num = [5, 4, 8]

num[3] = 6

num.push(7)

console.log(`Nosso vetor é o ${num}`)

//vê o tamanho do vetor
console.log(num.length)

//Coloca em ordem crescente os números do vetor
num.sort()

//looping mostrando o array
for(let i = 0; i < num.length; i++){
    console.log(num[i])
}

//looping simplificado para arrays
for(let i in num){
    console.log(num[i])
}

//pesquisar um valor dentro do array
//assim devolvendo a posição do valor, se não houver valor ele retorna -1
console.log(num.indexOf(7))

console.log(num.indexOf(12))

let pos = num.indexOf(4)
if(pos == -1){
    console.log("O valor não foi encontrado")
} else {
    console.log(`O valor foi encontrado na posição ${pos} do array`)
}