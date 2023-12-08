module.exports = (data) => {
    const uniqueTeamsSet = new Set();

    for (const teamF of data) {
      const { teams } = teamF;

      if (teams) {
        const individualTeams = teams.split(",").map((team) => team.trim());

        individualTeams.forEach((team) => uniqueTeamsSet.add(team));
      }
    }

    const uniqueTeams = Array.from(uniqueTeamsSet).map((name, index) => ({
        id: index + 1,
        name,
    }));

    return uniqueTeams
}