const mongoose = require('mongoose')
console.log("routes");

var pet = require('../controllers/pets.js')

module.exports = function (app){
    app.get('/api/pets', pet.showall),

    app.get('/api/onePet/:id', pet.show),

    app.post('/api/create', pet.create),

    app.delete('/api/delete/:id', pet.delete),

    app.patch('/api/update/:id', pet.update)
}
