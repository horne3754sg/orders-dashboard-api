const { Order, validateOrder } = require('../models/orders')
const express = require('express')
const router = express.Router()

// Get all orders
router.get('/', async (req, res) => {
  const orders = await Order.find().sort({
    createdBy: -1,
  })
  res.send(orders)
})

// Get an order by ID
router.get('/:id', async (req, res) => {
  const order = await Order.findById(req.params.id).select('-__v')
  if (!order) console.log('The order was not found')
  res.send(order)
})

// Post new order
router.post('/', async (req, res) => {
  // validate the request body
  const { error } = validateOrder(req.body)

  // return here if we have an error
  if (error) return res.status(400).send(error.details[0].message)

  const {
    Brand,
    Product_name,
    Product_img,
    Category,
    Size,
    Colour,
    Status,
    Customer_initials,
  } = req.body

  const order = new Order({
    Brand,
    Product_name,
    Product_img,
    Category,
    Size,
    Colour,
    Status,
    Customer_initials,
  })

  await order.save()

  res.send(order)
})

// Update order
// If the request comes from a form, then the other params will be sent with the request
// But if you are using a tool like Postman, you need to send all the params or it will fail validation
// It may make sense to get the requested order and replace the updated param and then validate
router.put('/:id', async (req, res) => {
  // validate the request body
  const { error } = validateOrder(req.body)

  // return here if we have an error
  if (error) return res.status(400).send(error.details[0].message)

  const {
    Brand,
    Product_name,
    Product_img,
    Category,
    Size,
    Colour,
    Status,
    Customer_initials,
  } = req.body

  const order = await Order.findByIdAndUpdate(
    req.params.id,
    {
      Brand,
      Product_name,
      Product_img,
      Category,
      Size,
      Colour,
      Status,
      Customer_initials,
    },
    { new: true }
  )

  if (!order) return res.status(404).send('The order was not found')

  res.send(order)
})

// Delete order
router.delete('/:id', async (req, res) => {
  const order = await Order.findByIdAndDelete(req.params.id)
  if (!order) return res.status(404).send('The order was not found')
  res.send(order)
})

module.exports = router
