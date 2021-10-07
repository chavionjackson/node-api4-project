const users = require("../../data/users");
// const { json } = require("express")

const get = async () => {
  return users;
};

module.exports = { get };
