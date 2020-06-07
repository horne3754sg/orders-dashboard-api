const express = require('express')
const bodyParser = require('bodsy-parser')
const orders = require('../routes/orders')

module.exports = function (app) {
  app.use(bodyParser.json())
  app.use('/api/orders', orders)
}
