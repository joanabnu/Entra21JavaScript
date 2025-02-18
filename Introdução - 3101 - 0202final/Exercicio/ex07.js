let preco = parseFloat(prompt('Informe o preço : R$'))
let desconto = (preco * 5 / 100)
let novoPreco = preco - (desconto) 
alert('O preço custava  : R$'+ preco + ' Desconto : R$ ' + desconto + 'O novo preco é R$' + novoPreco)
