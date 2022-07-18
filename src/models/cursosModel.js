const mongoose = require("mongoose")

const cursoSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
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
}
})

const Model = mongoose.model("curso", cursoSchema)

module.exports = Model
