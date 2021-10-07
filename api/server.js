const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");
const userRouter = require('./users/users-router')

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')))
app.use(helmet())
app.use('/api', userRouter)
// app.use("*", (req, res) => {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// })

module.exports = app