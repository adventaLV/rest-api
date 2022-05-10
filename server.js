const express = require("express");
const cors = require("cors");
const app = express();

var corsOption = { origin: "http://localhost" };

app.use(cors(corsOption));
// request - content type application/json
app.use(express.json());
// request - content type application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// public directory
app.use(express.static('app/public'));

// routing
require("./app/routes/user.routes")(app);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { console.log(`server is running on port ${PORT} `) });
