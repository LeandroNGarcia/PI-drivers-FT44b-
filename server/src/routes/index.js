const { Router } = require("express");
const { deleteDV } = require("../controllers/deleteDV");
const { postDV } = require("../controllers/postDV");
const { Driver } = require("../db")
const controller = require("../controllers/controller");
const tcontroller = require("../controllers/tcontroller");

const router = Router();

router.get("/drivers", (req, res) => {
  try {
    const drivers = controller.allDV();
    res.status(200).json(drivers);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/driver/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const driver = await controller.byId(id);
    res.status(200).json(driver);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/driver/", (req, res) => {
  try {
    const { name } = req.query;
    const driver = controller.byName(name);
    res.status(200).json(driver);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/order/", (req, res) => {
  try {
    const { orderBy, orderDirection } = req.query;

    const validOrderBy = ["birthday", "lastname", "nationality", "name"];
    const validOrderDirections = ["asc", "desc"];

    if (
      !validOrderBy.includes(orderBy) ||
      !validOrderDirections.includes(orderDirection)
    ) {
      throw new Error("Instruccion invalida");
    }
    const drivers = controller.filters(orderBy, orderDirection);
    res.status(200).json(drivers);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/teams", (req, res) => {
  try {
    const teams = tcontroller.allTeams();
    res.status(200).json(teams);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/team/", (req, res) => {
  try {
    const { name } = req.query;
    const team = tcontroller.teamByName(name);
    res.status(200).json(team);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/drivers", postDV);

router.get("/drivers-custom", async (req, res) => {
  try {
    const drivers = await Driver.findAll()
    res.status(200).json(drivers)
  } catch (error) {
    res.status(400).send(error)
  }
})

router.delete("/drivers/:id", deleteDV);

module.exports = router;