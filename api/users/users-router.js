const express = require("express");
const Users = require("./users-model");
const userRouter = express.Router();

//GET ALL USERS
userRouter.get("/users", (req, res) => {
  Users.get()
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(500).json(err.message));
});

//POST NEW USER
userRouter.post("/register", (req, res) => {
  Users.newUser(req.body)
    .then((user) => res.status(201).json(user))
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

//POST LOGIN USER
userRouter.post("/login", (req, res) => {
  Users.welcomeUser(req.body).then((user) => {
    if (user) {
      res.status(200).json(`Welcome back User!`);
    } else {
      res.status(404).json("User not found");
    }
  });
});

module.exports = userRouter;
