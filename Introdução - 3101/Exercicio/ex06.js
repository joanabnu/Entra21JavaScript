let salario = parseFloat(prompt("Informe o seu salario : "))
let aumento = (salario * 15) / 100
let novoSalario = salario + aumento
alert(
  "Salario antigo " +
    salario +
    "Novo Salario : " +
    "aumento de 15% " +
    aumento +
    " novo salario " +
    novoSalario
)
