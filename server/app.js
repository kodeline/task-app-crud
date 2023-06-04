const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const routes = require("./routes/TaskRoute")

const cors = require("cors");

const app = express();
const PORT = process.env.PORT | 3000;

// Middlewares 
app.use(express.json());
app.use(cors());

//Conexion con la base de datos
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado a MongoDB"))
  .catch(error => console.log(error))

app.use(routes)

app.listen(PORT, () => console.log(`Servidor en el puerto ${PORT}`))