const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Driver",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      code:{
        type: DataTypes.INTEGER,
        allowNull:false
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      image: {
        type: DataTypes.TEXT,
        allowNull:false
      },
      nationality: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    },
    {
      timestamps: false
    }
  );
};
