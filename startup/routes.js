const bodyParser = require('body-parser')
const orders = require('../routes/orders')
const error = require('../middleware/error')

module.exports = function (app) {
  app.use(bodyParser.json())
  app.use('/api/orders', orders)
  app.use(error)
}
