require('dotenv-safe').config()
const DATABASE_URI = process.env.DATABASE_URI
const mongoose = require("mongoose")

const mongooseConnect = async () => {
    try {
        await mongoose.connect(DATABASE_URI, {
            useNewUrlParser : true,
            useUnifiedTopology : true 
        })

        console.log("banco conectado!")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    mongooseConnect
}