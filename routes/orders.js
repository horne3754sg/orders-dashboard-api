const { Order } = require('../models/orders')
const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()

// Get all orders
router.get('/', (req, res) => {
  res.send([])
})

// Post new order
router.post('/', async (req, res) => {
  const {
    Product_name,
    Brand,
    Category,
    Size,
    Colour,
    Status,
    Customer_initials,
  } = req.body

  const order = new Order({
    Product_name,
    Brand,
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
router.put('/:id', (req, res) => {})

// Delete order
router.delete('/:id', (req, res) => {})

module.exports = router
