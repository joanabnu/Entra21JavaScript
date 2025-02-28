// // Implemente uma função que receba uma 
// // lista de números e retorne o maior valor.

 function maior(valor) {
  let maiorValor = valor[0]
   for (let i = 1; i < valor.length; i++) {
       if (valor[i] > maiorValor) {
            maiorValor = valor[i];
        }
        
    }
    return maiorValor
}


console.log(`${maior([1, 2, 3, 4, 5])}`)
// console.log(` vetor : ${somarVetor([3,5,7,10])}`)
