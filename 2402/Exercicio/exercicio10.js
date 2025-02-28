// Escreva uma função que receba uma lista de strings e 
// retorne uma nova lista com todas as palavras em maiúsculas.

function lista(texto){
    minusculo = ''
    for(i=0; i<texto.length;i++){
       minusculo += texto[i].toLocaleLowerCase()
    }
    return minusculo
}
console.log(`${lista(['PARABENS ',' FELICIDADES'].join(''))}`)