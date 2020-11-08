const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://deepanwita:anindita.m03@mycluster-nodejs.wxxth.mongodb.net/aliendb?retryWrites=true&w=majority'

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
