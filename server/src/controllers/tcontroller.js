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

const allTeams = () => teams;

const teamByName = (name) => {
  const team = teams.filter((a) =>
    a.name.toLowerCase().startsWith(name.toLowerCase())
  );
  return team;
};

module.exports = {
  allTeams,
  teamByName,
};
