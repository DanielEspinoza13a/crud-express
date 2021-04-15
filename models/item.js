module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define("Item", {
      text: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return Item;
  };