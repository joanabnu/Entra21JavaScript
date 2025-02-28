// Criar um algoritmo quantos números você desejar (laço infinito), e ao final dele mostre:
// A lista em ordem crescente
// A lista em ordem decrescente
// A soma de todos os itens 
// A média de todos os números

let lista = [10,7,18,39,29,66,99,33]
let soma = 0
let media = 0
console.log('Crescente')
for(i=0; i<lista.length;i++){
  console.log(lista[i])
  soma += lista[i]
  
}

console.log('Descrescente')
for(j = lista.length -1; j>=0;j--){
    console.log(lista[j])
}

media = soma / i
console.log(`Soma :  ${soma} Media : ${media}`)
lista.sort()
console.log(`Sort : ${lista}`)
lista.reverse()
console.log(`Reverse : ${lista}`)