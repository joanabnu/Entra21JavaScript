import mysql from 'mysql2'
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'mercado',
    port:'3306'
})

// conectar com o banco 
connection.connect(err => {
    if (err){
        console.error('Erro ao conectar ao mysql', err);
        return;
    }
    console.log('---conectado ao banco------ ')

    // realizar a consulta
    connection.query('SELECT * FROM marcas', (err,results) =>{
        if (err){
            console.error('Erro ao executar consulta ao mysql', err);
            return;
        }
        console.log(results)
        // fecha conexao 
        connection.end(err => {
            if(err){
                console.log('Erro ao fechar conexao')
            }else{
                console.log('conexao fechada!!!')
            }
        })
    })
})