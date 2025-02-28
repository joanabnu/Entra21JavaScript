// Crie uma função que permita contar o número de vezes que
//  aparece uma letra em uma string.

function letra(numero){
    conta = 0
    for(i = 0; i <numero.length; i++){
        conta++
    }
   return conta
}
console.log(letra('Joana maria'))