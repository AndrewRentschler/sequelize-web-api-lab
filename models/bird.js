'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bird extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  bird.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    primary_color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'bird',
  });
  return bird;
};