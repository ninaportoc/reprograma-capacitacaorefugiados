const express = require("express")
const router = express.Router()
const controller = require("../controller/cadastroController")

router.get("/pessoa/:id", controller.getPersonById)
router.get("/pessoas", controller.getAllPeople)
router.post("/pessoa/cadastrar", controller.addNewPerson)
router.post("/pessoa/login", controller.personLogin)
router.delete("/pessoa/:id", controller.deletePersonById)

module.exports = router