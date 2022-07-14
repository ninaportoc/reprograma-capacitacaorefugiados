require('dotenv-safe').config
const express = require("express")
const cors = require("cors")
const mongoose = require("./database/mongooseConnect")
const cadastroRoutes = require("./routes/cadastroRoutes")
const cursosRoutes = require("./routes/cursosRoutes")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect()

app.use(cadastroRoutes)
app.use(cursosRoutes)

module.exports= app
