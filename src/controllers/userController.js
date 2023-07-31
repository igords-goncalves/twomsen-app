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
    const user = await user.create({ name, email, post });
    if (res.status === 201) {
        console.log("User created,");
    } else {
        console.log("Something wrong");
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
};
