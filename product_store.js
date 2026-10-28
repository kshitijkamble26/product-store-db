
use shop_db

db.createCollection("products")

db.products.insertMany([
  { pid: "P101", number: 1, category: "Electronics", stock: 15 },
  { pid: "P102", number: 2, category: "Clothing", stock: 5 },
  { pid: "P103", number: 3, category: "Books", stock: 8 },
  { pid: "P104", number: 4, category: "Furniture", stock: 20 },
  { pid: "P105", number: 5, category: "Groceries", stock: 3 }
])

// 1. Display all products
db.products.find().pretty()

// 2. Find products whose stock is less than 10
db.products.find({ stock: { $lt: 10 } }).pretty()
