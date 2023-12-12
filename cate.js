class Category {
  constructor(categoryId, categoryName) {
    this.categoryId = categoryId;
    this.categoryName = categoryName;
  }

  displayInfo() {
    console.log(`Caregory ID: ${this.categoryId}`);
    console.log(`Category Name: ${this.categoryName}`);
  }

  updateCategory(updatedCategory) {
    Object.assign(this, updatedCategory);
  }

}

module.exports = Category;
