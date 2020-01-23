const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

const homeRoutes = require("./routes/index");
const projectRoutes = require("./routes/projects");
const contactRoutes = require("./routes/contact");
const blogRoutes = require("./routes/blog");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

// ROUTES
app.use(homeRoutes);
app.use(projectRoutes);
app.use(contactRoutes);
app.use(blogRoutes);

app.listen(port, () => {
    console.log("Server running on port ", port);
});