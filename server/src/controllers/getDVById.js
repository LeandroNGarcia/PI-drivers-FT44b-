const { default: axios } = require("axios");

const getById = async (req, res) => {
    const { id } = req.params;
    try {
        const { data } = await axios(`http://localhost:5000/drivers/${id}`)
        const { name, image, description, dob, nationality, teams } = data;

        const driver = {
            name: name.forename,
            lastname: name.surname,
            image: image.url ? image.url :"https://soymotor.com/sites/default/files/imagenes/noticia/palou-indycar-soymotor_1.jpg",
            description: description ? description : "",
            birthday: dob,
            nationality,
            teams
        }

        res.status(200).json(driver)
    } catch (error) {
        res.status(500).json({message:"Server Error", error})
    }
};

module.exports = {
    getById,
}