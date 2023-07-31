const express = require("express");
const path = require('path');
const userController =  require("./controllers/userController.js");

const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', userController.getAllUsers)

app.listen(port, () => `Server running at port ${port}`)