const { Order } = require('./models/orders')
const mongoose = require('mongoose')
const db = require('./startup/db')

const data = [...Array(20).keys()].map((_id) => {
  return {
    Brand: ['Nike', 'Adidas'][Math.floor(Math.random() * 2)],
    Product_name: ['Air', 'Air Max', 'Air Zoom', 'Air Force'][
      Math.floor(Math.random() * 4)
    ],
    Product_img: '/images/nike-blaze.png',
    Category: ['Men', 'Women', 'Junior'][Math.floor(Math.random() * 3)],
    Size: ['UK 8', 'UK 9', 'UK 10', 'UK 11'][Math.floor(Math.random() * 4)],
    Colour: ['Blue', 'White', 'Black', 'Red'][Math.floor(Math.random() * 4)],
    Status: ['READY', 'ONWAY', 'INQUEUE', 'NOSTOCK'][
      Math.floor(Math.random() * 4)
    ],
    Customer_initials: ['JD', 'MH', 'SP', 'CO'][Math.floor(Math.random() * 4)],
  }
})

require('./startup/db')()

async function seed() {
  await Order.deleteMany({})

  await Order.insertMany(data)

  mongoose.disconnect()

  console.log('Done!')
}

seed()
