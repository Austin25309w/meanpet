var mongoose = require('mongoose')

var PetSchema = new mongoose.Schema({
        name: {
                type: String, 
                required: [true, "Pet's name must be more than 3 characters"],
                minlength: [3, "Pet's name must be at least 3 characters long"]
        },
        type: {
                type: String, 
                required: [true, "pet's type must be more than 3 characters"],
                minlength: [3, "Pet's type must be at least 3 characters long"]
        },
        description: { type: String },
        skills_1: { type: String },
        skills_2: { type: String },
        skills_3: { type: String }

}, { timestamps: true })

mongoose.model('Pet', PetSchema)