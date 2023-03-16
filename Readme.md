# My BACKEND

This is A REST API built using NodeJS Express Mongoose

For Database I have used MongoDB and MongoDriver to Manage CRUD operations

<p>&nbsp;<p>

## Getting started

Base URL :- https://stormy-puce-tank-top.cyclic.app/

<p>&nbsp;<p>

### GET Requests

```
GET /products
```

This Route Will Give You a list of products :

```
[
  {
    "_id": "640ec51dbe81ee4a2db8a068",
    "name": "Keyboard",
    "price": 599,
    "originalPrice": 699,
    "discount": 100,
    "category": "Electronics",
    "brand": "Keyboard"
  },
  {
    "_id": "640ec530be81ee4a2db8a069",
    "name": "Samsung 4K monitor",
    "price": 80000,
    "originalPrice": 80100,
    "discount": 100,
    "category": "Electronics",
    "brand": "Samsung"
  }
]
```

<p>&nbsp;<p>

If You want to get a single Product You can get it by its ID

```
/products/640ec51dbe81ee4a2db8a068
```

Reaching this route will give you a product with the same ID:

```
  {
    "_id": "640ec51dbe81ee4a2db8a068",
    "name": "Keyboard",
    "price": 599,
    "originalPrice": 699,
    "discount": 100,
    "category": "Electronics",
    "brand": "Keyboard"
  }
```

<p>&nbsp;<p>

If you want to get query about a specific product you can use

```
/products?name="Samsung 4K monitor"
```

It will return you the product you queried about if exists. In this case it will return

```
  {
    "_id": "640ec530be81ee4a2db8a069",
    "name": "Samsung 4K monitor",
    "price": 80000,
    "originalPrice": 80100,
    "discount": 100,
    "category": "Electronics",
    "brand": "Samsung"
  }
```

<p>&nbsp;<p>

If you want products in particular sorted manner you can use the following quer

```js
// for ascending order
/products?sort=price&order="asc"

// for descending order
/products?sort=price&order="desc"
```
