const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    tittle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primarykey: true
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    healtScore: { type: DataTypes.INTEGER },
    puntuation: { type: DataTypes.INTEGER },
    img: { type: DataTypes.TEXT },
    instructions: { type: DataTypes.TEXT }

  });
};
