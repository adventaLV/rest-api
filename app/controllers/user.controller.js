const User = require("../models/user.model");

// create and save new user
exports.create = (req, res) => {

    // validate request
    if (!req.body) {
        res.status(400).send({
            message: "Bad Request"
        })
    }

    // create user        
    const user = new User({
        name: req.body.name,
        description: req.body.description,
        enabled: req.body.enabled || false
    });

    // save to database
    User.create(user, (err, data) => {
        if (err) {
            res.status(500).send({
                message: "Internal Server Error"
            })
        } else {
            console.log(data);
            res.send(data);

        }

    })
};

// get all users
exports.getAll = (req, res) => {
    // find users
    User.getAll((err, data) => {
        if (err) {
            res.status(500).send({ message: err.message || "Some error occured at get all users" });
        } else {
            res.send(data);
        }
    });

};

// delete user with id
exports.delete = (req, res) => {
    User.remove(req.params.id, (err, data)=>{
        if(err) {
            if(err.notFound === "not_found"){
                res.status(404).send({ message: err.message || `Not found user with id: ${req.params.id}`  });
            } else {
                res.status(500).send({ message: err.message || "Could not delete user with id: " + req.params.id });
            } 
        }else {
            res.send({message: `Deleted user with id: ${req.params.id} successfully!`});
        }
    });
}