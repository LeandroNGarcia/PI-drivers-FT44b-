const { Driver } = require('../db');

const filterOrder = async (req, res) => {
  try {

    const { orderBy, orderDirection } = req.query;

    const validOrderBy = ["birthday", "lastname", "nationality", "name"];
    const validOrderDirections = ["asc","desc"];

    if(!validOrderBy.includes(orderBy) || !validOrderDirections.includes(orderDirection)){
        throw new Error("Instruccion invalida")
    }

    const drivers = await Drivers.findAll({
      order: [[orderBy, orderDirection.toUpperCase()]],
    });

    res.status(200).json(drivers);
  } catch (error) {
    res.status(500).json({ error: 'Hubo un error al procesar la solicitud', message: error.message });
  }
};

module.exports = {
  filterOrder,
};