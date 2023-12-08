const axios = require("axios");
const DVcontroller = require("./DVcontroller");

const getByName = async (req, res) => {
  const { nameq } = req.query;
  try {
    const { data } = await axios("http://localhost:5000/drivers");
    const drivers = DVcontroller(data)

    const fildv = drivers.filter(
      (a) => a.name.toLowerCase().startsWith(nameq.toLowerCase())
    );

    res.status(200).json(fildv);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

module.exports = {
  getByName,
};
