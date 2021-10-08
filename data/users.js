const shortId = require("shortId")

const users = [
  {
    id: shortId(),
    username: "Chevy",
    password: "chevy123",
  },
  {
    id: shortId(),
    username: "Riley",
    password: "riley123",
  },
];

module.exports = users