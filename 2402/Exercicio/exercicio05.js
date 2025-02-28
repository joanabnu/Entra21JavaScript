function fatorial(numero) {
   
    let resultado = 1
while (numero > 1) {
      console.log(`Numero fatorial : ${numero}`)
        resultado *= numero
      numero--
  }
   return resultado
}

 console.log(`Fatorial :  ${fatorial(5)}`)