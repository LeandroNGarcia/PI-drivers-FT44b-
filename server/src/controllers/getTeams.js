const { Team } = require("../db")
const getTeams = async(req, res) => {
    try {
        const teams = await Team.findAll();
        res.status(200).json(teams)
    } catch (error) {
        res.status(500).json({message:"Server Error", error})
    }
};

module.exports = {
    getTeams,
}