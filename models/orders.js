const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  Product_name: String,
  Brand: String,
  Category: String,
  Size: String,
  Colour: String,
  Status: String,
  Customer_initials: String,
})

const Order = mongoose.model('Order', orderSchema)

exports.Order = Order
