module.exports = app =>{
    const user = require("../controllers/user.controller");
    var router = require("express").Router();

    // add new user
    router.post("/", user.create);
    // get user by id
    router.get("/:id", user.findById);
    // get all users
    router.get("/", user.getAll);
    // delete user with id
    router.delete("/:id", user.delete);    
    
    app.use('/api/users', router);
}