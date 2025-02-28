let numero = [5,15,25,12,39]
console.log(numero)

for(i=0; i<numero.length;i++){
    console.log(numero[i])
}

console.log('Da direita para esquerda')
for(i = numero.length - 1; i>=0; i--){
    console.log(numero[i])
}
// methodos array
numero.push(50) // adiciona numero no final
numero.unshift(9) // adiciona numero no inicio
console.log(numero)
numero.pop() // remove o ultimo numero 
numero.shift() // remove o inicio

numero.splice(2,2) // remove a quantidade de numeros indicados no methodos apartir da posicao escolhida 