const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static("Plancer"))
app.use(express.static("assets"))
app.use(express.static("views"))



require("./router/router")(app);

app.set("views", __dirname + "/views");
app.set("views engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.listen(PORT, console.log(`Our server goes here ${PORT}`))

