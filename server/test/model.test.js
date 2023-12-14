const { Sequelize } = require("sequelize");
const DriverModel = require("../src/models/Driver");

describe("Driver Model", () => {
  const sequelize = new Sequelize("sqlite::memory:");

  beforeAll(async () => {
    await sequelize.sync();
  });

  it("Deberia crear correctamente un corredor", async () => {
    const Driver = DriverModel(sequelize);
    const driver = await Driver.create({
      where: {
        name: "John",
        lastname: "Doe",
        nationality: "US",
        birthday: "1990-01-01",
      },
    });

    expect(driver.id).toBeDefined();
    expect(driver.name).toBe("John");
    expect(driver.lastname).toBe("Doe");
    expect(driver.image).toBeDefined();
    expect(driver.nationality).toBe("US");
    expect(driver.birthday).toBe("1990-01-01");
  });
});