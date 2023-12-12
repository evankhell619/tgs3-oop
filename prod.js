class Product {
  constructor(productId, productName, price, description,categories) {
    this.productId = productId;
    this.productName = productName;
    this.price = price;
    this.description = description;
    this.categories = categories;
    
  }

  displayInfo() {
    console.log(`Product ID : ${this.productId}`);
    console.log(`Product Name : ${this.productName}`);
    console.log(`Price: Rp.${this.price}`);
    console.log(`Desc: ${this.description}`);
    console.log(`Category: ${this.categories.join(', ')}`);
  }

  updateProduct(updatedProduct) {
    Object.assign(this, updatedProduct);
  }
}

module.exports = Product;
