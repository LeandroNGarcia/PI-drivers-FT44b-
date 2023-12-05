const { Team } = require("../db");
const { Op } = require("sequelize")

const getTeamsByName = async(req,res) => {
    const { name } = req.params;
    try {
        const teams = await Team.findAll({
            where:{
                name:{
                    [Op.iLike]: `%${name}%`
                }
            }
        });
        res.status(200).json(teams)
    } catch (error) {
        res.status(500).json({message:"Server Error", error})
    }
};

module.exports = {
    getTeamsByName,
}