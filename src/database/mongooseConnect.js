require('dotenv-safe').config()
const DATABASE_URI = process.env.DATABASE_URI
const mongoose = require("mongoose")

const connect = async () => {
    try {
        await mongoose.connect(DATABASE_URI, {
            useNewUrlParser : true,
            useUnifiedTopology : true 
        })

        console.log("banco de dados conectado!")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
     connect 
    }

