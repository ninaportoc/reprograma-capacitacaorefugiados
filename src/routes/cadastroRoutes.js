const express = require("express")
const router = express.Router()
const controller = require("../controller/cadastroController")

router.get("/usuario/:id", controller.getUserById)
router.get("/usuario", controller.getAllUsers)
router.post("/usuario/cadastrar", controller.addNewUser)
router.post("/usuario/login", controller.userLogin)
router.delete("/usuario/:id", controller.deleteUserById)

module.exports = router