// solicitar numero para jogador 1
// gera numero para jogador 2
// comparar valores jogador1 e jogador2
// informar quem venceu a rodada


let rodada = 0
let usuario = 0
let pc = 0
let empate = 0


while (rodada <= 5) {
let opcaoUsuario = prompt(`[1]Pedro \n[2]Papel \n[3]Tesoura`)
let opcaoPc = Math.ceil(Math.random() * 3).toString()
    console.log(`Voce jogou ${opcaoUsuario} e o pc jogou ${opcaoPc}`)
    if (opcaoPc === opcaoUsuario) {
        console.log('Empate')
        empate++
      
    }
    else if ((opcaoUsuario === '1' && opcaoPc === '3') || (opcaoUsuario === '2' && opcaoPc === '1') || (opcaoUsuario === '3' && opcaoPc === '2')) {
        console.log('Voce ganhou !')
        usuario++
        console.log(`Quantidade usuario : ${usuario}`)
     
        
    } else {
        console.log('Voce perdeu!')
        pc++
        console.log(`Quantidade pc: ${pc}`)
      
    }
    rodada++
    if(usuario>=3){
        console.log(`Parabens voce ganhou mais que tres partidas ${usuario}`)
        break
     }
     else if(pc >= 3){
        console.log(`Voce perdeu 3 vezes e Pc ganhou ${pc}`)
        break
    }
    
}
console.log(`Quantidade de rodadas : ${rodada} \n
    Quantidade de ganhos do usuario : ${usuario}
    Quantidade de ganhos do PC : ${pc}
    Quantidade de Empates : ${empate}`)
