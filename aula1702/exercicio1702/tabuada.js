let tabuada = parseInt(prompt('Escolha um numero para tabuada : '))
let x = parseInt(prompt('Quantidade de vezes : '))
let contagem = 0
let soma = 0
let i = 0
while(contagem<=x){
    soma = (tabuada * i)
    console.log(`${tabuada} X ${i} = ${soma} `)
    i++
    contagem++
    
}