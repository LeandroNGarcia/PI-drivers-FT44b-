const server = require("../src/server.js");
const session = require("supertest");
const agent = session(server);

const driver = {
  name: "Tomas",
  lastname: "Fernandez",
  birthday: "2000-10-14",
  nationality: "Argentine",
  team1: "Toyota",
  team2: "",
  team3: "",
};
const driverMal = {
  lastname: "Fernandez",
  birthday: "2000-10-14",
  nationality: "Argentine",
  team1: "Toyota",
  team2: "",
  team3: "",
};

describe("Testeo de server", () => {
  describe("Ruta post", () => {
    it("Si todo esta bien responde con status 201", async () => {
      await agent.post("/drivers").send(driver).expect(201);
    });
    it("Debe recibir como respuesta un objeto 'aprovation:true'", async () => {
      const res = await agent.post("/drivers").send(driver);
      expect(res.body.aprovation).toEqual(true);
    });
    it("Si algo esta mal responde con status 400 mas el mensaje de error", async () => {
      const res = await agent.post("/drivers").send(driverMal).expect(400);
      expect(res.text).toBeTruthy();
    });
  });

  describe("Ruta delete", () => {
    it("Si elimina al corredor debe devolver un mensaje de que se elimino exitosamente", async () => {
      const res = await agent.delete(
        "/drivers/a3619c1e-4c4d-4c48-a1be-ba4d904728ff"
      );
      expect(res.body.message).toEqual("Corredor eliminado exitosamente");
    });
    it("Si no elimina al corredor debe devolver el mensaje de error", async () => {
      const res = await agent.delete("/drivers/10");
      expect(res.body.error).toBeTruthy();
    });
  });

  describe("Ruta get by id", () => {
    it.only("Debe devolver un objeto con todas las propiedades del corredor(si pertenece a la api)", async () => {
        const res = await agent.get("/driver/1")
        expect(res.body).toHaveProperty("id")
        expect(res.body).toHaveProperty("name")
        expect(res.body).toHaveProperty("lastname")
        expect(res.body).toHaveProperty("nationality")
        expect(res.body).toHaveProperty("birthday")
        expect(res.body).toHaveProperty("teams")
        expect(res.body).toHaveProperty("image")
        expect(res.body).toHaveProperty("description")
    })
    it.only("Debe devolver un objeto con todas las propiedades del corredor(si pertenece a la DB)", async () => {
        const res = await agent.get("/driver/b85ac5ef-da75-411e-981a-3c9918c09948")
        expect(res.body).toHaveProperty("id")
        expect(res.body).toHaveProperty("name")
        expect(res.body).toHaveProperty("lastname")
        expect(res.body).toHaveProperty("nationality")
        expect(res.body).toHaveProperty("birthday")
        expect(res.body).toHaveProperty("Teams")
    })
  })
});
