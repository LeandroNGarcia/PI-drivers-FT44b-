const axios = require("axios");
const { Driver, Team, driver_team } = require("../db");

const getAllDV = async (req, res) => {
  try {
    const { data } = await axios("http://localhost:5000/drivers");
    for (const dataDriv of data) {
      const { name, image, description, dob, nationality, teams } = dataDriv;
      await Driver.findOrCreate({
        where: {
          name: name.forename,
          lastname: name.surname,
          image: image.url ? image.url : "https://soymotor.com/sites/default/files/imagenes/noticia/palou-indycar-soymotor_1.jpg",
          description: description ? description : "",
          birthday: dob,
          nationality,
        },
      });

      if(teams) {
        const teamNames = teams.split(",").map((team) => team.trim());

        for (const teamName of teamNames) {
          await Team.findOrCreate({
            where: {
              name: teamName,
            },
          });
        }
      }
    }
    const drivers = await Driver.findAll()

    res.status(200).json(drivers);
  } catch (error) {
    res.status(500).json({message:"Server Error", error})
  }
};
module.exports = {
  getAllDV,
};
