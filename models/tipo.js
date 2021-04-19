module.exports = (sequelize, DataTypes) => {
    const Tipo = sequelize.define("Tipo", {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        
      }

    });
    return Tipo;
    
  };