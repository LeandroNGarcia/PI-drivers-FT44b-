const axios = require("axios");
const DVcontroller = require("./DVcontroller");

const getAllDV = async (req, res) => {
  try {
    const { data } = await axios("http://localhost:5000/drivers");
    const drivers = DVcontroller(data)

    res.status(200).json(drivers);
  } catch (error) {
    res.status(500).json({message:"Server Error", error})
  }
};
module.exports = {
  getAllDV,
};
