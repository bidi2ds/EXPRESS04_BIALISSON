// como carregar do mysql atrasves de arquivo externo

const express = require('express')
const mysql=require('mysql2')

const mysql_config = require('./mysql_config')

const app = express()
    app.listen(3000,()=>{
        console.log("servidor em excução")
    })


const connection = mysql.createConnection(mysql_config)