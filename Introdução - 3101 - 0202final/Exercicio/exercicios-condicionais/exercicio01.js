// Encontrar o dobro de um número caso ele seja positivo 
// e o seu triplo caso seja negativo, imprimindo o resultado.

let numero = parseInt(prompt('Informe 1° numero '))
let dobro
let triplo

if(numero > 0){
    dobro = numero * 2
    alert(`O numero é positivo  ${numero}: O dobro do seu numero ${dobro}` )
}else if (numero < 0){
    triplo = numero / 3
   alert(`O numero é negativo ${numero} : o triplo do seu numero é ${triplo} `)
}

