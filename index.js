require("rootpath")();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { routes } = require("./_helpers/routes");

app.use(bodyParser.urlencoded({ extended: false, limit: "10mb" }));
app.use(bodyParser.json());
app.use(cors({ origin: "*", credentials: true}));

routes.forEach(i => app.use(`/${i}`, require(`${i}/${i}.controller`)));

const port = 4000;
app.listen(port, () => console.log(`The server is running on port ${port}`));
