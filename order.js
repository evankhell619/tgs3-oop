class Order {
  constructor(orderId) {
    this.orderId = orderId;
    this.items = [];
    this.totalAmount = 0;
  }

  createOrder(cart) {
    this.items = [...cart.items];
    this.totalAmount = cart.items.reduce((total, item) => total + item.product.price * item.quantity, 0);

    console.log('order created successfully');
  }

  displayOrderDetails() {
    console.log(`Order ID : ${this.orderId}`);
    console.log('Order Detail:');
    this.items.forEach((item) => {
      console.log(`- ${item.quantity} pcs ${item.product.productName}`);
    });
    console.log(`Total Amount: Rp${this.totalAmount.toFixed(3)}`);
  }
}

module.exports = Order;
