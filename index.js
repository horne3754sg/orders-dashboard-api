const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = process.env.PORT || 5000

// Connect to DB
require('./startup/cors')(app)
require('./startup/routes')(app)
require('./startup/db')()

app.listen(port, () => console.log(`Listening on port ${port}`))
