const users = require("../../data/users");
// const shortId = require("shortid");
const { json } = require("express");

const get = async () => {
  return users;
};

const newUser = ({ username, password }) => {
  const newUser = { username, password };
  users.push(newUser)
  return Promise.resolve(newUser);
};

const welcomeUser = async user => {
    return users.filter(id => id === user.id)
}

module.exports = { get, newUser, welcomeUser };
