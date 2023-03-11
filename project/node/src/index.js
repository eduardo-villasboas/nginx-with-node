const express = require('express')

const app = express()
const port = 3000

const config = {
    host: 'db_app', //variável de ambiente vindo do docker-compose
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

function insertOn() {
    const sql = `insert into people(name) values ('eduardo')`
    connection.query(sql)    
}

insertOn()

function getAllPeople(sendResult) {

    const getAllPeopelSql = 'select * from people'
    connection.query(getAllPeopelSql, (_err, result, _fields) => {
        sendResult(result)                
    })


}

app.get('/', (req, res) => {
    getAllPeople(list => {
        const response = `<h1>Full Cycle Rocks!</h1><ul>${list.map(p => `<li>Id: ${p.id}, Name: ${p.name}</li>`).join('')}</ul>`
        res.send(response)
    })
})

const server = app.listen(port, () => {
    console.log(`Listen on port: ${port}`)
})

process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.')
    console.log('Closing http server.')
    server.close(() => {
      console.log('Http server closed.')
      connection.end()
    });
  });