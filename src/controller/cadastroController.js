const cadastroModel = require("../models/cadastroModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET

const getUserById = async (req, res) => {
    try {
        const { id } = req.params
        await cadastroModel.findById(id)
        res.status(200).json({ message: "usuário encontrado" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const getAllUsers = async (req, res) => {
    cadastroModel.find(function (err, user) {
        if (err) {
            res.status(500).json({ message: err.message })
        }
        res.status(200).json(user)
    })
}

const addNewUser = (req, res) => {
    const senhaComHash = bcrypt.hashSync(req.body.senha, 10)
    req.body.senha = senhaComHash
    const user = new cadastroModel(req.body)
    user.save(function (error) {
        if (error) {
            res.status(500).json({ message: error.message })
        }
        res.status(201).json(user)
    })
}

const userLogin = (req, res) => {
    cadastroModel.findOne({ email: req.body.email }, function (error, user) {
        if (!user) {
            return res.status(404).send("Não existe usuário com esse email!")
        }
        const senhaValida = bcrypt.compareSync(req.body.senha, user.senha)

        if (!senhaValida) {
            return res.status(403).send("Senha incorreta")
        }

        const token = jwt.sign({ email: req.body.email }, SECRET)
        res.status(200).json(token)
    })
}

const updateUser = async (req, res) => {

    try {
        const authHeader = req.get('authorization')

        if (!authHeader) {
            return res.status(401).json({ message: "Você precisa estar logado para atualizar um usuário!" })
        }
        const token = authHeader.split(" ")[1]
        await jwt.verify(token, SECRET, async function (erro) {
            if (erro) {
                return res.status(403).send("erro de autenticação")
            }
            const findCadastro = await cadastroModel.findById(req.params.id)

            if (!findCadastro) {
                findCadastro.nome = req.body.nome || findCadastro.nome
                findCadastro.email = req.body.email || findCadastro.email
                findCadastro.senha = req.body.senha || findCadastro.senha
            }
            const savedCadastro = await findCadastro.save()

            res.status(200).json({ message: "cadastro atualizado com sucesso!", savedCadastro })
        })
    } catch (error) {
        return res.status(404).json({ message: error.message })
    }
}

const deleteUserById = async (req, res) => {
    try {
        const { id } = req.params
        await cadastroModel.findByIdAndDelete(id)
        res.status(200).json({ message: "user deletado!" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    addNewUser,
    userLogin,
    updateUser,
    deleteUserById
}