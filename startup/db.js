const mongoose = require('mongoose')

module.exports = function () {
  const db = 'mongodb://localhost/orders' // this would normally come from a config file or env
  mongoose.set('useNewUrlParser', true)
  mongoose.set('useFindAndModify', false)
  mongoose.set('useCreateIndex', true)
  mongoose.set('useUnifiedTopology', true)
  mongoose.connect(db).then(() => console.log(`Connected to ${db}...`))
}
