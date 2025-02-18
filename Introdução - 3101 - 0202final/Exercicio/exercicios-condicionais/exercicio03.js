// Elabore um algoritmo que calcule o que deve ser pago por um produto,
// considerando o preço normal de etiqueta e a escolha da condição de pagamento.
// Utilize os códigos da tabela a seguir para ler qual a condição de pagamento 
// escolhida e efetuar o cálculo adequado. 
// Código
// Condição de Pagamento
// 1	
// À vista em dinheiro ou cheque, recebe 10% de desconto 
// 2	
// À vista no cartão de crédito, recebe 15% de desconto
// 3	
// Em duas vezes, preço normal de etiqueta sem juros
// 4	
// Em duas vezes, preço normal de etiqueta mais juros de 10%

let preco = parseFloat(prompt('Informe o preco do produto : '))
let condição = parseInt(prompt(`[1] À vista em dinheiro ou cheque, recebe 10% de desconto 
[2] À vista no cartão de crédito, recebe 15% de desconto
[3]	Em duas vezes, preço normal de etiqueta sem juros
[4]	Em duas vezes, preço normal de etiqueta mais juros de 10%`))
let calculo
if ( condição == 1){
    calculo = preco - (preco * 10 / 100)
   alert(`A vista recebe 10% de desconto ${calculo}`)
} else if (condição == 2){
    calculo = preco - (preco * 15 / 100)
    alert(`A vista no cartão de credito : ${calculo}`)
}
else if (condição == 3){
    alert(`O valor do pagemento é : ${preco}`)
} else if (condição == 4 ){
    calculo = preco + (preco * 10 / 100)
    alert(`O valor do pagamento com juros : ${calculo}`)
}