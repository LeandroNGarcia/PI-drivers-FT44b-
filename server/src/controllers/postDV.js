const { Driver } = require("../db");
const { Team } = require("../db")

const postDV = async (req, res) => {
  try {
    const { name, lastname, birthday, nationality, image, team1, team2, team3 } =
      req.body;
    const [newDriver, created] = await Driver.findOrCreate({
      where: {
        name,
        lastname,
        birthday,
        nationality,
        image: image ? image : "https://soymotor.com/sites/default/files/imagenes/noticia/palou-indycar-soymotor_1.jpg",
      },
    });
    // Función para agregar un equipo si se proporciona
    const asociated = async (teamName) => {
      if (teamName) {
        const [newTeam] = await Team.findOrCreate({
          where: { name: teamName },
        });
        await newDriver.addTeam(newTeam);
      }
    };

    // Agregar equipos
    await asociated(team1);
    await asociated(team2);
    await asociated(team3);
    res.status(201).json({aprovation: true})
  } catch (error) {
    res.status(400).send(error.message)
  }
};

module.exports = {
  postDV,
};