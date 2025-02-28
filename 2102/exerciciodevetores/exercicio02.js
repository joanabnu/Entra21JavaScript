
// Crie um algoritmo que receba quantos nomes(apenas nome) desejar, e ao final:
// A lista em ordem crescente
// A lista em ordem decrescente
// O total de nomes cadastrados
// Quantos ‘Carlos’ existem na lista

let nome = ['Joana','Juliana','Joao']
let quantidade = 0

for(i=0; i <nome.length;i++){
    console.log(nome[i])
    quantidade++
}
console.log(quantidade)
nome.indexOf('Joao')
console.log(nome)

for(j = nome.length -1; j >= 0;j--){
    console.log(nome[j])
}