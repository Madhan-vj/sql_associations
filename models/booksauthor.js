'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BooksAuthor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BooksAuthor.belongsTo(models.Book, {foreignKey: 'bookId'})
      BooksAuthor.belongsTo(models.Author, {foreignKey: 'authorId'})
    }
  };
  BooksAuthor.init({
    bookId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BooksAuthor',
  });
  return BooksAuthor;
};