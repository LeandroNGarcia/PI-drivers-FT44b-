const { Driver } = require("../db");
const { Op } = require("sequelize");

const getByName = async(req, res) => {
    const { name } = req.query;
    try {
        const driver = await Driver.findAll({
            where:{name:{
                [Op.iLike]:`${name}%`
            }}
        });
        res.status(200).json(driver)
    } catch (error) {
        res.status(500).json({message:"Server Error", error})
    }
};

module.exports = {
    getByName,
}