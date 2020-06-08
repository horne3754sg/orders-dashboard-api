## Available Scripts

In the project directory, you can run:

### `yarn seed`

This will seed your Database with 20 Randomly generated orders for testing.

### `yarn start`

This will start the server<br />

API URL - click [http://localhost:5000/api/orders/](http://localhost:5000/api/orders/) to view it in the browser.

## Endpoints

### GET `/orders`

Returns an array of all orders

### GET `/orders/:id`

Returns an order by ID

### POST `/orders`

Add a new order, you must pass a json object as the body.

```
{
	"Brand": "Nike",
	"Product_name": "Test Air Max 2018",
	"Product_img": "/images/nike-blaze.png",
	"Category": "Man",
	"Size": "UK 8",
	"Colour": "Black",
	"Status": "INQUEUE",
	"Customer_initials": "MH"
}
```

### PUT `/orders/:id`

Update an existing order. Currently you must pass the original parameters

```
{
	"Brand": "Nike",
	"Product_name": "Test Air Max 2018",
	"Product_img": "/images/nike-blaze.png",
	"Category": "Man",
	"Size": "UK 8",
	"Colour": "Blue", // update this
	"Status": "INQUEUE",
	"Customer_initials": "MH"
}
```

### DELETE `/orders/:id`

Delete an order by ID
