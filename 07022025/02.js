const login = prompt('Informe o login : ')
const senha = prompt('Informe a senha : ')
const admim = 'admin'
const senhadmin = '1234'
// 1234
if(login == admim && senha == senhadmin){
    console.log('Acesso Liberado ')
}else{
    console.log('Acesso Negado ')
}