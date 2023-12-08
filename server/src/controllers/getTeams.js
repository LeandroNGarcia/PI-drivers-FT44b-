const axios = require("axios");
const teamController = require("./teamController");

const getTeams = async (req, res) => {
  try {
    const { data } = await axios("http://localhost:5000/drivers");
    const teams = teamController(data);

    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

module.exports = {
  getTeams,
};
