const express = require("express");
const cors = require("cors");
const db = require ("./database/index.js")
const router = require("./routers/Todos.js")
const app = express();
const port = 8080;
app.use(express.json());
app.use(cors());
app.use("/api/todos",router); 
app.listen(port, () => {
  console.log(`we are listenin on ${port}`);
});
