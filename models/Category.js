// Dependencies
// =======================================================
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// Category model
// ========================================================
class Category extends Model {}

// define table columns
Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category'
  }
);

// exports
// ==========================================================
module.exports = Category;
