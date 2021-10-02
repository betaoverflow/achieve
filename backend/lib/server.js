// third party packages
const express = require('express')
const app = express()
require('dotenv').config()

//database
const database = require('../database/db')

// middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const port = process.env.PORT 

// routes
var routes = require('../routes/routes')
app.use('/',routes)

// server
app.listen(port, () =>
{
    console.log('Server running on port: '+ port)
})