async function buscarCep(){
    try{
      const resposta = await fetch(`https://viacep.com.br/ws/01001000/json/`)
      const dados = await resposta.json();

      const tabela = document.getElementById('tabela-ceps')

      let linha = document.createElement('tr');
      linha.innerHTML = `
      <td>${dados.cep}</td>
      <td>${dados.uf}</td>
      <td>${dados.cidade}</td>
      <td>${dados.bairro}</td>
      <td>${dados.logradouro}</td>
      `;
      tabela.appendChild(linha)
    }
    catch(error){
        console.log('erro na consulta',error)
    }
}
window.onload = buscarCep;