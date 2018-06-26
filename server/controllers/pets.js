const mongoose = require('mongoose')

var Pet = mongoose.model('Pet')

module.exports = {
    showall : function(req, res){
        Pet.find({}, function(err, petsArray){
            if(err){
                console.log('error', err);
                res.json({message: "error", error: err})
            }else {
            res.json({message: 'success', pets:petsArray})
            }
        })
    },

    show : function(req,res) {
        console.log('SERVER> CONTROLLE > > pets > show function', req.params.id)
        Pet.findOne({_id: req.params.id}, function(err, petObj){
            if(err){
                console.log('error', err);
                res.json({message: "error", error: err})
            } else {
                res.json({message:'success', pet: petObj})
            }
        })
    },



    // title: req.body.title, description: req.body.description
    create : function(req, res){
        console.log('SERVER > create > req.body: ',req.body)
        var pet = new Pet(req.body);

        pet.save(function(err, data){
            if(err){
                console.log("SERVER > create > .save, result: err",err)
                res.json({message:'Error', error: err})
            } else {
                console.log("SERVER > create > .save, result: success", data)
                res.json({message: "success"})
            }
        })
    },

    delete : function(req, res){
        console.log("SERVER > CONTROLLER > pets", req.params.id)
        Pet.deleteOne({_id: req.params.id}, function(err){
            if(err){
                console.log('return error', err);
                res.json({'Error': err})
            } else {
                res.json({message:"removed"})
            }
        })
    },

    update : function(req, res){
        console.log('SERVER > Controller > Update', req.body)
        Pet.update({_id: req.params.id}, {$set:req.body}, function(err, pets){
            if(err){
                console.log('server > pets > Controller = error');
                res.json({'Error': err, error: err})
            } else {
                console.log('serverController > success');
                res.json({message:'Success', data: pets})
            }
        })
    }
}