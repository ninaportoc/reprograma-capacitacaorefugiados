const cursosModel = require("../models/cursosModel")
const cadastroModel = require("../models/cadastroModel")
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET

const getAllCourses = async (req, res) => {
    try {
        const allCourses = await cursosModel.find()
        res.status(200).json(allCourses)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getCategories = async (req, res) => {
    try {
        const coursesByCategories = await cursosModel.findByCategory(category)
        if (coursesByCategories == null) {
            return res.status(404).json({ message: "categoria inválida" })
        }
        res.status(200).json(coursesByCategories)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getByTitle = async (req, res) => {
    try {
        const coursesByTitle = await cursosModel.findByTitle(title)
        if (coursesByTitle == null) {
            return res.status(404).json({ message: "título inválido" })
        }
        res.status(200).json(coursesByTitle)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getCourseById = async (req, res) => {
    const { id } = req.params
    try {
        const findCourse = await cursosModel.findById(id)
        if (findCourse == null) {
            return res.status(404).json({ message: "id inválido" })
        }
        res.status(200).json(findCourse)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const addNewCourse = async (req, res) => {
    try {
        const authHeader = req.get('authorization')

        if (!authHeader) {
            return res.status(401).json({ message: "Você precisa estar logado para inserir um novo curso!" })
        }
        const token = authHeader.split(" ")[1]
        await jwt.verify(token, SECRET, async function (erro) {
            if (erro) {
                return res.status(403).send("erro de autenticação")
            }
            const { title, category, description } = req.body

            const newCourse = new cursosModel({
                title, category, description
            })

            const savedCourse = await newCourse.save()
            res.status(201).json({ message: "novo curso salvo com sucesso!", savedCourse })
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


const updateCourseById = async (req, res) => {
    try {
        const authHeader = req.get('authorization')

        if (!authHeader) {
            return res.status(401).json({ message: "Você precisa estar logado para atualizar informações sobre um curso!" })
        }
        const token = authHeader.split(" ")[1]
        await jwt.verify(token, SECRET, async function (erro) {
            if (erro) {
                return res.status(403).send("erro de autenticação")
            }
            const { title, description, category } = req.body
            const { id } = req.params

            const findCourse = await cursosModel.findById(id)

            if (findCourse == null) {
                return res.status(404).json({ message: "id inválido" })
            }

            findCourse.title = title || findCourse.title
            findCourse.description = description || findCourse.description
            findCourse.category = category || findCourse.category

            const savedCourse = findCourse.save()
            res.status(200).json({ message: "curso atualizado com sucesso!", savedCourse })
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateAllCourseById = async (req, res) => {
    try {
        const authHeader = req.get('authorization')

        if (!authHeader) {
            return res.status(401).json({ message: "Você precisa estar logado para atualizar informações sobre um curso!" })
        }
        const token = authHeader.split(" ")[1]
        await jwt.verify(token, SECRET, async function (erro) {
            if (erro) {
                return res.status(403).send("erro de autenticação")
            }

            const findCourse = await cursoSchema.findById(req.params.id)

            if (findCourse == null) {
                return res.status(404).json({ message: "id inválido" })
            }

            findCourse.title = title || findCourse.title
            findCourse.description = description || findCourse.description
            findCourse.category = category || findCourse.category

            const savedCourse = findCourse.save()
            res.status(200).json({ message: "curso atualizado com sucesso!", savedCourse })
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteCourseById = async (req, res) => {
    try {
        const authHeader = req.get('authorization')

        if (!authHeader) {
            return res.status(401).json({ message: "Você precisa estar logado para deletar um curso!" })
        }
        const token = authHeader.split(" ")[1]
        await jwt.verify(token, SECRET, async function (erro) {
            if (erro) {
                return res.status(403).send("erro de autenticação")
            }
            const { id } = req.params
            const findCourse = await cursosModel.findById(id)

            if (findCourse == null) {
                return res.status(404).json({ message: "id inválido" })
            }

            await cursosModel.findByIdAndDelete(id)
            res.status(200).json({ message: "curso deletado com sucesso!" })
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAllCourses,
    getCategories,
    getByTitle,
    getCourseById,
    addNewCourse,
    updateCourseById,
    updateAllCourseById,
    deleteCourseById
}