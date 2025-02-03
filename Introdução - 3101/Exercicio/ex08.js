let nota1 = parseFloat(prompt('Informe a primeira Nota 1 : '))
let nota2 = parseFloat(prompt('Informe a segunda Nota 2 : '))
let nota3 = parseFloat(prompt('Informe a terceira nota 3 : '))
let nota4 = parseFloat(prompt('Informe a quarta Nota 4 : '))
let peso1 = 1.0
let peso2 = 1.0
let peso3 = 4.0
let peso4 = 4.0

let ponderada = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3) + (nota4 * peso4)
let somePeso = peso1 + peso2 + peso3 + peso4
let mediaPeso = ponderada / somePeso

alert('Media do ponderada : ' + mediaPeso)