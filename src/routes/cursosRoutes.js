const controller = require("../controller/cursosController")
const express = require("express")

const router = express.Router()

router.get("/cursos", controller.getAllCourses)
router.get("/curso/categoria", controller.getAllCategories)
router.get("/curso/:id", controller.getCourseById)
router.post("/curso/cadastro", controller.addNewCourse)
router.put("/curso/:id", controller.updateAllCourse)
router.patch("/curso/:id", controller.updateCourse)
router.delete("/curso/:id", controller.deleteCourseById)
