const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://deepanwita:dm221999@docdb-2020-11-08-14-00-25.cluster-cu26gd48t4mr.us-east-2.docdb.amazonaws.com:27017/?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})

const con = mongoose.connection

con.on('open',() =>{
    console.log('connected...')
})

app.use(express.json())

const alienRouter = require('./routers/aliens')

app.use('/aliens',alienRouter)

app.listen(9000,() =>{
    console.log('Server Started...')
})

module.exports=app;
