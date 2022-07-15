const app = require("./src/app")
const PORT = process.env.PORT

app.get("/", (req, res) => {
    res.send({ message: "Boas-vindas à capacitacaorefugiados" })
})

app.listen(PORT, () => console.log(`o servidor está rodando na porta ${PORT}`))