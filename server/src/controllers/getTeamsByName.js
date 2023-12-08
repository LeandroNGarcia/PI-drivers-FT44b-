const axios = require("axios");
const teamController = require("./teamController");

const getTeamsByName = async(req,res) => {
    const { nameq } = req.query;
    try {
        const { data } = await axios("http://localhost:5000/drivers");
        const teams = teamController(data);

        const filterTeam = teams.filter(
            (a) => a.name.toLowerCase().startsWith(nameq.toLowerCase())
          );

        res.status(200).json(filterTeam)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Server Error", error})
    }
};

module.exports = {
    getTeamsByName,
}