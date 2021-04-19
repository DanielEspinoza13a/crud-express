module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define("Item", {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },
      text: {
        type: DataTypes.STRING,
        
      },
      price: {
        type: DataTypes.STRING,
        
      },

    });
    return Item;
    
    
  };