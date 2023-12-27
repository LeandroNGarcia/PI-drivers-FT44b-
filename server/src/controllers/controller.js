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
    order: [["createdAt", "DESC"]]
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

  const driver = drivers.find((d) => d.id === idN);

  if (driver) {
    return driver;
  }

  const driverFromDB = await Driver.findByPk(id,{
    include:[{
      model: Team,
      attributes: ['name'],
    }]
  });

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

  const nacionalidades = [
    { id: 1, name: "Afghan" },
    { id: 2, name: "Albanian" },
    { id: 3, name: "American" },
    { id: 4, name: "Argentine" },
    { id: 5, name: "Australian" },
    { id: 6, name: "Austrian" },
    { id: 7, name: "Belgian" },
    { id: 8, name: "Brazilian" },
    { id: 9, name: "British" },
    { id: 10, name: "Bulgarian" },
    { id: 11, name: "Canadian" },
    { id: 51, name: "Chilean" },
    { id: 12, name: "Chinese" },
    { id: 13, name: "Colombian" },
    { id: 14, name: "Croatian" },
    { id: 15, name: "Czech" },
    { id: 16, name: "Danish" },
    { id: 17, name: "Dutch" },
    { id: 18, name: "Egyptian" },
    { id: 19, name: "Finnish" },
    { id: 20, name: "French" },
    { id: 21, name: "German" },
    { id: 22, name: "Greek" },
    { id: 23, name: "Hungarian" },
    { id: 24, name: "Indian" },
    { id: 25, name: "Indonesian" },
    { id: 26, name: "Irish" },
    { id: 27, name: "Italian" },
    { id: 28, name: "Japanese" },
    { id: 52, name: "Liechtensteiner" },
    { id: 53, name: "Malaysian" },
    { id: 29, name: "Mexican" },
    { id: 54, name: "Monegasque" },
    { id: 30, name: "New Zealander" },
    { id: 31, name: "Nigerian" },
    { id: 32, name: "Norwegian" },
    { id: 33, name: "Peruvian" },
    { id: 34, name: "Polish" },
    { id: 35, name: "Portuguese" },
    { id: 55, name: "Rhodesian" },
    { id: 36, name: "Romanian" },
    { id: 37, name: "Russian" },
    { id: 38, name: "Scottish" },
    { id: 39, name: "Serbian" },
    { id: 40, name: "Slovak" },
    { id: 41, name: "South African" },
    { id: 42, name: "Spanish" },
    { id: 43, name: "Swedish" },
    { id: 44, name: "Swiss" },
    { id: 45, name: "Turkish" },
    { id: 46, name: "Ukrainian" },
    { id: 47, name: "Uruguayan" },
    { id: 48, name: "Venezuelan" },
    { id: 49, name: "Welsh" },
    { id: 50, name: "Yugoslav" },
  ];

  return nacionalidades;
}

module.exports = {
  allDV,
  byId,
  byName,
  filters,
  teams_drivers,
  allNationalitys
};
