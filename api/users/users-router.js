const express = require("express");
const Users = require("./users-model");
const userRouter = express.Router()

//GET ALL USERS
userRouter.get("/users", (req, res) => {
  Users.get()
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(500).json(err.message));
});

module.exports = userRouter