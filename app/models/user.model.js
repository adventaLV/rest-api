const sql = require("./db.js");

// class User -> constructor
const User = function (user) {
    this.name = user.name;
    this.description = user.description;
    this.enabled = user.enabled;
}

User.create = (newUser, result) => {
    sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
        if(err) {
            console.log("Error: " + err);
            return;
        }
        
        console.log("created user: ", {id: res.insertId, ...newUser});
        result(null, {id: res.insertId, ...newUser})
    })
};

User.getAll = result => {
    let query = "SELECT * FROM users";
    sql.query(query, (err, res) =>{
        if(err) {
            console.log("Error: " + err);
            result(null, err);
            return;
        }
        console.log("users: " + res);
        result(null, res);
    }); 

}

module.exports = User;