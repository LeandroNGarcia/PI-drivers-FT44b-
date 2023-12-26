const { Op } = require("sequelize");
const { Driver } = require("../db")
const { Team } = require("../db")
const data = require("../../api/db.json");

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

const allDV = async () => {
  const driverDB = await Driver.findAll({
    order: [["id", "ASC"]]
  });

  if(driverDB){
    const AllDv = driverDB.concat(drivers)
    return AllDv
  }
  return drivers
};

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
  const driverFromDB = await Driver.findByPk(id,{
    include:[{
      model: Team,
      attributes: ['name'],
    }]
  });

  // Devolver el resultado de la base de datos
  return driverFromDB;
} catch (error) {
  return error
}
};

const byName = async (name) => {
  const driver = drivers.filter((a) =>
    a.name.toLowerCase().startsWith(name.toLowerCase())
  );
  const driverDB = await Driver.findAll({
    where:{
      name:{
        [Op.iLike]:`${name}%`
      }
    }
  });

  if(driverDB){
    const AllDv = driverDB.concat(driver)
    return AllDv
  }
  return driver
};

const filters = async (orderBy, orderDirection) => {
  const dbDrivers = await Driver.findAll()
  if(dbDrivers){
    const allDV = drivers.concat(dbDrivers);
    const sortedDrivers = [...allDV].sort((a, b) => {
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
  } else {
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
  }
};

const teams_drivers = async (team) => {
  const team_driversDB = await Driver.findAll({
    include: [{
      model: Team,
      where: {
        name: team
      },
    }],
  });
  const teamDrivers = await drivers.filter((driver) => {
    if(driver.teams){
      const driverTeams = driver.teams.split(',').map((t) => t.trim());
      return driverTeams.includes(team);
    }
  });
  if(team_driversDB){
    const alldvs = team_driversDB.concat(teamDrivers)
    return alldvs
  }
  return teamDrivers
}

const allNationalitys = () => {
  const nacionalidadesUnicas = Array.from(new Set(drivers.map((driver) => driver.nationality)));

  const nacionalidadesConId = nacionalidadesUnicas.map((nacionalidad, index) => ({
    id: index + 1,
    nationality: nacionalidad,
  }));

  return nacionalidadesConId;
}

module.exports = {
  allDV,
  byId,
  byName,
  filters,
  teams_drivers,
  allNationalitys
};
