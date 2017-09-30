var portArgument = null

if(process.env.port){
    portArgument = process.env.port
}else{
    portArgument = 3003
}

const port = portArgument
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({ extended: true}))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}`)
})

module.exports = server