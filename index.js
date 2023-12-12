const Product = require('./prod.js');
const Category = require('./cate.js');
const Cart = require('./cart.js');
const Order = require('./order.js');

// create product
const product1 = new Product(1, 'T-shirt', 80.000, 'Buku Tebal', 'Shirt');
const product2 = new Product(2, 'Jeans Pants', 190.000, 'Skinny', 'SkinnyJeans');
const product3 = new Product(3, 'Totebag', 45.000, 'Totebag', 'Canvas');

// create category
const bookCategory = new Category(1, 'Shirt');
const atkCategory = new Category(2, 'SkinnyJeans');
const bagCategory = new Category(3, 'Canvas');

const cart = new Cart(1);

// add item to cart
cart.addItem(product1, 2);
cart.addItem(product2, 1);

// view cart
cart.viewCart();

// remove item from cart
cart.removeItem(product1);
cart.removeItem(product3);

cart.viewCart();

// create order from the cart
const order = new Order(1);
order.createOrder(cart);

// display total amount order
order.displayOrderDetails();
