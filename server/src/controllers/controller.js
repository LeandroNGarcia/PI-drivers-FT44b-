const data = require("../../api/db.json");
const { Driver } = require("../db")

let drivers = [];

drivers = data.drivers.map((d) => ({
  id: d.id,
  name: d.name.forename,
  lastname: d.name.surname,
  image: d.image.url
    ? d.image.url
    : "https://soymotor.com/sites/default/files/imagenes/noticia/palou-indycar-soymotor_1.jpg",
  description: d.description ? d.description : "",
  birthday: d.dob,
  nationality: d.nationality,
  teams: d.teams,
}));

const allDV = () => drivers;

const byId = async (id) => {
try {
  const idN = Number(id);

  // Buscar en el array local
  const driver = drivers.find((d) => d.id === idN);

  // Si se encuentra en el array local, devolverlo
  if (driver) {
    return driver;
  }

  // Si no se encuentra en el array local, buscar en la base de datos
  const driverFromDB = await Driver.findByPk(id);

  // Devolver el resultado de la base de datos
  return driverFromDB;
} catch (error) {
  return error
}
};

const byName = (name) => {
  const driver = drivers.filter((a) =>
    a.name.toLowerCase().startsWith(name.toLowerCase())
  );
  return driver;
};

const filters = (orderBy, orderDirection) => {
  const sortedDrivers = [...drivers].sort((a, b) => {
    if (orderDirection === "asc") {
      return a[orderBy].localeCompare(b[orderBy], {
        sensitivity: "base",
      });
    } else {
      return b[orderBy].localeCompare(a[orderBy], {
        sensitivity: "base",
      });
    }
  });
  return sortedDrivers;
};

module.exports = {
  allDV,
  byId,
  byName,
  filters
};
