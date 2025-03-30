import mysql from 'mysql2'
import dotenv from 'dotenv'
import cors from 'cors'
import express, { query } from 'express'
import slugify from 'slugify';
import bcrypt from 'bcryptjs';

dotenv.config()

console.log({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
})
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
})

connection.connect((error) => {
    if (error) {
        console.log('erro ao conectar', error)
    }
    else {
        console.log('Conectado')
    }
});
const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Servidor está funcionando!');
});



 app.get('/categorias', (req, res) => {
   let query = 'SELECT categoria FROM categorias';
   connection.query(query, (error, result) => {
       if (error) {
           return res.status(404).json({ error: 'Não encontrado' });
      }
        else {
            return res.status(200).json({ categoria: result });
       }
    })
 });

 app.post('/cadastrar',(req,res) =>{
    const {categoria, slug} = req.body;
    if(!categoria || !slug){
        return res.status(400).json({error:'Todos os campos são obrigatorios'})
    }
    let query = 'INSERT INTO categorias(categoria, slug) VALUES(?,?)';
    let parameters = [categoria, slug]
    connection.query(query,parameters,(error,result)=>{
        if(error){
            return res.status(500).json({error:"Erro ao cadastrar",detail:error});

        }
        res.status(201).json({message: "Categoria cadastrada",id:result.insertId})
    })
 })

app.put('/atualizar/:id',(req,res) =>{
    const{categoria, slug} = req.body;
    const{id} = req.params;
    if(!categoria || !slug){
        return res.status(400).json({error:"Preencha todos os campos"});
    }
    let query = 'UPDATE categorias SET categoria = ?, slug = ? WHERE id = ?'
    let parameters = [categoria, slug,id]

    connection.query(query,parameters,(error,result)=>{
        if(error){
            return res.status(500).json({error: 'Erro ao atualizar ',detail:error})
        }
        if(result.affectedRows === 0 ){
            return res.status(404).json({message: 'ID Não encontrado'})
        }
        res.status(200).json({ message: 'Dados atualizados com sucesso' });

    })
})

app.delete('/deletar/:id',(req,res)=>{
    const {id} = req.params; 
    const query = 'DELETE FROM categorias WHERE id = ?';
    connection.query(query,[id],(error,result)=>{
        if(error){
            return res.status(500).json({error: 'Erro ao deletar registro', detail:error})
        }
        if(result.affectedRows === 0){
            return res.status(404).json({message:'Registro não encontrado'});

        }
        res.status(200).json({message: `Registro com Id ${id} foi deletado com sucesso`})
    });
})

app.post('/cadastrar/categoria',(req,res)=>{
    const {categoria} = req.body;
    const slug = slugify(categoria,{lower:true,strict:true})

    const query = 'INSERT INTO categorias (categoria,slug) Values(?,?)';
    connection.query(query,[categoria,slug], (error,result) =>{
        if(error){
            return res.status(500).json({error:error})
        }
        else{
            return res.status(201).json({message:'Inserido com sucesso', id: result.insertId})
        }
    })
})
// app.post('/cadastrar/regioes',(req,res)=>{
//     const {regiao} = req.body;
//     const slug = slugify(regiao,{})
// })

app.post('/cadastrar/usuarios',async (req,res)=>{
    const {usuario, senha,nome,data_nascimento} = req.body;
    try{
        const salt = await bcrypt.genSalt(10)
        const senhaCriptografada = await bcrypt.hash(senha,salt);

        const query = 'INSERT INTO usuarios(usuario,senha,nome,data_criacao,data_nascimento) VALUES(?,?,?,NOW(),?)';
        connection.query(query,[usuario,senhaCriptografada,nome,data_nascimento],(error,result)=>{
          if(error){
            return res.status(500).json({error: error, message: 'Erro ao inserir usuario'})
          }
          else{
            return res.status(201).json({message: 'Cadastrado com sucesso',id:result.insertId})
          }
        })

    }
    catch(error){
      res.status(500).json({error:error,message: 'Erro ao processar senha'})
    }

})

app.post('/cadastrar/autor',(req,res)=>{
    const{usuario_id,biografia,imagem,link} = req.body;
    if(!usuario_id || !biografia || !imagem || !link){
        return res.status(400).json({error:'Todos os campos são obrigatorios'})
    }
    let query = 'INSERT INTO autores(usuario_id,biografia,imagem,link) Values(?,?,?,?)';
    let parameters = [usuario_id,biografia,imagem,link] 
    connection.query(query.parameters,(error,result)=>{
        if(error){
            return res.status(500).json({error:"Erro ao cadastrar", detail:error});

        }
        res.status(201).json({message:"Realizado com sucesso",id:result.insertId})
    })

})

app.listen(3303, () => {
    console.log('Servidor online!');
    console.log('http://localhost:3303')
})