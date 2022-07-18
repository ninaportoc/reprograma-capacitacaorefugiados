require('dotenv-safe').config()
const express = require("express")
const cors = require("cors")
const mongoose = require("./database/mongooseConnect")
const cursos = require("./routes/cursosRoutes")
const cadastro = require("./routes/cadastroRoutes")
const index = require("./routes/index")
const swaggerFile = require('../swagger/swagger_output.json')
const swaggerUi = require('swagger-ui-express');


const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect()

app.use(cursos);
app.use(cadastro);
app.use(index);
app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile))



module.exports = app