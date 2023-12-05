const { Driver, Team } = require("../db");

const postDV = async (req, res) => {
  try {
    const { name, lastname, birthday, nationality, image, teams, description } =
      req.body;
    await Driver.findOrCreate({
      where: {
        name,
        lastname,
        birthday,
        nationality,
        image: image ? image : "https://soymotor.com/sites/default/files/imagenes/noticia/palou-indycar-soymotor_1.jpg",
        description: description ? description : "",
      },
    });
    if (teams) {
      const teamNames = teams.split(",").map((team) => team.trim());

      for (const teamName of teamNames) {
        await Team.findOrCreate({
          where: {
            name: teamName,
          },
        });
      }
    }
    res.status(201).send("Corredor añadido exitosamente")
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postDV,
};
