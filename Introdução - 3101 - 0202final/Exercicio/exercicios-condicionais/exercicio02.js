// Tendo como dados de entrada a altura e o sexo de uma pessoa, 
// construa um algoritmo que calcule e exiba seu peso ideal, utilizando as 
// seguintes fórmulas:
//  para homens: (50 * altura)         1,85 * 50 =
// para mulheres: (40 * altura)       1,60 * 40 = 

let sexo = prompt('Informe o seu sexo M ou F : ').toLocaleUpperCase()
let altura = parseFloat(prompt('Informe a sua altura : '))
let calculeM
let calculeF
if(sexo == 'M' ){
    calculeM = 50 * altura
    alert(`O seu peso ideal para sua altura é : ${calculeM}`)
} else if(sexo == 'F'){
    calculeF =  40 * altura
    alert(`O seu peso ideal para sua altura é : ${calculeF}`)
}else{
    alert('Numero neutro')
}