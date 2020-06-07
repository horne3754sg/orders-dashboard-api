const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  Product_name: String,
  Category: String,
  Size: String,
  Colour: String,
  Status: String,
  Customer_Initials: String,
})

const Order = mongoose.model('Order', orderSchema)
