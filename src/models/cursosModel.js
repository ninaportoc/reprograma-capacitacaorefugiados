const mongoose = require("mongoose")

const cursoSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        defaut: mongoose.Types.ObjectId
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
    type: String
},
    category: {
    type: [String]
},
    courseID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
        ref: "curso"
} 
})

const Model = mongoose.model("curso", cursoSchema)

module.exports = Model