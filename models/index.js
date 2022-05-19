// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category

Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignkey: "category_id",
  onDelete: "CASCADE",
});

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
  through: { model: ProductTag, unique: false },
  as: "product_to_tag",
  foreignKey: "product_id",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: { model: ProductTag, unique: false },
  as: "tag_to_product",
  foreignKey: "tag_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
