module.exports = (data) => {
    const drivers = []
    for (const dataDriv of data) {
      const {id, name, image, description, dob, nationality, teams } = dataDriv;
      const driver = {
          id,
          name: name.forename,
          lastname: name.surname,
          image: image.url ? image.url : "https://soymotor.com/sites/default/files/imagenes/noticia/palou-indycar-soymotor_1.jpg",
          description: description ? description : "",
          birthday: dob,
          nationality,
          teams
      };
      drivers.push(driver)
    }
    return drivers
}