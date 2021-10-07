// const dotenv = require("dotenv").config();
// const express = require("express");
const app = require('./api/server');
const port = process.env.PORT || 5000;
// const cors = require("cors");

app.listen(port, () => {
  console.log(`Server is alive and well! On port ${port}`);
});

// app.use(express.json());
// app.use(cors());
// app.use("/api", (req, res) => {
//   res.json({ data: "The API is serving data!" });
// });

// console.log("Hey I'm alive!!!");
// console.log(__dirname);
// console.log(__filename);
// console.log(process.env.USER);
// console.log(process.env.PORT);
// console.log(process.env.DB_PASS);
