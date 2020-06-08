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

```
[
    {
        "_id": "5edcf810cbb30baffc29bd6f",
        "Brand": "Nike",
        "Product_name": "Air",
        "Product_img": "/images/nike-blaze.png",
        "Category": "Junior",
        "Size": "UK 11",
        "Colour": "Black",
        "Status": "READY",
        "Customer_initials": "JD",
        "__v": 0,
        "createdAt": "2020-06-07T14:22:08.302Z",
        "updatedAt": "2020-06-07T14:22:08.302Z"
    },
    {
        "_id": "5edcf810cbb30baffc29bd70",
        "Brand": "Nike",
        "Product_name": "Air",
        "Product_img": "/images/nike-blaze.png",
        "Category": "Men",
        "Size": "UK 9",
        "Colour": "White",
        "Status": "READY",
        "Customer_initials": "JD",
        "__v": 0,
        "createdAt": "2020-06-07T14:22:08.303Z",
        "updatedAt": "2020-06-07T14:22:08.303Z"
    },
    ...
]
```

### GET `/orders/:id`

Returns an order by ID

Example `/api/orders/5edcf810cbb30baffc29bd70`

```
{
        "_id": "5edcf810cbb30baffc29bd70",
        "Brand": "Nike",
        "Product_name": "Air",
        "Product_img": "/images/nike-blaze.png",
        "Category": "Men",
        "Size": "UK 9",
        "Colour": "White",
        "Status": "READY",
        "Customer_initials": "JD",
        "__v": 0,
        "createdAt": "2020-06-07T14:22:08.303Z",
        "updatedAt": "2020-06-07T14:22:08.303Z"
    }
```

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

Returns a 200 status and the saved data.

```
{
    "_id": "5ede7ccaf193260c18e11f3c",
    "Brand": "Nike",
    "Product_name": "Test Air Max 2018",
    "Product_img": "/images/nike-blaze.png",
    "Category": "Man",
    "Size": "UK 8",
    "Colour": "Black",
    "Status": "INQUEUE",
    "Customer_initials": "MH",
    "createdAt": "2020-06-08T18:00:42.700Z",
    "updatedAt": "2020-06-08T18:00:42.700Z",
    "__v": 0
}
```

### PUT `/orders/:id`

Update an existing order. Currently you must pass the original parameters

Example `/api/orders/5edcf810cbb30baffc29bd70`

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

Returns a 200 status and the updated data.

```
{
    "_id": "5edcfe233548daa3e0d27365",
    "Brand": "Nike",
    "Product_name": "Test Air Max 2018",
    "Product_img": "/images/nike-blaze.png",
    "Category": "Man",
    "Size": "UK 10",
    "Colour": "Black",
    "Status": "INQUEUE",
    "Customer_initials": "MH",
    "createdAt": "2020-06-07T14:48:03.612Z",
    "updatedAt": "2020-06-08T17:59:12.126Z",
    "__v": 0
}
```

### DELETE `/orders/:id`

Delete an order by ID

Example `/api/orders/5edcf810cbb30baffc29bd70`

Returns a 200 status and the deleted data.
