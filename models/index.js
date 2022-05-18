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

Product.belongstoMany(Tag, {
  as: "product_to_tag",
  through: { model: ProductTag, unique: false },
  foreignKey: "product_id",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongstoMany(Product, {
  as: "tag_to_product",
  through: { model: ProductTag, unique: false },
  foreignKey: "tag_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
