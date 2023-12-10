const { Driver } = require("../db");

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
        teams
      },
    });
    res.status(201).json({aprovation: true})
  } catch (error) {
    res.status(400).send(error.message)
  }
};

module.exports = {
  postDV,
};
