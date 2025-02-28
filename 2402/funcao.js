function saudacao(nome){
    return `Olá ${nome}`
}

function somar(a,b){
    return a+b
}

function erPar(numero){
    if(numero % 2 === 0){
        return true
    }
    else{
        return false
    }
}
function ehImpar(numero){
   return numero % 2 !==0
}

if(ehImpar(11)){
    console.log('Impar')
}
else{
    console.log('Par')
}
console.log(saudacao('Carla'))
console.log(saudacao('Geraldo'))
console.log(saudacao('Cleusa'))
console.log(saudacao('firmino'))
console.log(somar(2,5))
console.log(erPar(15))
console.log(ehImpar(15))

function celsiusToFahrenheit(celsius){
  return celsius * 1.8+32
}
console.log(celsiusToFahrenheit(32))

function fahrenheittocelsius(fahrenheit){
    return (fahrenheit - 32) / 1.8
}
console.log(Math.round(fahrenheittocelsius(89.6)))

function somarVetor(numero){
    let soma = 0
    for(i=0; i<numero.length; i++){
      soma +=numero[i]
    }
    return soma
}
console.log(` vetor : ${somarVetor([3,5,7,10])}`)