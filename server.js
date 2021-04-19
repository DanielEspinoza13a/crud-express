const express = require("express");
const app = express();
const db = require("./models");
require("./database/associations")

//Settings
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
const apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes);

//run server
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on: http://localhost:${PORT}`);
  });
});