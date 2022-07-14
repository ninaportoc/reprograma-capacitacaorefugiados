const controller = require("../controller/cursosController")
const express = require("express")

const router = express.Router()

router.get("/cursos", controller.getAllCourses)
router.get("/curso/categoria", controller.getCategories)
router.get("/curso/titulo", controller.getByTitle)
router.get("/curso/:id", controller.getCourseById)
router.post("/curso/cadastro", controller.addNewCourse)
router.put("/curso/:id", controller.updateAllCourseById)
router.patch("/curso/:id", controller.updateCourseById)
router.delete("/curso/:id", controller.deleteCourseById)

module.exports = router