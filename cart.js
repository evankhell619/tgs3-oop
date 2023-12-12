class Cart {
  constructor(cartId) {
    this.cartId = cartId;
    this.items = [];
  }

  addItem(product, quantity) {
    const item = this.items.find((item) => item.product.productId === product.productId);

    if (item) {
      item.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }

    console.log(`${quantity} ${product.productName} add to cart`);
  }

  removeItem(product) {
    const index = this.items.findIndex((item) => item.product.productId === product.productId);

    if (index !== -1) {
      this.items.splice(index, 1);
      console.log(`${product.productName} remove from cart`);
    } else {
      console.log(`${product.productName} not found in cart`);
    }
  }

  viewCart() {
    console.log(`Cart ID : ${this.cartId}`);
    console.log('Cart Contents:');
    this.items.forEach((item) => {
      console.log(`- ${item.quantity} pcs ${item.product.productName}`);
    });

    const totalAmount = this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    console.log(`Total Amount: Rp.${totalAmount.toFixed(3)}`);
  }
}

module.exports = Cart;