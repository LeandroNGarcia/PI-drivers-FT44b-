const { Router } = require("express");
const { deleteDV } = require("../controllers/deleteDV");
const { postDV } = require("../controllers/postDV");
const { Driver } = require("../db")
const controller = require("../controllers/controller");
const tcontroller = require("../controllers/tcontroller");

const router = Router();

//?Ruta para llamar a todos los corredores de la Api
router.get("/drivers", async (req, res) => {
  try {
    const drivers = await controller.allDV();
    res.status(200).json(drivers);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//?Ruta para buscar a los corredores de la Api y de la Database por su ID(Lo uso solo para el detail)
router.get("/driver/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const driver = await controller.byId(id);
    res.status(200).json(driver);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//?Ruta para buscar a los corredores de la Api por su nombre
router.get("/driver/", async (req, res) => {
  try {
    const { name } = req.query;
    const driver = await controller.byName(name);
    res.status(200).json(driver);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//?Ruta que recibe los parametros para ordenar a los corredores de la Api(orderBy es la referencia que utiliza para ordenar y orderDirection es la direccion del ordenamiento(ascendente o descendiente))
router.get("/order/", async (req, res) => {
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
    const drivers = await controller.filters(orderBy, orderDirection);
    res.status(200).json(drivers);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//?Ruta para obtener a todas las escuderias de la Api
router.get("/teams", async (req, res) => {
  try {
    const teams = await tcontroller.allTeams();
    res.status(200).json(teams);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//?Ruta para buscar por nombre las escuderias de la Api
router.get("/team/", async (req, res) => {
  try {
    const { name } = req.query;
    const team = await tcontroller.teamByName(name);
    res.status(200).json(team);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//?Ruta para añadir un nuevo corredor a la Database
router.post("/drivers", postDV);

//?Ruta para llamar a todos los corredores de la Database
router.get("/drivers-custom", async (req, res) => {
  try {
    const drivers = await Driver.findAll()
    res.status(200).json(drivers)
  } catch (error) {
    res.status(400).send(error)
  }
})

//?Ruta para eliminar a los corredores de la Database por ID
router.delete("/drivers/:id", deleteDV);

//?Ruta para obtener los corredores pertenecientes a la escuderia solicitada(tanto de la DB como de la Api)
router.get("/team_drivers/:team", async (req, res) => {
  try {
    const { team } = req.params
    const drivers = await controller.teams_drivers(team);
    res.status(200).json(drivers)
  } catch (error) {
    res.status(400).json(error.message)
  }
})

//?Ruta para obtener todos las nacionalidades y ponerlas como opcion para el form
router.get("/nationalitys", async (req,res) => {
  try {
    const nationalitys = await controller.allNationalitys()
    res.status(200).json(nationalitys)
  } catch (error) {
    res.status(400).json(error.message)
  }
})

module.exports = router;