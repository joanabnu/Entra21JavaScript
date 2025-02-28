// Implemente uma função que receba uma lista de números 
// e retorne uma nova lista contendo apenas os números pares.

function ehPar(numero){
    if(numero % 2 === 0){
        return true
    }
    else{
        return false
    }
}
console.log(`${ehPar(2)}`)