const { Driver } = require("../db")

const deleteDV = async(req,res) => {
    const { id } = req.params;
    try {
        const driverToDelete = await Driver.findByPk(id);

        if (!driverToDelete) {
            throw new Error("Driver not found")
        }
        await driverToDelete.destroy();
        res.status(200).json({message:"Corredor eliminado exitosamente"});
    } catch (error) {
        res.status(500).json({message:"Server Error", error})
    }
};

module.exports = {
    deleteDV,
}