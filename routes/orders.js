const { Order } = require('../models/orders')
const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()

// Get all orders
router.get('/', (req, res) => {})

// Post new order
router.post('/', (req, res) => {})

// Update order
router.put('/:id', (req, res) => {})

// Delete order
router.delete('/:id', (req, res) => {})

module.exports = router
