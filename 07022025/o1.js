let minimo = parseInt(prompt('Informe o valor minino : '))
let maximo = parseInt(prompt('Informe o valor maximo : '))
let atual = parseInt(prompt('Informe o valor atual : '))

if( atual >= minimo && atual <= maximo){

    alert(`Esta dentro dos limites =>
        Minimo : ${minimo}
        Maximo : ${maximo}
        Atual : ${atual}`)
}else{
    alert(`Esta fora dos limites =>  
        Minimo : ${minimo} 
        Maximo : ${maximo} 
        Atual : ${atual} `)
}
