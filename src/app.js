require('dotenv-safe').config()
const express = require("express")
const cors = require("cors")
const dataBase = require("./database/mongooseConnect")
const cursos = require("./routes/cursosRoutes")
const cadastro = require("./routes/cadastroRoutes")
const index = require("./routes/index")


const app = express()

app.use(express.json())
app.use(cors())

dataBase.connect()

app.use("/cursos", cursos);
app.use("/usuario", cadastro);
app.use("/", index);



module.exports = app