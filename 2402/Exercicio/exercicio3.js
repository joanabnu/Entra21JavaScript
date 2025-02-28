// Faça uma função que informe a quantidade de dígitos de um determinado 
// número inteiro informado
function reversoNumero(num){
    let numReverso = num.toString().split('').reverse().join('')
    // split metodo que permite dividi e separar string
    return parseInt(numReverso)
}
console.log(reversoNumero(12345))







