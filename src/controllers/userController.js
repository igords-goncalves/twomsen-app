// Create a instance of model, make and prepare requests
// a controller is a comunication between server and model

const UserModel = require("../models/userModel.js");
const connection = require("../database");

const user = new UserModel(connection);

async function getAllUsers(req, res) {
    if (res.status === 500) throw err;
    const users = await user.findAll();
    res.render("index", { users });
}

async function getUserById(req, res, id) {
    if (res.status === 500) throw err;
    const user = await user.findById(id);
    res.render("index", user);
}

async function createUser(req, res) {
    const { name, email, post } = req.body;
    const newUser = await user.create({ name, email, post });
    res.status(201).json(newUser);
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
};
