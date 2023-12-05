const { Router } = require("express");
const { getAllDV } = require("../controllers/getAllDV");
const { getTeams } = require("../controllers/getTeams");
const { deleteDV } = require("../controllers/deleteDV");
const { postDV } = require("../controllers/postDV");
const { getByName } = require("../controllers/getDVByName");
const { getById } = require("../controllers/getDVById");
const { getTeamsByName } = require("../controllers/getTeamsByName");

const router = Router();

router.get("/drivers", getAllDV)
router.get("/driver/:id", getById)
router.get("/driver/", getByName)
router.post("/drivers", postDV)
router.get("/teams", getTeams)
router.get("/teams/:name", getTeamsByName)
router.delete("/drivers/:id", deleteDV)
router.put("/drivers")

module.exports = router;
