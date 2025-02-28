// Escreva uma função que receba 
// uma lista de números e retorne a média deles.

function media(lista){
    let somar = 0
    let conta = 0
    for(i= 0 ;i<lista.length;i++){
        somar += lista[i]
        conta++
    }
    media = somar / conta
    return media
}
console.log(`MEDIA : ${media([10,9,6,7])}`)