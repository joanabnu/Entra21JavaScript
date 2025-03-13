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
  console.log("---conectar ao banco ----")

  const sql = "UPDATE voos SET assentos_disponiveis = 30 WHERE id_voos =  1 "
  const valores = [30, 1]

  connection.query(sql, valores, (err, result) => {
    if (err) {
      console.error("Erro ao executar UPDATE ", err)
      return
    }

    console.log(`Linhas afetadas: ${result.affectedRows}`)

    connection.end((err) => {
      if (err) {
        console.log("Erro ao fecha conexao")
      } else {
        console.log("conexao fechada")
      }
    })
  })
})
