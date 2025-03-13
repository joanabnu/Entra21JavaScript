import mysql from "mysql2"
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "EMPRESAVOOS",
  port: "3306",
})
connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao mysql", err)
    return
  }

  console.log("----conectado ao banco----")

  connection.query("SELECT * FROM voos", (err, results) => {
    if (err) {
      console.error("Erro ao executar consulta ao mysql", err)
      return
    }
    console.log(results)
    connection.end((err) => {
      if (err) {
        console.log("Erro ao fecha conexao ")
      } else {
        console.log("conexao fechado!!")
      }
    })
  })
})
