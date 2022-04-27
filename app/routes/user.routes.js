module.exports = app =>{
    const user = require("../controllers/user.controller");
    var router = require("express").Router();

    // add new user
    router.post("/", user.create);
    // get all users
    router.get("/", user.getAll);
    
    app.use('/api/users', router);
}