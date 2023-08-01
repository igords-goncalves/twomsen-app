const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const userController =  require("./controllers/userController.js");

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'))
app.use(express.static('js'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', userController.getAllUsers)
app.post('/', userController.createUser)

app.listen(port, () => `Server running at port ${port}`)