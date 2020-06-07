const Joi = require('@hapi/joi')
const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
  {
    Product_name: { type: String, required: true, trim: true },
    Brand: { type: String, required: true, trim: true },
    Category: { type: String, required: true, trim: true },
    Size: { type: String, required: true, trim: true },
    Colour: { type: String, required: true, trim: true },
    Status: { type: String, required: true, trim: true },
    Customer_initials: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  }
)

const Order = mongoose.model('Order', orderSchema)

function validateOrder(order) {
  const schema = Joi.object({
    Product_name: Joi.string().required(),
    Brand: Joi.string().required(),
    Category: Joi.string().required(),
    Size: Joi.string().required(),
    Colour: Joi.string().required(),
    Status: Joi.string().required(),
    Customer_initials: Joi.string().required(),
  })

  return schema.validate(order)
}

exports.Order = Order
exports.validateOrder = validateOrder
