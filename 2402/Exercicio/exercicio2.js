
function reversoNumero(num){
    let numReverso = num.toString().split('').reverse().join('')
    // split metodo que permite dividi e separar string
    return parseInt(numReverso)
}
console.log(reversoNumero(12345))

// Escreva uma função que inverta uma string 
// (por exemplo, "python" se tornaria "nohtyp").
function reverteTexto(texto){
    let reverte = texto.split('').reverse().join('')
    return reverte
}
console.log(reverteTexto('Python'))




