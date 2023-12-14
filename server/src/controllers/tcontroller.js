const { Team } = require("../db")
const { Op } = require("sequelize")
const data = require("../../api/db.json");
const Teams = data.drivers.flatMap((driver) => {
  const { teams } = driver;
  if (teams) {
    return teams.split(",").map((team) => team.trim());
  }
  return [];
});

const uniqueTeamsSet = new Set(Teams);

const teams = Array.from(uniqueTeamsSet).map((name, index) => ({
  id: index + 1,
  name,
}));

// // const SubiralaBase = async (teams) => {
//   for (const equipo of teams) {
//      Team.findOrCreate({
//       where:{
//         name:equipo.name
//       }
//     })
//   }
// // }

// // SubiralaBase(teams)


const allTeams = async () => {
  // const teams = await Team.findAll();
  return teams
};

const teamByName = async (name) => {
  const team = teams.filter((a) =>
    a.name.toLowerCase().startsWith(name.toLowerCase())
  );
  // const equipo = await Team.findAll({
  //   where:{
  //     name:{
  //       [Op.iLike]:`${name}%`
  //     }
  //   }
  // })
  // return equipo;
  return team
};

module.exports = {
  allTeams,
  teamByName,
};