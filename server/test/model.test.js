const { Driver, Team } = require("../src/db");

describe("Driver Model", () => {

  it("Deberia crear correctamente un corredor", async () => {
    await Driver.findOrCreate({
      where: {
        name: "John",
        lastname: "Doe",
        nationality: "US",
        birthday: "1990-01-01",
        image: "https://soymotor.com/sites/default/files/imagenes/noticia/palou-indycar-soymotor_1.jpg"
      },
    });
    const driver = await Driver.findOne({
      where:{
        name: "John"
      }
    })
    expect(driver.id).toBeTruthy();
    expect(driver.name).toBe("John");
    expect(driver.lastname).toBe("Doe");
    expect(driver.image).toBeTruthy();
    expect(driver.nationality).toBe("US");
    expect(driver.birthday).toBe("1990-01-01");
  });
  it("Deberia crear correctamente la asociacion del corredor con sus escuderias", async () => {
    const driver1 = {
      name: "Victor",
      lastname: "Valdez",
      nationality: "French",
      birthday: "1986-08-12",
      image: "https://soymotor.com/sites/default/files/imagenes/noticia/palou-indycar-soymotor_1.jpg",
      team1: "Toyota",
      team2: "Ferrari"
    }
    const newDriver = await Driver.create({
        name: driver1.name,
        lastname: driver1.lastname,
        nationality: driver1.nationality,
        birthday: driver1.birthday,
        image: driver1.image
    })
    const [newTeam1] = await Team.findOrCreate({
      where:{
        name: driver1.team1
      }
    })
    await newDriver.addTeams(newTeam1)
    const [newTeam2] = await Team.findOrCreate({
      where:{
        name: driver1.team2
      }
    })
    await newDriver.addTeams(newTeam2)
    const driver = await Driver.findOne({
      where:{
        name: "Victor"
      },
      include: [{
        model: Team,
        attributes: ["name"]
      }]
    });
    expect(driver.Teams).toEqual(expect.arrayContaining([
      expect.objectContaining({ "name": expect.anything(), "driver_team": expect.anything() })
    ]));
  });
});