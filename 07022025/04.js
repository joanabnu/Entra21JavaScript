let lado1 = 1
let lado2 = 1
let lado3 = 1



if(lado1 == lado2 && lado1 == lado3 ){
    console.log('E Equilatero')
}else if(lado1 > lado2 + lado3 || lado2 >  lado3 + lado1 || lado3 > lado1 + lado2){
    console.log('Não é um triangulo')
}
else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
    console.log('E UM ISOCELES')
} else{
    alert('Escaleno')
}
